import { cx } from "class-variance-authority";
import { Html, Head, Main, NextScript } from "next/document";
import { MontFont } from "~/utils/core/fonts";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
      </Head>
      <body
        className={cx(
          "dark", // bg-bg-primary-500 text-text-primary-500',
          MontFont.className
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
