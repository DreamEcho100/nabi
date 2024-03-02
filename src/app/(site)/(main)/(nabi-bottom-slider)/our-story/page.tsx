import type { CSSProperties } from "react";
import type { Metadata } from "next";

import { cx } from "class-variance-authority";
import CustomNextImage from "~/components/common/custom-next-image";
import GenericHeroSection from "~/components/core/generic-hero-section";
import { UseInitIntersectionElementsIntersectionObserver } from "~/components/core/intersection-element";
import { getSectionInnerContainerClassNames } from "~/components/utils";
import NabiMotionVideo from "~/components/core/NabiMotionVideo";

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
      <GenericHeroSection headerText="our story" removeDefaultEntryAnimation />
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
            {/* {[
              {
                "data-type": "image",
                src: "/images/d6bbcebc00531220f00ff5a40a6af1ad.jpg",
                width: 450,
                height: 600,
                className: cx(
                  "object-cover flex-grow-[1] w-full sm:w-1/4 hidden sm:block",
                  animationClasses.intersectShowUp,
                ),
              },
              // {
              // 	'data-type': 'image',
              //   src: "/images/a77396da5e6b7b29d69d2aad30bd3e0a.jpg",
              //   width: 900,
              //   height: 600,
              //   className: cx(
              //     "object-cover flex-grow-[2] w-full sm:w-2/4",
              //     animationClasses.intersectShowUp,
              //   ),
              //   style: {
              //     // "--duration-multi": "0.5s"
              //     "--transform-delay": "0.05s",
              //     "--opacity-delay": "0.05s",
              //   } as CSSProperties,
              // },
              {
                "data-type": "video",
                // src: "/videos/NABI_MOTION_8SN_LOOP_1X1_ALPHA.mov",
                // src: "/videos/NABI_MOTION_8SN_LOOP_1X1_ALPHA.mp4",
                // src: "/videos/NABI_MOTION_8SN_LOOP_1X1_ALPHA.webm",
                src: "/videos/NABI_MOTION_8SN_LOOP_16x9.mp4",
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
                "data-type": "image",
                src: "/images/895cda6c8300cb3d38a0b002fea06b76.jpg",
                width: 450,
                height: 600,
                className: cx(
                  "object-cover flex-grow-[1] w-full sm:w-1/4 hidden sm:block",
                  animationClasses.intersectShowUp,
                ),
              },
            ].map(({ src, ...item }) =>
              item["data-type"] === "image" ? (
                <IntersectionElement
                  as={CustomNextImage}
                  dataConfig={{
                    onIntersectAdd: animationClasses.animate!,
                    unobserveAfterIntersect: true,
                  }}
                  key={src}
                  src={src}
                  {...item}
                />
              ) : (
                <IntersectionElement
                  as="video"
                  dataConfig={{
                    onIntersectAdd: animationClasses.animate!,
                    unobserveAfterIntersect: true,
                  }}
                  key={src}
                  {...item}
                  autoPlay
                  loop
                  muted
                  playsInline
                  // controls
                  // preload="auto"
                  // poster="/images/3eda340496860c533c866c4a3619cc26.jpg"
                  width={500}
                  height={800}
                  // src={src}
                  // type="video/mp4"
                >
                  <source
                    src={src}
                    // type="video/quicktime"
                    // type="video/webm"
                    type="video/mp4"
                  />
                </IntersectionElement>
              ),
            )} */}

            <NabiMotionVideo className="aspect-video w-full flex-grow-[2]" />
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
            <div className="md:w-1/2">
              <p>
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
            </div>

            <div className="flex flex-col gap-4 md:w-1/2">
              <p
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
              <CustomNextImage
                src="/images/logo-e3f669f8.webp"
                width={250}
                height={250}
                className="ms-auto h-16 w-16 sm:h-20 sm:w-20"
                style={
                  {
                    // "--duration-multi": "0.5s"
                    "--transform-delay": "0.5s",
                    "--opacity-delay": "0.5s",
                  } as CSSProperties
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
