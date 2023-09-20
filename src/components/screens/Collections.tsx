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

const intersectionObserverOptions: IntersectionObserverInit = {
  threshold: 0,
};

export default function CollectionScreen() {
  const intersectionObserver = useIntersectionObserver(
    generalAnimationIntersectionObserverCB,
    intersectionObserverOptions,
  );

  useInitGeneralAnimationIntersectionObserver(intersectionObserver);

  return (
    <>
      <GenericHeroSection headerText="collections" />
      <section className="bg-special-primary-200 font-medium leading-loose text-gray-800">
        <div
          className={cx(
            getSectionInnerContainerClassNames(),
            "flex flex-col gap-10 sm:gap-16",
            "pb-20 pt-12",
            "px-16 md:px-20 xl:px-36",
          )}
        >
          <div
            className={cx(
              "sm:flex sm:flex-wrap sm:justify-start sm:gap-16",
              "flex gap-4 sm:h-[28rem] md:h-[44rem]",
            )}
          >
            {[
              {
                image: {
                  src: "/images/d6bbcebc00531220f00ff5a40a6af1ad.jpg",
                  altText: "",
                  width: 495,
                  height: 675,
                },
                title: "rompers",
                price: "€450",
              },
              {
                image: {
                  src: "/images/c526acafcc73a8ac425680a2e7b404f9.jpg",
                  altText: "",
                  width: 495,
                  height: 675,
                },
                title: "onesies",
                price: "€180",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={cx(
                  "flex flex-col gap-4",
                  "text-sm sm:text-xl",
                  "intersect-show intersect-elem",
                  "opacity-0",
                  "transition-all",
                )}
                style={{
                  transitionDuration: "0.75s",
                  transitionDelay: `${(index + 1) * 0.15}s`,
                }}
              >
                <CustomNextImage
                  src={item.image.src}
                  alt={item.image.altText}
                  width={item.image.width}
                  height={item.image.height}
                  className={cx(
                    "flex-grow object-cover",
                    // animationClasses["intersect-show-up"],
                    "transition-all duration-[0.75s]",
                  )}
                />
                <p
                  className={cx(
                    "capitalize",
                    // animationClasses["intersect-show-up"],
                    "transition-all duration-[1.5]",
                  )}
                >
                  {item.title}
                </p>
                <small
                  className={cx(
                    "-mt-2",
                    // animationClasses["intersect-show-up"],
                    "transition-all duration-[1.5]",
                  )}
                >
                  {item.price}
                </small>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="intersect-show-up-container flex flex-wrap overflow-hidden md:flex-nowrap">
              <CustomNextImage
                src="/images/d0b95d5a13d371f41e106dfbfd9de762.jpg"
                alt=""
                width={700}
                height={450}
                className={cx(
                  "aspect-video flex-grow object-cover sm:h-[28rem] sm:w-2/5",
                  "intersect-show intersect-elem",
                  "opacity-0",
                  "transition-all",
                )}
                style={{ transitionDuration: "0.75s" }}
              />
              <div
                className={cx(
                  "flex flex-grow flex-col items-start justify-center gap-4 bg-special-primary-100 p-8",
                  "text-sm sm:text-xl",
                )}
              >
                <div className="bg-stone-500 p-3 text-base font-semibold uppercase leading-none tracking-wide text-white">
                  About Product
                </div>
                <p
                  className={cx(
                    "font-medium text-gray-800",
                    "leading-5",
                    animationClasses["intersect-show-up"],
                    "transition-all duration-[1.5]",
                  )}
                >
                  Silk has an incredibly soft, smooth, and light <br />
                  texture that feels wonderful against your baby&apos;s skin.
                  <br /> It is also naturally hypoallergenic.
                </p>
              </div>
            </div>
            <div className="intersect-show-up-container flex flex-col gap-4">
              <p
                className={cx(
                  "text-2xl capitalize",
                  animationClasses["intersect-show-up"],
                  "transition-all duration-[1.5]",
                )}
              >
                full collection
              </p>
              <small
                className={cx(
                  "-mt-2 text-base",
                  animationClasses["intersect-show-up"],
                  "transition-all duration-[1.5]",
                )}
              >
                €600
              </small>
            </div>
          </div>
        </div>
      </section>
      <GenericAboveFooterSliderSection />
    </>
  );
}
