import type { Config } from "drizzle-kit";

import { env } from "~/libs/env";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "mysql2",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  tablesFilter: ["nabi_*"],
} satisfies Config;
