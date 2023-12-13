import GenericAboveFooterSliderSection from "~/components/core/generic-above-footer-slider-section";
import type { PropsWithChildren } from "react";

export default function RootLayout(props: PropsWithChildren) {
  return (
    <>
      {props.children}
      <GenericAboveFooterSliderSection />
    </>
  );
}
