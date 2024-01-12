import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    DATABASE_URL: z.string().url().optional().default("https://example.com"),
    NODE_ENV: z.enum(["development", "test", "production"]),
    // Add `.min(1) on ID and SECRET if you want to make sure they're not empty
    SHOPIFY_STORE_FRONT_ACCESS_TOKEN: z.string(),
    SHOPIFY_STORE_URL: z.string(),
    SHOPIFY_STORE_DOMAIN: z.string(),
    SHOPIFY_API_KEY: z.string(),
    SHOPIFY_API_SECRET: z.string(),
    JWT_TOKEN_KEY: z.string().min(1),
    // MAIL_CHIMP_DC: z.string().nonempty(),
    // MAIL_CHIMP_API_KEY: z.string().nonempty(),
    // MAIL_CHIMP_AUDIENCE_ID: z.string().nonempty(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_APP_DOMAINE: z.string().min(1),
    NEXT_PUBLIC_ALLOWED_ADMIN_EMAILS_STRING: z.string().min(1),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_APP_DOMAINE: process.env.NEXT_PUBLIC_APP_DOMAINE,
    NEXT_PUBLIC_ALLOWED_ADMIN_EMAILS_STRING:
      process.env.NEXT_PUBLIC_ALLOWED_ADMIN_EMAILS_STRING,
    //
    SHOPIFY_STORE_FRONT_ACCESS_TOKEN:
      process.env.SHOPIFY_STORE_FRONT_ACCESS_TOKEN,
    SHOPIFY_STORE_URL: process.env.SHOPIFY_STORE_URL,
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY,
    SHOPIFY_API_SECRET: process.env.SHOPIFY_API_SECRET,
    JWT_TOKEN_KEY: process.env.JWT_TOKEN_KEY,
    // MAIL_CHIMP_DC: process.env.MAIL_CHIMP_DC,
    // MAIL_CHIMP_API_KEY: process.env.MAIL_CHIMP_API_KEY,
    // MAIL_CHIMP_AUDIENCE_ID: process.env.MAIL_CHIMP_AUDIENCE_ID,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is especially useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined.
   * `SOME_VAR: z.string()` and `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
