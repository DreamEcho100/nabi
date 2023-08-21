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
        {/* <div>
          Icons made from{" "}
          <a href="https://www.onlinewebfonts.com/icon">svg icons</a>is licensed
          by CC BY 4.0
        </div> */}
        <NextScript />
      </body>
    </Html>
  );
}
