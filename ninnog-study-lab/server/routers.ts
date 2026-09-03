import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";
import { storagePut } from "./storage";
import { hashPassword, normalizeUsername, validatePassword, verifyPassword } from "./_core/localAuth";
import { sdk } from "./_core/sdk";
import { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";
import { studyRouter } from "./routers/study";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    profiles: publicProcedure.query(async () => (await db.getLocalUsers()).map(({ id, name, username, avatarPreset, avatarUrl, createdAt }) => ({ id, name, username, avatarPreset, avatarUrl, createdAt }))),
    register: publicProcedure.input(z.object({ name: z.string().min(1).max(120), avatarPreset: z.string().max(40).optional(), avatarDataUrl: z.string().max(3_000_000).optional(), avatarMimeType: z.enum(["image/png", "image/jpeg", "image/webp", "image/gif"]).optional() })).mutation(async ({ input, ctx }) => {
      const profiles = await db.getLocalUsers();
      if (profiles.length >= 2) throw new Error("Les deux profils de cette installation sont déjà utilisés.");
      const name = input.name.trim();
      const base = normalizeUsername(name).replace(/[^a-z0-9._-]/g, "").slice(0, 70) || `profil${profiles.length + 1}`;
      let username = base;
      let suffix = 2;
      while (await db.getUserByUsername(username)) username = `${base}${suffix++}`;
      let avatarUrl: string | null = null;
      if (input.avatarDataUrl && input.avatarMimeType) {
        const match = input.avatarDataUrl.match(/^data:([^;]+);base64,(.+)$/);
        if (!match || match[1] !== input.avatarMimeType) throw new Error("Image d’avatar invalide.");
        const buffer = Buffer.from(match[2], "base64");
        if (buffer.length > 2 * 1024 * 1024) throw new Error("L’image doit faire au maximum 2 Mo.");
        const extension = input.avatarMimeType.split("/")[1].replace("jpeg", "jpg");
        avatarUrl = (await storagePut(`avatars/pending/${crypto.randomUUID()}.${extension}`, buffer, input.avatarMimeType)).url;
      }
      const user = await db.createLocalUser({ username, name });
      if (input.avatarPreset || avatarUrl) await db.updateUserAvatar(user.id, { preset: avatarUrl ? null : input.avatarPreset, url: avatarUrl });
      const token = await sdk.createLocalSessionToken(user.id, { expiresInMs: ONE_YEAR_MS });
      ctx.res.cookie(COOKIE_NAME, token, { ...getSessionCookieOptions(ctx.req), maxAge: ONE_YEAR_MS });
      return user;
    }),
    updateProfile: protectedProcedure.input(z.object({ name: z.string().min(1).max(120), preset: z.string().max(40).nullable().optional(), url: z.string().url().nullable().optional() })).mutation(async ({ input, ctx }) => {
      return db.updateLocalProfile(ctx.user.id, { name: input.name, preset: input.preset, url: input.url });
    }),
    updateAvatar: protectedProcedure.input(z.object({ preset: z.string().max(40).nullable().optional(), url: z.string().url().nullable().optional() })).mutation(async ({ input, ctx }) => {
      return db.updateUserAvatar(ctx.user.id, { preset: input.preset, url: input.url });
    }),
    uploadAvatar: protectedProcedure.input(z.object({ dataUrl: z.string().max(3_000_000), mimeType: z.enum(["image/png", "image/jpeg", "image/webp", "image/gif"]) })).mutation(async ({ input, ctx }) => {
      const match = input.dataUrl.match(/^data:([^;]+);base64,(.+)$/);
      if (!match || match[1] !== input.mimeType) throw new Error("Image d’avatar invalide.");
      const buffer = Buffer.from(match[2], "base64");
      if (buffer.length > 2 * 1024 * 1024) throw new Error("L’image doit faire au maximum 2 Mo.");
      const extension = input.mimeType.split("/")[1].replace("jpeg", "jpg");
      const uploaded = await storagePut(`avatars/${ctx.user.id}/profile.${extension}`, buffer, input.mimeType);
      return db.updateUserAvatar(ctx.user.id, { preset: null, url: uploaded.url });
    }),
    selectProfile: publicProcedure.input(z.object({ id: z.number().int().positive() })).mutation(async ({ input, ctx }) => {
      const user = await db.getUserById(input.id);
      if (!user || user.loginMethod !== "local") throw new Error("Profil introuvable.");
      await db.touchUserLogin(user.id);
      const token = await sdk.createLocalSessionToken(user.id, { expiresInMs: ONE_YEAR_MS });
      ctx.res.cookie(COOKIE_NAME, token, { ...getSessionCookieOptions(ctx.req), maxAge: ONE_YEAR_MS });
      return user;
    }),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
    deleteAccount: protectedProcedure.mutation(async ({ ctx }) => {
      return { success: true, userId: ctx.user.id } as const;
    }),
  }),
  study: studyRouter,
});

export type AppRouter = typeof appRouter;
