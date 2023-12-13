import { cx } from "class-variance-authority";
import { getSectionInnerContainerClassNames } from "~/components/utils";

import animationClasses from "~/app/styles/animation.module.css";
import IntersectionElement from "./intersection-element";

type Props = { headerText: string };

export default function GenericHeroSection(props: Props) {
  return (
    <section className="bg-special-primary-400">
      <IntersectionElement
        dataConfig={{
          onIntersectAdd: animationClasses.animate!,
          unobserveAfterIntersect: true,
        }}
        className={cx(
          getSectionInnerContainerClassNames(),
          `flex h-[40rem] max-h-[50vh] flex-col items-center justify-center overflow-hidden sm:max-h-[120vh]`,
          "text-lg sm:text-3xl",
          animationClasses.intersectShowUp,
        )}
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
              "bg-special-primary-900 w-[0.0625rem]",
            )}
          />
        </h1>
      </IntersectionElement>
    </section>
  );
}
