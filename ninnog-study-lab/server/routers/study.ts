import { z } from "zod";
import { createChapter, createExercise, createMindMap, createRevisionCard, createStudySession, createStudySheet, createSubject, getExercises, getLibraryCards, getMindMaps, getStudyOverview, getStudySheets, getSubjectContent, getUserStudySessions, removeExercise, removeMindMap, removeRevisionCard, removeSubject, updateExercise, updateMindMap, updateMindMapNodes, updateRevisionCard, updateSubject } from "../db";
import { protectedProcedure, publicProcedure, router } from "../_core/trpc";

const exerciseKind = z.enum(["course", "proof", "oral"]);
const cardInput = z.object({
  subjectId: z.number().int().positive(),
  chapterId: z.number().int().positive().nullable().optional(),
  title: z.string().trim().min(2).max(180),
  content: z.string().trim().min(2).max(10000),
  tags: z.array(z.string().trim().min(1).max(40)).max(12),
});
const mindMapNode = z.object({
  id: z.string().min(1).max(48),
  label: z.string().trim().min(1).max(120),
  content: z.string().trim().max(1200),
  cardId: z.number().int().positive().optional(),
  parentId: z.string().min(1).max(48).optional(),
  x: z.number().min(0).max(100),
  y: z.number().min(0).max(100),
});

export const studyRouter = router({
  overview: publicProcedure.query(() => getStudyOverview()),
  library: publicProcedure
    .input(z.object({ subjectId: z.number().int().positive().optional(), chapterId: z.number().int().positive().nullable().optional(), mastery: z.enum(["new", "learning", "confident"]).optional(), search: z.string().max(120).optional() }))
    .query(({ input }) => getLibraryCards(input)),
  exercises: publicProcedure
    .input(z.object({ kind: exerciseKind.optional(), subjectId: z.number().int().positive().optional(), chapterId: z.number().int().positive().nullable().optional() }))
    .query(({ input }) => getExercises(input)),
  mindMaps: publicProcedure.query(() => getMindMaps()),
  sheets: publicProcedure.input(z.object({ subjectId: z.number().int().positive().optional(), chapterId: z.number().int().positive().optional() }).optional()).query(({ input }) => getStudySheets(input ?? {})),
  subjectContent: publicProcedure.input(z.object({ subjectId: z.number().int().positive() })).query(({ input }) => getSubjectContent(input.subjectId)),
  sheetsCreate: protectedProcedure.input(z.object({ subjectId: z.number().int().positive(), chapterId: z.number().int().positive().nullable().optional(), title: z.string().trim().min(2).max(180), content: z.string().trim().min(2).max(30000) })).mutation(({ input }) => createStudySheet(input)),
  subjectsCreate: protectedProcedure.input(z.object({ name: z.string().trim().min(2).max(80), slug: z.string().trim().min(2).max(100), accent: z.string().max(24).optional(), description: z.string().trim().max(1000).nullable().optional() })).mutation(({ input }) => createSubject(input)),
  subjectsUpdate: protectedProcedure.input(z.object({ id: z.number().int().positive(), name: z.string().trim().min(2).max(80), slug: z.string().trim().min(2).max(100), accent: z.string().max(24).optional(), description: z.string().trim().max(1000).nullable().optional() })).mutation(({ input }) => updateSubject(input)),
  subjectsRemove: protectedProcedure.input(z.object({ id: z.number().int().positive() })).mutation(({ input }) => removeSubject(input.id)),
  chaptersCreate: protectedProcedure.input(z.object({ subjectId: z.number().int().positive(), name: z.string().trim().min(2).max(120), slug: z.string().trim().min(2).max(140), position: z.number().int().min(0).optional(), description: z.string().trim().max(1000).nullable().optional() })).mutation(({ input }) => createChapter(input)),
  exercisesCreate: protectedProcedure.input(z.object({ subjectId: z.number().int().positive(), chapterId: z.number().int().positive().nullable().optional(), kind: exerciseKind, title: z.string().trim().min(2).max(180), statement: z.string().trim().min(2).max(30000), solution: z.string().trim().max(30000).nullable().optional(), notes: z.string().trim().max(10000).nullable().optional() })).mutation(({ input }) => createExercise(input)),
  exercisesUpdate: protectedProcedure.input(z.object({ id: z.number().int().positive(), subjectId: z.number().int().positive(), chapterId: z.number().int().positive().nullable().optional(), kind: exerciseKind, title: z.string().trim().min(2).max(180), statement: z.string().trim().min(2).max(30000), solution: z.string().trim().max(30000).nullable().optional(), notes: z.string().trim().max(10000).nullable().optional() })).mutation(({ input }) => updateExercise(input)),
  exercisesRemove: protectedProcedure.input(z.object({ id: z.number().int().positive() })).mutation(({ input }) => removeExercise(input.id)),
  mindMapsCreate: protectedProcedure
    .input(z.object({ subjectId: z.number().int().positive(), title: z.string().trim().min(2).max(180), description: z.string().trim().max(1000).nullable().optional(), content: z.string().trim().max(10000).nullable().optional(), nodes: z.array(mindMapNode).min(1).max(200) }))
    .mutation(({ input }) => createMindMap(input)),
  mindMapUpdate: protectedProcedure.input(z.object({ id: z.number().int().positive(), subjectId: z.number().int().positive(), title: z.string().trim().min(2).max(180), description: z.string().trim().max(1000).nullable().optional(), content: z.string().trim().max(10000).nullable().optional(), nodes: z.array(mindMapNode).min(1).max(200) })).mutation(({ input }) => updateMindMap(input)),
  mindMapRemove: protectedProcedure.input(z.object({ id: z.number().int().positive() })).mutation(({ input }) => removeMindMap(input.id)),
  mindMapNodes: protectedProcedure
    .input(z.object({ id: z.number().int().positive(), nodes: z.array(mindMapNode).min(1).max(200) }))
    .mutation(({ input }) => updateMindMapNodes(input.id, input.nodes)),
  cards: router({
    create: protectedProcedure.input(cardInput).mutation(({ input }) => createRevisionCard(input)),
    update: protectedProcedure.input(cardInput.extend({ id: z.number().int().positive() })).mutation(({ input }) => updateRevisionCard(input)),
    remove: protectedProcedure.input(z.object({ id: z.number().int().positive() })).mutation(({ input }) => removeRevisionCard(input.id)),
  }),
  sessions: router({
    list: protectedProcedure.query(({ ctx }) => getUserStudySessions(ctx.user.id)),
    complete: protectedProcedure.input(z.object({
      mode: z.enum(["cards", "exercises", "oral", "mind_maps"]),
      subjectId: z.number().int().positive().optional(),
      itemCount: z.number().int().min(1).max(100),
      correctCount: z.number().int().min(0).max(100),
      durationSeconds: z.number().int().min(0).max(86400),
      settings: z.object({ sessionSize: z.number().int().min(1).max(100).optional(), subjectId: z.number().int().positive().optional(), chapterId: z.number().int().positive().nullable().optional(), shuffle: z.boolean().optional(), durationMinutes: z.number().int().min(1).max(240).optional(), mastery: z.enum(["new", "learning", "confident"]).optional(), mode: z.enum(["revision", "entrainement", "oral"]).optional(), correction: z.enum(["immediate", "deferred"]).optional(), resourceType: z.enum(["all", "cards", "exercises", "oral", "mind_maps"]).optional(), resourceIds: z.array(z.number().int().positive()).max(100).optional(), startedAt: z.number().int().positive().optional() }).optional(),
    })).mutation(({ ctx, input }) => createStudySession({ ...input, userId: ctx.user.id })),
  }),
});
