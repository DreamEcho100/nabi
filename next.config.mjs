/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /**
   * If you are using `appDir` then you must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n:
    process.env.NODE_ENV === "development"
      ? undefined
      : {
          locales: ["en"],
          defaultLocale: "en",
        },

  //
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  webpack(config) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return config;
  },
};

export default config;
