import { cx } from "class-variance-authority";
import React from "react";
import { getSectionInnerContainerClassNames } from "~/components/utils";

type Props = { headerText: string };

export default function GenericHeroSection(props: Props) {
  return (
    <section className="bg-special-primary-900/20">
      <div
        className={cx(
          getSectionInnerContainerClassNames(),
          `flex h-[40rem] max-h-[120vh] flex-col items-center justify-center gap-4`
        )}
      >
        <h1 className="text-center text-3xl font-normal capitalize leading-10 text-zinc-800">
          {props.headerText}
        </h1>
        <div
          className={cx(
            "h-20 w-[0.0625rem] bg-special-primary-900",
            // animationClasses["intersect-show-up"],
            "transition-all delay-[0.5s] duration-[1.25s]"
          )}
        />
      </div>
    </section>
  );
}
