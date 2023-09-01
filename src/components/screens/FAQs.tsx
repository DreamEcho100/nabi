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

import animationClasses from "~/styles/animation.module.css";

const intersectionObserverOptions: IntersectionObserverInit = {
  threshold: 0,
  // trackVisibility: true,
  // delay: 100,
};

export default function FAQsScreen() {

  return (
    <>
      <GenericHeroSection headerText="FAQs" />
      <section className="bg-special-primary-200 font-medium leading-loose text-gray-800">
        <div
          className={cx(
            getSectionInnerContainerClassNames(),
            "flex flex-col gap-16 px-8 pb-20 pt-12 sm:px-16"
          )}
        >
        </div>
      </section>
      <GenericAboveFooterSliderSection />
    </>
  );
}
