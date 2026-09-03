import { asc, desc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import crypto from "node:crypto";
import { chapters, exercises, InsertUser, mindMaps, revisionCards, studySessions, studySheets, subjects, users } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function getUserById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
  return result[0];
}

export async function getUserByUsername(username: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
  return result[0];
}

export async function getLocalUsers() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(users).where(eq(users.loginMethod, "local")).orderBy(asc(users.createdAt));
}

export async function createLocalUser(input: { username: string; name: string; email?: string | null; passwordHash?: string | null }) {
  const db = requireDb(await getDb());
  const openId = `local_${crypto.randomUUID()}`;
  const inserted = await db.insert(users).values({
    openId,
    username: input.username,
    name: input.name,
    email: input.email ?? null,
    passwordHash: input.passwordHash ?? null,
    loginMethod: "local",
    lastSignedIn: new Date(),
  });
  const id = Number(inserted[0].insertId);
  const user = await getUserById(id);
  if (!user) throw new Error("Le compte n’a pas pu être créé.");
  return user;
}

export async function updateLocalProfile(id: number, input: { name?: string; preset?: string | null; url?: string | null }) {
  const db = requireDb(await getDb());
  await db.update(users).set({ name: input.name?.trim(), avatarPreset: input.preset ?? null, avatarUrl: input.url ?? null }).where(eq(users.id, id));
  return getUserById(id);
}

export async function updateUserAvatar(id: number, avatar: { preset?: string | null; url?: string | null }) {
  return updateLocalProfile(id, { preset: avatar.preset, url: avatar.url });
}

export async function touchUserLogin(id: number) {
  const db = requireDb(await getDb());
  await db.update(users).set({ lastSignedIn: new Date() }).where(eq(users.id, id));
}

function requireDb(db: Awaited<ReturnType<typeof getDb>>) {
  if (!db) throw new Error("La base de données n’est pas disponible.");
  return db;
}

export async function getStudyOverview() {
  const db = requireDb(await getDb());
  const [subjectRows, chapterRows, cardRows, exerciseRows, mapRows] = await Promise.all([
    db.select().from(subjects).orderBy(asc(subjects.name)),
    db.select().from(chapters).orderBy(asc(chapters.position), asc(chapters.name)),
    db.select().from(revisionCards).orderBy(desc(revisionCards.updatedAt)),
    db.select().from(exercises).orderBy(desc(exercises.updatedAt)),
    db.select().from(mindMaps).orderBy(desc(mindMaps.updatedAt)),
  ]);

  const cardCountBySubject = new Map<number, number>();
  cardRows.forEach((card) => cardCountBySubject.set(card.subjectId, (cardCountBySubject.get(card.subjectId) ?? 0) + 1));
  const exerciseCountBySubject = new Map<number, number>();
  exerciseRows.forEach((exercise) => exerciseCountBySubject.set(exercise.subjectId, (exerciseCountBySubject.get(exercise.subjectId) ?? 0) + 1));

  return {
    stats: {
      cards: cardRows.length,
      exercises: exerciseRows.length,
      mindMaps: mapRows.length,
      subjects: subjectRows.length,
    },
    subjects: subjectRows.map((subject) => ({
      ...subject,
      cardCount: cardCountBySubject.get(subject.id) ?? 0,
      exerciseCount: exerciseCountBySubject.get(subject.id) ?? 0,
      chapters: chapterRows.filter((chapter) => chapter.subjectId === subject.id),
    })),
    recentCards: cardRows.slice(0, 5),
  };
}

export async function getLibraryCards(input: { subjectId?: number; chapterId?: number | null; mastery?: "new" | "learning" | "confident"; search?: string }) {
  const db = requireDb(await getDb());
  const rows = await db
    .select({
      id: revisionCards.id,
      title: revisionCards.title,
      content: revisionCards.content,
      tags: revisionCards.tags,
      masteryHint: revisionCards.masteryHint,
      updatedAt: revisionCards.updatedAt,
      subjectId: subjects.id,
      subjectName: subjects.name,
      subjectAccent: subjects.accent,
      chapterId: chapters.id,
      chapterName: chapters.name,
    })
    .from(revisionCards)
    .innerJoin(subjects, eq(revisionCards.subjectId, subjects.id))
    .leftJoin(chapters, eq(revisionCards.chapterId, chapters.id))
    .orderBy(asc(subjects.name), asc(chapters.position), asc(revisionCards.title));

  const search = input.search?.trim().toLocaleLowerCase("fr");
  return rows.filter((row) => {
    const inSubject = !input.subjectId || row.subjectId === input.subjectId;
    const inChapter = input.chapterId === undefined || row.chapterId === input.chapterId;
    const haystack = `${row.title} ${row.content} ${row.subjectName} ${row.chapterName ?? ""} ${(row.tags ?? []).join(" ")}`.toLocaleLowerCase("fr");
    const inMastery = !input.mastery || row.masteryHint === input.mastery;
    return inSubject && inChapter && inMastery && (!search || haystack.includes(search));
  });
}

