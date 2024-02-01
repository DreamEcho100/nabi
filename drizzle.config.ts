import type { Config } from "drizzle-kit";

import { env } from "~/libs/env";

const uri = [
  "mysql://",
  process.env.DB_USERNAME,
  ":",
  process.env.DB_PASSWORD,
  "@",
  process.env.DB_HOST,
  ":3306/",
  process.env.DB_NAME,
  // '?ssl={"rejectUnauthorized":true}',
].join("");

export default {
  schema: "./src/server/db/schema.ts",
  driver: "mysql2",
  dbCredentials: { uri },
  tablesFilter: ["nabi_*"],
} satisfies Config;
