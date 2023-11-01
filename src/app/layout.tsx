import type { Metadata } from "next";
import { type PropsWithChildren } from "react";
import { cx } from "class-variance-authority";
// import Providers from "~/components/layout/providers";
import { MontFont, allRoundGothicW01XLigFont } from "~/utils/core/fonts";

import "~/app/styles/globals.css";
import "~/app/styles/swiper.css";
import "react-toastify/dist/ReactToastify.css";
import MainLayout from "~/components/layouts/Main";
import Providers from "~/components/layouts/Providers";

export const metadata: Metadata = {
  title: "Nabi",
  description: "Nabi web page",
};
// import { MontFont, allRoundGothicW01XLigFont } from "~/utils/core/fonts";

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
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
          <Providers>{props.children}</Providers>
        </MainLayout>
      </body>
    </html>
  );
}
