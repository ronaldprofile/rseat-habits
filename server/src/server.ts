import Fastify from "fastify";
import FastifyCors from "@fastify/cors";
import { appRouter } from "./router";

const app = Fastify();

app.register(FastifyCors);
app.register(appRouter);

app.listen(
  {
    port: 4000
  },
  () => console.info("Server is running on http://localhost:4000")
);
