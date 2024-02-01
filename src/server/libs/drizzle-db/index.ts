import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

import { env } from "~/libs/env";
import * as schema from "./schema";

const connection = mysql.createPool({
  host: env.DB_HOST,
  user: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: process.env.DB_DATABASE ?? "nabi",
});
// DrizzleTypeError<"Seems like the schema generic is missing - did you forget to add it to your DB type?">.$drizzleTypeError: "Seems like the schema generic is missing - did you forget to add it to your DB type?"
export const db = drizzle(connection, {
  schema: schema,
  logger: env.NODE_ENV !== "production",
  mode: "default",
});
