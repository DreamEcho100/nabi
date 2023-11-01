import { cx } from "class-variance-authority";
import CustomNextImage from "~/components/common/CustomNextImage";
import GenericHeroSection from "~/components/core/GenericHeroSection";
import GenericAboveFooterSliderSection from "~/components/core/GenericAboveFooterSliderSection";

import animationClasses from "~/app/styles/animation.module.css";
import IntersectionElement, {
  UseInitIntersectionElementsIntersectionObserver,
} from "~/components/core/IntersectionElement";
import { getSectionInnerContainerClassNames } from "~/components/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections",
};

function AboutProductButton(props: { className?: string }) {
  return (
    <IntersectionElement
      dataConfig={{
        onIntersectionAdd: animationClasses.animate!,
        unobserveAfterIntersection: true,
      }}
      className={cx(
        "bg-stone-500 font-semibold uppercase leading-none tracking-wide text-white",
        "p-3 text-xs sm:p-2.5 sm:text-base",
        props.className,
      )}
    >
      About Product
    </IntersectionElement>
  );
}

const intersectionObserverOptions: IntersectionObserverInit = {
  threshold: 0,
};

export default function CollectionScreen() {
  return (
    <>
      <UseInitIntersectionElementsIntersectionObserver
        options={intersectionObserverOptions}
      />
      <GenericHeroSection headerText="collections" />
      <section className="bg-special-primary-200 font-medium leading-loose text-gray-800">
        <div
          className={cx(
            getSectionInnerContainerClassNames(),
            "flex flex-col gap-8 sm:gap-12",
            "py-12",
            "px-8 sm:px-16 md:px-20 xl:px-36",
          )}
        >
          <div className={cx("flex gap-6 md:justify-start md:gap-16")}>
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
              <IntersectionElement
                dataConfig={{
                  onIntersectionRemove: "opacity-0",
                  unobserveAfterIntersection: true,
                }}
                key={item.title}
                className={cx(
                  "flex flex-col gap-4",
                  "text-sm sm:text-xl",
                  "opacity-0",
                  "transition-all duration-1000",
                  "aspect-[41/56] max-w-[20rem]",
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
                    "sm:h-[20rem] md:h-[24rem] lg:h-[28rem]",
                  )}
                  priority
                />
                <p className="capitalize">{item.title}</p>
                <small className="-mt-2">{item.price}</small>
              </IntersectionElement>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="intersect-show-up-container flex flex-wrap overflow-hidden md:flex-nowrap">
              <IntersectionElement
                as={CustomNextImage}
                dataConfig={{
                  onIntersectionRemove: "opacity-0",
                  unobserveAfterIntersection: true,
                }}
                src="/images/d0b95d5a13d371f41e106dfbfd9de762.jpg"
                alt=""
                width={700}
                height={450}
                className={cx(
                  "aspect-video flex-grow object-cover sm:w-2/5",
                  "sm:h-[20rem] md:h-[24rem] lg:h-[28rem]",
                  "transition-all duration-700",
                )}
              />
              <div
                className={cx(
                  "flex flex-grow flex-col items-start justify-center gap-4 bg-special-primary-100 p-8 md:gap-8 lg:gap-16",
                  "text-sm sm:text-xl",
                )}
              >
                <AboutProductButton className="hidden sm:block" />
                <IntersectionElement
                  as="p"
                  dataConfig={{
                    onIntersectionAdd: animationClasses.animate!,
                    unobserveAfterIntersection: true,
                  }}
                  className={cx(
                    "font-medium text-gray-800",
                    "leading-relaxed md:leading-10",
                    animationClasses["intersect-show-up"],
                  )}
                >
                  Silk has an incredibly soft, smooth, and light <br />
                  texture that feels wonderful against your baby&apos;s skin.
                  <br /> It is also naturally hypoallergenic.
                </IntersectionElement>
                <AboutProductButton className="sm:hidden" />
              </div>
            </div>
            <div className="intersect-show-up-container flex flex-col gap-4 text-sm sm:text-xl">
              <IntersectionElement
                as="p"
                dataConfig={{
                  onIntersectionAdd: animationClasses.animate!,
                  unobserveAfterIntersection: true,
                }}
                className={cx(
                  "capitalize",
                  "text-sm sm:text-xl",
                  animationClasses["intersect-show-up"],
                )}
              >
                full collection
              </IntersectionElement>
              <IntersectionElement
                as="small"
                dataConfig={{
                  onIntersectionAdd: animationClasses.animate!,
                  unobserveAfterIntersection: true,
                }}
                className={cx("-mt-2", animationClasses["intersect-show-up"])}
              >
                €600
              </IntersectionElement>
            </div>
          </div>
        </div>
      </section>
      <GenericAboveFooterSliderSection />
    </>
  );
}
