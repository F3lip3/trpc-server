import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const trpc = initTRPC.create();
const proc = trpc.procedure;
const router = trpc.router;

const helloRouter = router({
  greeting: proc
    .input(z.object({ name: z.string() }).nullish())
    .query(({ input }) => {
      return `Hello ${input?.name ?? 'World'}`;
    })
});

export const appRouter = router({
  hello: helloRouter
});

export type AppRouter = typeof appRouter;
