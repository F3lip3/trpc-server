import { createExpressMiddleware } from '@trpc/server/adapters/express';
import express from 'express';
import { appRouter } from './router';

async function main() {
  const app = express();

  app.get('/', (_req, res) => res.send('Server is running!'));

  app.use(
    '/trpc',
    createExpressMiddleware({
      router: appRouter,
      createContext: () => ({})
    })
  );

  app.listen(3333, () => {
    console.info('🚀 server running on port 3333');
  });
}

main();
