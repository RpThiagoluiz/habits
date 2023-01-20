import Fastify from 'fastify';
import cors from '@fastify/cors';
import { appRoutes } from './routes';

const port = 3333;

const app = Fastify();

app.register(cors);
app.register(appRoutes);

const start = async () => {
  try {
    await app.listen({ port });
    console.log(`✨ 🐱‍🏍, Server is running on http://localhost:${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
