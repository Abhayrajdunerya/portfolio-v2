import "server-only";
import * as z from "zod";

import { parseEnv } from "./parse";

const serverSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  NEXT_RUNTIME: z.enum(["nodejs", "edge"]).default("nodejs"),
  LOG_LEVEL: z
    .enum(["trace", "debug", "info", "warn", "error", "fatal"])
    .optional(),
});

export const serverEnv = parseEnv(serverSchema, process.env, "server");
