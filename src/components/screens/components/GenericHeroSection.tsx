import { cx } from "class-variance-authority";
import { getSectionInnerContainerClassNames } from "~/components/utils";

import animationClasses from "~/styles/animation.module.css";

type Props = { headerText: string };

export default function GenericHeroSection(props: Props) {
  return (
    <section className="bg-special-primary-400">
      <div
        className={cx(
          getSectionInnerContainerClassNames(),
          `flex h-[40rem] max-h-[50vh] flex-col items-center justify-center overflow-hidden sm:max-h-[120vh]`,
          "text-lg sm:text-3xl",
          animationClasses["intersect-show-up"],
        )}
        data-intersection-observer-element={true}
        data-intersection-observer-on-intersect-add={animationClasses.animate}
        data-intersection-observer-unobserve-after-intersect={true}
      >
        <h1
          className={cx(
            "relative",
            "text-center font-normal capitalize leading-10 text-zinc-800",
          )}
        >
          {props.headerText}
          <div
            className={cx(
              "absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full",
              "h-10 sm:h-20",
              "w-[0.0625rem] bg-special-primary-900",
            )}
          />
        </h1>
      </div>
    </section>
  );
}
