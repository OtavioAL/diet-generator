import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import { routes } from "./routes";

const app = Fastify({ logger: true });
dotenv.config();

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message });
});

const start = async () => {
  app.register(cors);
  app.register(routes);

  try {
    const PORT = 8080;
    const HOST = process.env.HOST_URL!;
    await app.listen({ port: PORT, host: HOST });
    console.log(`Servidor rodando no ${HOST}:${PORT}`);
  } catch (error) {
    console.log(error);
  }
};

start();
