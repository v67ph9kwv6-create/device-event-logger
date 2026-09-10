import { serve } from "@hono/node-server";
import { createApp } from "../src/app.ts";

const app = createApp();

const env = {
  API_KEY: process.env.API_KEY ?? "",
  DATABASE_URL: process.env.DATABASE_URL ?? "",
  TZ_OFFSET: process.env.TZ_OFFSET,
  AMAP_MAPS_API_KEY: process.env.AMAP_MAPS_API_KEY,
};

serve({
  fetch: (request) => app.fetch(request, env),
  port: Number(process.env.PORT) || 8000,
});
