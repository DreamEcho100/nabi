import { cx } from "class-variance-authority";
import { allRoundGothicW01XLigFont } from "~/utils/core/fonts";

const repeatAmount = 1000;
const repeatAnimationDurationOnGtSm = repeatAmount * 2.5;
const repeatAnimationDurationOnLtSm = repeatAnimationDurationOnGtSm * 0.8;

export default function GenericAboveFooterSliderSection() {
  return (
    <section>
      <div
        className={cx(
          allRoundGothicW01XLigFont.className,
          "slider max-w-full justify-start overflow-hidden bg-special-primary-700 bg-opacity-[0.3] py-2 font-all-round-gothic-w01-xlig text-zinc-700",
        )}
      >
        <p className="container flex min-w-fit gap-4 whitespace-nowrap text-5xl md:text-6xl lg:text-7xl">
          {"_"
            .repeat(repeatAmount)
            .split("_")
            .map((_, index) => (
              <span key={index}>nabi</span>
            ))}
        </p>
      </div>
      <style jsx>{`
        .slider > .container {
          transform: translate3d(0, 0, 0);
          animation: sliderAnimation ${repeatAnimationDurationOnGtSm}s infinite;
        }
        @media screen and (max-width: 640px) {
          .slider > .container {
            transform: translate3d(0, 0, 0);
            animation: sliderAnimation ${repeatAnimationDurationOnLtSm}s
              infinite;
          }
        }
        @keyframes sliderAnimation {
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
}