export async function getExercises(input: { kind?: "course" | "proof" | "oral"; subjectId?: number; chapterId?: number | null }) {
  const db = requireDb(await getDb());
  const rows = await db
    .select({
      id: exercises.id,
      kind: exercises.kind,
      title: exercises.title,
      statement: exercises.statement,
      solution: exercises.solution,
      notes: exercises.notes,
      imageUrl: exercises.imageUrl,
      updatedAt: exercises.updatedAt,
      subjectId: subjects.id,
      subjectName: subjects.name,
      subjectAccent: subjects.accent,
      chapterId: chapters.id,
      chapterName: chapters.name,
    })
    .from(exercises)
    .innerJoin(subjects, eq(exercises.subjectId, subjects.id))
    .leftJoin(chapters, eq(exercises.chapterId, chapters.id))
    .orderBy(asc(subjects.name), asc(chapters.position), asc(exercises.title));

  return rows.filter((row) => (!input.kind || row.kind === input.kind) && (!input.subjectId || row.subjectId === input.subjectId) && (input.chapterId === undefined || row.chapterId === input.chapterId));
}

export async function getMindMaps() {
  const db = requireDb(await getDb());
  return db
    .select({
      id: mindMaps.id,
      title: mindMaps.title,
      content: mindMaps.content,
      imageUrl: mindMaps.imageUrl,
      description: mindMaps.description,
      linkedCardIds: mindMaps.linkedCardIds,
      nodes: mindMaps.nodes,
      updatedAt: mindMaps.updatedAt,
      subjectId: subjects.id,
      subjectName: subjects.name,
      subjectAccent: subjects.accent,
    })
    .from(mindMaps)
    .innerJoin(subjects, eq(mindMaps.subjectId, subjects.id))
    .orderBy(asc(subjects.name), asc(mindMaps.title));
}

export async function createSubject(input: { name: string; slug: string; accent?: string; description?: string | null }) {
  const db = requireDb(await getDb());
  const result = await db.insert(subjects).values({ name: input.name, slug: input.slug, accent: input.accent ?? "#5DD6C9", description: input.description ?? null });
  return { id: result[0].insertId };
}

export async function createChapter(input: { subjectId: number; name: string; slug: string; position?: number; description?: string | null }) {
  const db = requireDb(await getDb());
  const result = await db.insert(chapters).values({ subjectId: input.subjectId, name: input.name, slug: input.slug, position: input.position ?? 0, description: input.description ?? null });
  return { id: result[0].insertId };
}

export async function updateSubject(input: { id: number; name: string; slug: string; accent?: string; description?: string | null }) {
  const db = requireDb(await getDb());
  await db.update(subjects).set({ name: input.name, slug: input.slug, accent: input.accent ?? "#5DD6C9", description: input.description ?? null }).where(eq(subjects.id, input.id));
  return { success: true } as const;
}

export async function removeSubject(id: number) {
  const db = requireDb(await getDb());
  await db.delete(subjects).where(eq(subjects.id, id));
  return { success: true } as const;
}

export async function createExercise(input: { subjectId: number; chapterId?: number | null; kind: "course" | "proof" | "oral"; title: string; statement: string; solution?: string | null; notes?: string | null }) {
  const db = requireDb(await getDb());
  const result = await db.insert(exercises).values({ subjectId: input.subjectId, chapterId: input.chapterId ?? null, kind: input.kind, title: input.title, statement: input.statement, solution: input.solution ?? null, notes: input.notes ?? null });
  return { id: result[0].insertId };
}

export async function updateExercise(input: { id: number; subjectId: number; chapterId?: number | null; kind: "course" | "proof" | "oral"; title: string; statement: string; solution?: string | null; notes?: string | null }) {
  const db = requireDb(await getDb());
  await db.update(exercises).set({ subjectId: input.subjectId, chapterId: input.chapterId ?? null, kind: input.kind, title: input.title, statement: input.statement, solution: input.solution ?? null, notes: input.notes ?? null }).where(eq(exercises.id, input.id));
  return { success: true } as const;
}

export async function removeExercise(id: number) {
  const db = requireDb(await getDb());
  await db.delete(exercises).where(eq(exercises.id, id));
  return { success: true } as const;
}

export async function createRevisionCard(input: {
  subjectId: number;
  chapterId?: number | null;
  title: string;
  content: string;
  tags: string[];
}) {
  const db = requireDb(await getDb());
  const result = await db.insert(revisionCards).values({
    subjectId: input.subjectId,
    chapterId: input.chapterId ?? null,
    title: input.title,
    content: input.content,
    tags: input.tags,
  });
  return { id: result[0].insertId };
}

export async function updateRevisionCard(input: {
  id: number;
  subjectId: number;
  chapterId?: number | null;
  title: string;
  content: string;
  tags: string[];
}) {
  const db = requireDb(await getDb());
  await db.update(revisionCards).set({
    subjectId: input.subjectId,
    chapterId: input.chapterId ?? null,
    title: input.title,
    content: input.content,
    tags: input.tags,
  }).where(eq(revisionCards.id, input.id));
  return { success: true } as const;
}

export async function removeRevisionCard(id: number) {
  const db = requireDb(await getDb());
  await db.delete(revisionCards).where(eq(revisionCards.id, id));
  return { success: true } as const;
}

