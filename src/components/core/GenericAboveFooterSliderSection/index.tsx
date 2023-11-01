import { cx } from "class-variance-authority";
import { allRoundGothicW01XLigFont } from "~/utils/core/fonts";
import classNames from "./index.module.css";
import { type CSSProperties } from "react";

const repeatAmount = 1000;
const repeatAnimationDurationOnGtSm = repeatAmount * 2.5;
const repeatAnimationDurationOnLtSm = repeatAnimationDurationOnGtSm * 0.8;

export default function GenericAboveFooterSliderSection() {
  return (
    <section>
      <div
        className={cx(
          allRoundGothicW01XLigFont.className,
          "max-w-full justify-start overflow-hidden bg-special-primary-700 bg-opacity-[0.3] py-2 font-all-round-gothic-w01-xlig text-zinc-700",
          classNames.slider,
        )}
        style={
          {
            "--repeatAnimationDurationOnGtSm": `${repeatAnimationDurationOnGtSm}s`,
            "--repeatAnimationDurationOnLtSm": `${repeatAnimationDurationOnLtSm}s`,
          } as CSSProperties
        }
      >
        <p
          className={cx(
            "flex min-w-fit gap-4 whitespace-nowrap text-5xl md:text-6xl lg:text-7xl",
            classNames.container,
          )}
        >
          {"_"
            .repeat(repeatAmount)
            .split("_")
            .map((_, index) => (
              <span key={index}>nabi</span>
            ))}
        </p>
      </div>
    </section>
  );
}
