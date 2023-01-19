import Fastify from "fastify";
import FastifyCors from "@fastify/cors";

const app = Fastify();

app.register(FastifyCors);

app.get("/habits", () => {
  return "Habits";
});

app
  .listen({
    port: 4000
  })
  .then(() => console.log("Server is running..."));
