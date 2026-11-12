import { serverEnv } from "@/env/server";

export async function register() {
  if (serverEnv.NEXT_RUNTIME === "nodejs") {
    await import("@/env/server");
    await import("@/env/client");
  }
}
