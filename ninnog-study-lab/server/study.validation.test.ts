import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function authenticatedContext(): TrpcContext {
  return {
    user: {
      id: 1,
      openId: "study-test-user",
      email: "study@example.com",
      name: "Study Test",
      loginMethod: "manus",
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: () => undefined } as TrpcContext["res"],
  };
}

describe("study.cards.create", () => {
  it("rejects a card that has no meaningful title before touching the database", async () => {
    const caller = appRouter.createCaller(authenticatedContext());
    await expect(caller.study.cards.create({
      subjectId: 1,
      title: " ",
      content: "Une fiche valide ne peut pas avoir de titre vide.",
      tags: [],
    })).rejects.toMatchObject({ code: "BAD_REQUEST" });
  });

  it("rejects an invalid library filter", async () => {
    const caller = appRouter.createCaller(authenticatedContext());
    await expect(caller.study.library({ subjectId: 0 })).rejects.toMatchObject({ code: "BAD_REQUEST" });
  });

  it("rejects an oversized tag collection before a card can be created", async () => {
    const caller = appRouter.createCaller(authenticatedContext());
    await expect(caller.study.cards.create({
      subjectId: 1,
      title: "Fiche test",
      content: "Contenu valable pour la validation.",
      tags: Array.from({ length: 13 }, (_, index) => `tag-${index}`),
    })).rejects.toMatchObject({ code: "BAD_REQUEST" });
  });

  it("rejects a completed session without any reviewed resource", async () => {
    const caller = appRouter.createCaller(authenticatedContext());
    await expect(caller.study.sessions.complete({
      mode: "exercises",
      itemCount: 0,
      correctCount: 0,
      durationSeconds: 0,
    })).rejects.toMatchObject({ code: "BAD_REQUEST" });
  });

  it("rejects a mind-map node placed outside the editable canvas", async () => {
    const caller = appRouter.createCaller(authenticatedContext());
    await expect(caller.study.mindMapNodes({ id: 1, nodes: [{ id: "node-1", label: "Notion", content: "$x^2$", x: 120, y: 50 }] })).rejects.toMatchObject({ code: "BAD_REQUEST" });
  });
});
