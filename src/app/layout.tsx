import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { cx } from "class-variance-authority";
// import Providers from "~/components/layout/providers";
import { MontFont, allRoundGothicW01XLigFont } from "~/libs/fonts";

import "~/app/styles/globals.css";
import "~/app/styles/swiper.css";
import "react-toastify/dist/ReactToastify.css";
import MainLayout from "~/components/layouts/main";
import BaseProviders from "~/components/layouts/base/providers";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Nabi",
  description: "Nabi web page",
};
// import { MontFont, allRoundGothicW01XLigFont } from "~/libs/fonts";

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cx(
          "light",
          MontFont.variable,
          allRoundGothicW01XLigFont.variable,
        )}
        style={MontFont.style}
        suppressHydrationWarning
      >
        <MainLayout>
          <BaseProviders cookies={cookies().toString()}>
            {props.children}
          </BaseProviders>
        </MainLayout>
      </body>
    </html>
  );
}
