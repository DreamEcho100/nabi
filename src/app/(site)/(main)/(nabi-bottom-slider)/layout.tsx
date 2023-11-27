import GenericAboveFooterSliderSection from "~/components/core/GenericAboveFooterSliderSection";
import { type PropsWithChildren } from "react";

export default function RootLayout(props: PropsWithChildren) {
  return (
    <>
      {props.children}
      <GenericAboveFooterSliderSection />
    </>
  );
}
