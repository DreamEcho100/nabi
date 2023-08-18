import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
      </Head>
      <body
        className="dark"
        // className={cx(
        // 	'light bg-bg-primary-500 text-text-primary-500',
        // 	ralewayFont.className
        // )}
        // style={{ fontFamily: "'Raleway', sans-serif" }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
