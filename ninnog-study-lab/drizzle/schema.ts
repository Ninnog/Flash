import { index, int, json, mysqlEnum, mysqlTable, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  username: varchar("username", { length: 80 }).unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  passwordHash: text("passwordHash"),
  avatarPreset: varchar("avatarPreset", { length: 40 }),
  avatarUrl: text("avatarUrl"),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["admin", "user"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export const subjects = mysqlTable("subjects", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 80 }).notNull().unique(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  accent: varchar("accent", { length: 24 }).notNull().default("#5DD6C9"),
  description: text("description"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export const chapters = mysqlTable("chapters", {
  id: int("id").autoincrement().primaryKey(),
  subjectId: int("subjectId").notNull().references(() => subjects.id, { onDelete: "cascade" }),
  name: varchar("name", { length: 120 }).notNull(),
  slug: varchar("slug", { length: 140 }).notNull(),
  position: int("position").notNull().default(0),
  description: text("description"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => [
  uniqueIndex("chapters_subject_name_idx").on(table.subjectId, table.name),
  index("chapters_subject_idx").on(table.subjectId),
]);

export const revisionCards = mysqlTable("revision_cards", {
  id: int("id").autoincrement().primaryKey(),
  subjectId: int("subjectId").notNull().references(() => subjects.id, { onDelete: "cascade" }),
  chapterId: int("chapterId").references(() => chapters.id, { onDelete: "set null" }),
  title: varchar("title", { length: 180 }).notNull(),
  content: text("content").notNull(),
  tags: json("tags").$type<string[]>().notNull(),
  masteryHint: mysqlEnum("masteryHint", ["new", "learning", "confident"]).notNull().default("new"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => [
  index("revision_cards_subject_idx").on(table.subjectId),
  index("revision_cards_chapter_idx").on(table.chapterId),
]);

export const exercises = mysqlTable("exercises", {
  id: int("id").autoincrement().primaryKey(),
  subjectId: int("subjectId").notNull().references(() => subjects.id, { onDelete: "cascade" }),
  chapterId: int("chapterId").references(() => chapters.id, { onDelete: "set null" }),
  kind: mysqlEnum("kind", ["course", "proof", "oral"]).notNull(),
  title: varchar("title", { length: 180 }).notNull(),
  statement: text("statement").notNull(),
  solution: text("solution"),
  notes: text("notes"),
  imageUrl: text("imageUrl"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => [
  index("exercises_subject_idx").on(table.subjectId),
  index("exercises_chapter_idx").on(table.chapterId),
  index("exercises_kind_idx").on(table.kind),
]);

export const studySheets = mysqlTable("study_sheets", {
  id: int("id").autoincrement().primaryKey(),
  subjectId: int("subjectId").notNull().references(() => subjects.id, { onDelete: "cascade" }),
  chapterId: int("chapterId").references(() => chapters.id, { onDelete: "set null" }),
  title: varchar("title", { length: 180 }).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => [index("study_sheets_subject_idx").on(table.subjectId), index("study_sheets_chapter_idx").on(table.chapterId)]);

export const mindMaps = mysqlTable("mind_maps", {
  id: int("id").autoincrement().primaryKey(),
  subjectId: int("subjectId").notNull().references(() => subjects.id, { onDelete: "cascade" }),
  title: varchar("title", { length: 180 }).notNull(),
  content: text("content"),
  imageUrl: text("imageUrl"),
  description: text("description"),
  linkedCardIds: json("linkedCardIds").$type<number[]>().notNull(),
  nodes: json("nodes").$type<Array<{ id: string; parentId?: string; label: string; content: string; cardId?: number; x: number; y: number }>>(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => [index("mind_maps_subject_idx").on(table.subjectId)]);

export const studySessions = mysqlTable("study_sessions", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").references(() => users.id, { onDelete: "set null" }),
  mode: mysqlEnum("mode", ["cards", "exercises", "oral", "mind_maps"]).notNull(),
  subjectId: int("subjectId").references(() => subjects.id, { onDelete: "set null" }),
  itemCount: int("itemCount").notNull().default(0),
  correctCount: int("correctCount").notNull().default(0),
  durationSeconds: int("durationSeconds").notNull().default(0),
  settings: json("settings").$type<{ sessionSize?: number; subjectId?: number; chapterId?: number | null; shuffle?: boolean; durationMinutes?: number; mastery?: "new" | "learning" | "confident"; mode?: "revision" | "entrainement" | "oral"; correction?: "immediate" | "deferred"; resourceType?: "all" | "cards" | "exercises" | "oral" | "mind_maps"; resourceIds?: number[]; startedAt?: number }>(),
  completedAt: timestamp("completedAt").defaultNow().notNull(),
}, (table) => [index("study_sessions_user_idx").on(table.userId)]);

export const masteryRecords = mysqlTable("mastery_records", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
  resourceType: mysqlEnum("resourceType", ["card", "exercise"]).notNull(),
  resourceId: int("resourceId").notNull(),
  status: mysqlEnum("status", ["new", "learning", "confident"]).notNull().default("new"),
  lastReviewedAt: timestamp("lastReviewedAt").defaultNow().notNull(),
  reviewCount: int("reviewCount").notNull().default(0),
}, (table) => [
  uniqueIndex("mastery_user_resource_idx").on(table.userId, table.resourceType, table.resourceId),
  index("mastery_user_idx").on(table.userId),
]);

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
