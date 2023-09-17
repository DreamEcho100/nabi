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
import { type CSSProperties } from "react";

const intersectionObserverOptions: IntersectionObserverInit = {
  threshold: 0.1,
};

export default function OurStoryScreen() {
  const intersectionObserver = useIntersectionObserver(
    generalAnimationIntersectionObserverCB,
    intersectionObserverOptions
  );

  useInitGeneralAnimationIntersectionObserver(intersectionObserver);

  return (
    <>
      <GenericHeroSection headerText="our story" />
      <section className="bg-special-primary-100 text-zinc-700">
        <div
          className={cx(
            getSectionInnerContainerClassNames({
              // "max-w": "max-w-[1500npx]",
            }),
            "flex flex-col gap-16",
            "pb-20 pt-12",
            "px-16 md:px-20 xl:px-36",
          )}
        >
          <div className="intersect-show-up-container flex flex-col sm:flex-row">
            {[
              {
                src: "/images/d6bbcebc00531220f00ff5a40a6af1ad.jpg",
                width: 450,
                height: 600,
                containerClassName: cx(
                  "flex-grow-[1] w-full sm:w-1/4",
                  animationClasses["intersect-show-up"],
                  "transition-all duration-500 delay=[0.25s]"
                ),
              },
              {
                src: "/images/a77396da5e6b7b29d69d2aad30bd3e0a.jpg",
                width: 900,
                height: 600,
                containerClassName: cx(
                  "flex-grow-[2] w-full sm:w-2/4",
                  animationClasses["intersect-show-up"],
                  "transition-all duration-700 delay=[0.5s]"
                ),
              },
              {
                src: "/images/895cda6c8300cb3d38a0b002fea06b76.jpg",
                width: 450,
                height: 600,
                containerClassName: cx(
                  "flex-grow-[1] w-full sm:w-1/4",
                  animationClasses["intersect-show-up"],
                  "transition-all duration-1000 delay=[0.75s]"
                ),
              },
            ].map((item) => (
              <div key={item.src} className={item.containerClassName}>
                <CustomNextImage
                  className="h-full w-full object-cover"
                  src={item.src}
                  alt=""
                  width={item.width}
                  height={item.height}
                />
              </div>
            ))}
          </div>

          <div className="mx-auto flex flex-col justify-between gap-x-16 gap-y-8 text-lg font-medium leading-[2rem] md:flex-row">
            {/* <div className="intersect-show-up-container">
              <p
                className={cx(
                  animationClasses["intersect-show-up"],
                  "transition-all duration-700"
                )}
              >
                Nabi is a luxury brand for babies and toddlers. We only use
                organic Merino wool and fine silk for our products.
              </p>
            </div>
            <div className="intersect-show-up-container">
              <p
                className={cx(
                  animationClasses["intersect-show-up"],
                  "transition-all duration-700"
                )}
              >
                This sublime combination of fabrics is one that was carefully
                chosen:
              </p>
            </div>
            <div className="intersect-show-up-container">
              <p
                className={cx(
                  animationClasses["intersect-show-up"],
                  "transition-all duration-700"
                )}
              >
                Merino wool has the ability to create a microclimate around your
                baby. Meaning it will regulate body temperature, keeping your
                baby &apos;warm when it&apos;s cold and cool when it&apos;s
                hot&apos;. In cooler temperatures it will trap warm air in to
                provide warmth.
              </p>
            </div>
            <div className="intersect-show-up-container">
              <p
                className={cx(
                  animationClasses["intersect-show-up"],
                  "transition-all duration-700"
                )}
              >
                Silk has an incredibly soft, smooth, and light texture that
                feels wonderful against your baby&apos;s skin. It is also
                naturally hypoallergenic.
              </p>
            </div>
            <div className="intersect-show-up-container">
              <p
                className={cx(
                  animationClasses["intersect-show-up"],
                  "transition-all duration-700"
                )}
              >
                Together, silk and Merino wool are just a dream.
              </p>
            </div>
            <div className="intersect-show-up-container">
              <p
                className={cx(
                  animationClasses["intersect-show-up"],
                  "transition-all duration-700"
                )}
              >
                Like a little sheep with butterfly wings. All our products are
                organic and certified with the Oeko-Tex Standard 100 label.
              </p>
            </div> */}
            <div className="intersect-show-up-container md:w-1/2">
              <p className={animationClasses["intersect-show-up"]}>
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
            <div className="intersect-show-up-container flex flex-col gap-4 md:w-1/2">
              <p
                className={animationClasses["intersect-show-up"]}
                style={
                  {
                    // "--duration-multi": "0.5s"
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
                className={cx(
                  animationClasses["intersect-show-up"],
                  "ms-auto h-24 w-24"
                )}
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
      <GenericAboveFooterSliderSection />
    </>
  );
}
