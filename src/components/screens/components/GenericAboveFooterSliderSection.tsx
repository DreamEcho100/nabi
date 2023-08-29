import { cx } from "class-variance-authority";
import { allRoundGothicW01XLigFont } from "~/utils/core/fonts";

export default function GenericAboveFooterSliderSection() {
  return (
    <section>
      <div
        className={cx(
          // getSectionInnerContainerClassNames(),
          allRoundGothicW01XLigFont.className,
          "slider max-w-full justify-start overflow-hidden bg-special-primary-700 bg-opacity-[0.3] py-2 font-all-round-gothic-w01-xlig text-zinc-700"
        )}
      >
        <p className="container flex gap-4 whitespace-nowrap">
          {"_"
            .repeat(1000)
            .split("_")
            .map((_, index) => (
              <span key={index} className="text-7xl">
                nabi
              </span>
            ))}
        </p>
      </div>
      <style jsx>{`
        .slider > .container {
          transform: translate3d(0, 0, 0);
          animation: sliderAnimation 60s infinite;
        }
        @keyframes sliderAnimation {
          100% {
            transform: translateX(-200%);
          }
        }
      `}</style>
    </section>
  );
}
