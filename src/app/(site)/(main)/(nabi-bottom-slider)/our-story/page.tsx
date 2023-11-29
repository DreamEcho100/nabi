import { cx } from "class-variance-authority";
import CustomNextImage from "~/components/common/CustomNextImage";
import GenericHeroSection from "~/components/core/GenericHeroSection";

import animationClasses from "~/app/styles/animation.module.css";
import { type CSSProperties } from "react";
import IntersectionElement, {
  UseInitIntersectionElementsIntersectionObserver,
} from "~/components/core/IntersectionElement";
import { getSectionInnerContainerClassNames } from "~/components/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
};

const intersectionObserverOptions: IntersectionObserverInit = {
  threshold: 0,
};

export default function OurStoryScreen() {
  return (
    <>
      <UseInitIntersectionElementsIntersectionObserver
        options={intersectionObserverOptions}
      />
      <GenericHeroSection headerText="our story" />
      <section className="bg-special-primary-100 text-zinc-700">
        <div
          className={cx(
            getSectionInnerContainerClassNames({
              // "max-w": "max-w-[1500npx]",
            }),
            "flex flex-col gap-8 md:gap-16",
            "pb-12 pt-12",
            "px-8 sm:px-16 md:px-20 xl:px-36",
          )}
        >
          <div className="flex flex-col sm:flex-row">
            {[
              {
                src: "/images/d6bbcebc00531220f00ff5a40a6af1ad.jpg",
                width: 450,
                height: 600,
                className: cx(
                  "object-cover flex-grow-[1] w-full sm:w-1/4 hidden sm:block",
                  animationClasses.intersectShowUp,
                ),
              },
              {
                src: "/images/a77396da5e6b7b29d69d2aad30bd3e0a.jpg",
                width: 900,
                height: 600,
                className: cx(
                  "object-cover flex-grow-[2] w-full sm:w-2/4",
                  animationClasses.intersectShowUp,
                ),
                style: {
                  // "--duration-multi": "0.5s"
                  "--transform-delay": "0.05s",
                  "--opacity-delay": "0.05s",
                } as CSSProperties,
              },
              {
                src: "/images/895cda6c8300cb3d38a0b002fea06b76.jpg",
                width: 450,
                height: 600,
                className: cx(
                  "object-cover flex-grow-[1] w-full sm:w-1/4 hidden sm:block",
                  animationClasses.intersectShowUp,
                ),
              },
            ].map((item) => (
              <IntersectionElement
                as={CustomNextImage}
                dataConfig={{
                  onIntersectAdd: animationClasses.animate!,
                  unobserveAfterIntersect: true,
                }}
                key={item.src}
                {...item}
              />
            ))}
          </div>
          <div
            className={cx(
              "mx-auto flex flex-col justify-between gap-x-16 text-lg font-medium leading-[2rem] md:flex-row md:gap-y-8",
              "md:text-align-initial text-center",
              "font-normal text-zinc-800",
              "text-sm sm:text-xl",
              "leading-6 sm:leading-10",
            )}
          >
            <IntersectionElement
              dataConfig={{ unobserveAfterIntersect: true }}
              className="md:w-1/2"
            >
              <p className="parent-intersect-show-up">
                Nabi is a luxury brand for babies and toddlers. We only use
                organic Merino wool and fine silk for our products. Merino wool
                has the ability to create a microclimate around your baby.
                Meaning it will regulate body temperature, keeping your baby
                &apos;warm when it&apos;s cold and cool when it&apos;s
                hot&apos;. In cooler temperatures it will trap warm air in to
                provide warmth. Silk has an incredibly soft, smooth, and light
                texture that feels wonderful against your baby&apos;s skin. It
                is also naturally hypoallergenic. Together, silk and Merino wool
                are just a dream. Like a little sheep with butterfly wings.
              </p>
            </IntersectionElement>

            <IntersectionElement
              dataConfig={{ unobserveAfterIntersect: true }}
              className="flex flex-col gap-4 md:w-1/2"
            >
              <p
                className="parent-intersect-show-up"
                style={
                  {
                    "--transform-duration": "1.5s",
                    "--opacity-duration": "0.85s",
                  } as CSSProperties
                }
              >
                All our products are organic and certified with the GOTS label.
                GOTS certified companies must meet strict criteria regarding
                organic, ecological and social practices at all processing
                stages. The certification guarantees that our products are made
                by people that receive fair treatment and no hazardous chemicals
                have been used throughout the entire production process.
              </p>
              <IntersectionElement
                as={CustomNextImage}
                dataConfig={{
                  onIntersectAdd: animationClasses.animate!,
                  unobserveAfterIntersect: true,
                }}
                src="/images/logo-e3f669f8.webp"
                width={250}
                height={250}
                className={cx(
                  "ms-auto h-16 w-16 sm:h-20 sm:w-20",
                  animationClasses.intersectShowUp,
                )}
                style={
                  {
                    // "--duration-multi": "0.5s"
                    "--transform-delay": "0.5s",
                    "--opacity-delay": "0.5s",
                  } as CSSProperties
                }
              />
            </IntersectionElement>
          </div>
        </div>
      </section>
    </>
  );
}
