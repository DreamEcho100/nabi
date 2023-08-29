import { cx } from "class-variance-authority";

export default function GenericAboveFooterSliderSection() {
  return (
    <section>
      <div
        className={cx(
          // getSectionInnerContainerClassNames(),
          "slider max-w-full justify-start overflow-hidden bg-special-primary-700 bg-opacity-[0.3] py-2"
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
          animation: sliderAnimation 50s infinite;
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
