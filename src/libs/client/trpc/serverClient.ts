import { cookies } from "next/headers";
import { appRouter } from "~/server/api/root";
// import drizzleQueryClient from "~/server/libs/drizzle/db/queryClient";
// import { drizzleSchema } from "~/server/libs/drizzle/db/SchemaWithRelations";
import shopify from "~/libs/shopify/client";
import { db } from "~/server/libs/drizzle-db";

export const serverClient = appRouter.createCaller({
  // // drizzleQueryClient: drizzleQueryClient,
  // drizzleSchema: drizzleSchema,
  db,
  shopify: shopify,
  getCookieManger: cookies,
});
