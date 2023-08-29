import { cx } from "class-variance-authority";
import { Html, Head, Main, NextScript } from "next/document";
import { MontFont, allRoundGothicW01XLigFont } from "~/utils/core/fonts";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
      </Head>
      <body
        className={cx(
          "dark", // bg-bg-primary-500 text-text-primary-500',
          MontFont.className,
					allRoundGothicW01XLigFont.className
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
