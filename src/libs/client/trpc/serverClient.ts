import { cookies } from "next/headers";
import { appRouter } from "~/server/api/root";
// import drizzleQueryClient from "~/server/libs/drizzle/db/queryClient";
// import { drizzleSchema } from "~/server/libs/drizzle/db/SchemaWithRelations";
import shopify from "~/libs/shopify/client";

export const serverClient = appRouter.createCaller({
  // // drizzleQueryClient: drizzleQueryClient,
  // drizzleSchema: drizzleSchema,
  shopify: shopify,
  getCookieManger: () => cookies(),
});
