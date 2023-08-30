import { cx } from "class-variance-authority";
import { getSectionInnerContainerClassNames } from "../utils";
import {
  useInitGeneralAnimationIntersectionObserver,
  useIntersectionObserver,
} from "./utils/hooks";
import { generalAnimationIntersectionObserverCB } from "./utils";
import CustomNextImage from "../shared/common/CustomNextImage";
import GenericHeroSection from "./components/GenericHeroSection";
import GenericAboveFooterSliderSection from "./components/GenericAboveFooterSliderSection";

const intersectionObserverOptions: IntersectionObserverInit = {
  threshold: 0.1,
};

export default function ContactScreen() {
  const intersectionObserver = useIntersectionObserver(
    generalAnimationIntersectionObserverCB,
    intersectionObserverOptions
  );

  useInitGeneralAnimationIntersectionObserver(intersectionObserver);

  return (
    <>
      <GenericHeroSection headerText="contact" />
      <section className="bg-special-primary-100 text-zinc-700">
        <div
          className={cx(
            getSectionInnerContainerClassNames(),
            "flex flex-col gap-16 px-8 pb-20  pt-12 sm:px-16"
          )}
        ></div>
      </section>
      <GenericAboveFooterSliderSection />
    </>
  );
}