export async function createMindMap(input: { subjectId: number; title: string; description?: string | null; content?: string | null; nodes: Array<{ id: string; parentId?: string; label: string; content: string; cardId?: number; x: number; y: number }> }) {
  const db = requireDb(await getDb());
  const result = await db.insert(mindMaps).values({ subjectId: input.subjectId, title: input.title, description: input.description ?? null, content: input.content ?? null, nodes: input.nodes, linkedCardIds: input.nodes.flatMap((node) => node.cardId ? [node.cardId] : []) });
  return { id: result[0].insertId };
}

export async function updateMindMap(input: { id: number; subjectId: number; title: string; description?: string | null; content?: string | null; nodes: Array<{ id: string; parentId?: string; label: string; content: string; cardId?: number; x: number; y: number }> }) {
  const db = requireDb(await getDb());
  await db.update(mindMaps).set({ subjectId: input.subjectId, title: input.title, description: input.description ?? null, content: input.content ?? null, nodes: input.nodes, linkedCardIds: input.nodes.flatMap((node) => node.cardId ? [node.cardId] : []) }).where(eq(mindMaps.id, input.id));
  return { success: true } as const;
}

export async function removeMindMap(id: number) {
  const db = requireDb(await getDb());
  await db.delete(mindMaps).where(eq(mindMaps.id, id));
  return { success: true } as const;
}

export async function updateMindMapNodes(id: number, nodes: Array<{ id: string; parentId?: string; label: string; content: string; cardId?: number; x: number; y: number }>) {
  const db = requireDb(await getDb());
  await db.update(mindMaps).set({
    nodes,
    linkedCardIds: nodes.flatMap((node) => node.cardId ? [node.cardId] : []),
  }).where(eq(mindMaps.id, id));
  return { success: true } as const;
}

export async function createStudySession(input: { userId: number; mode: "cards" | "exercises" | "oral" | "mind_maps"; subjectId?: number; itemCount: number; correctCount: number; durationSeconds: number; settings?: { sessionSize?: number; subjectId?: number; chapterId?: number | null; shuffle?: boolean; durationMinutes?: number; mastery?: "new" | "learning" | "confident"; mode?: "revision" | "entrainement" | "oral"; correction?: "immediate" | "deferred"; resourceIds?: number[]; startedAt?: number } }) {
  const db = requireDb(await getDb());
  await db.insert(studySessions).values(input);
  return { success: true } as const;
}

export async function getSubjectContent(subjectId: number) {
  const db = requireDb(await getDb());
  const [chapterRows, cardRows, exerciseRows, sheetRows, mapRows] = await Promise.all([
    db.select().from(chapters).where(eq(chapters.subjectId, subjectId)).orderBy(asc(chapters.position), asc(chapters.name)),
    db.select().from(revisionCards).where(eq(revisionCards.subjectId, subjectId)).orderBy(asc(revisionCards.title)),
    db.select().from(exercises).where(eq(exercises.subjectId, subjectId)).orderBy(asc(exercises.title)),
    db.select().from(studySheets).where(eq(studySheets.subjectId, subjectId)).orderBy(asc(studySheets.title)),
    db.select().from(mindMaps).where(eq(mindMaps.subjectId, subjectId)).orderBy(asc(mindMaps.title)),
  ]);
  return { chapters: chapterRows, cards: cardRows, exercises: exerciseRows, sheets: sheetRows, mindMaps: mapRows };
}

export async function getStudySheets(input: { subjectId?: number; chapterId?: number }) {
  const db = requireDb(await getDb());
  const rows = await db.select({ id: studySheets.id, title: studySheets.title, content: studySheets.content, subjectId: subjects.id, subjectName: subjects.name, chapterId: chapters.id, chapterName: chapters.name, updatedAt: studySheets.updatedAt }).from(studySheets).innerJoin(subjects, eq(studySheets.subjectId, subjects.id)).leftJoin(chapters, eq(studySheets.chapterId, chapters.id)).orderBy(asc(subjects.name), asc(studySheets.title));
  return rows.filter((row) => (!input.subjectId || row.subjectId === input.subjectId) && (!input.chapterId || row.chapterId === input.chapterId));
}

export async function createStudySheet(input: { subjectId: number; chapterId?: number | null; title: string; content: string }) {
  const db = requireDb(await getDb());
  const result = await db.insert(studySheets).values({ subjectId: input.subjectId, chapterId: input.chapterId ?? null, title: input.title, content: input.content });
  return { id: result[0].insertId };
}

export async function getUserStudySessions(userId: number) {
  const db = requireDb(await getDb());
  return db.select({
    id: studySessions.id,
    mode: studySessions.mode,
    itemCount: studySessions.itemCount,
    correctCount: studySessions.correctCount,
    durationSeconds: studySessions.durationSeconds,
    settings: studySessions.settings,
    completedAt: studySessions.completedAt,
    subjectName: subjects.name,
  }).from(studySessions).leftJoin(subjects, eq(studySessions.subjectId, subjects.id)).where(eq(studySessions.userId, userId)).orderBy(desc(studySessions.completedAt));
}
