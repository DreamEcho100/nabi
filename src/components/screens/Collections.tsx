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

const intersectionObserverOptions: IntersectionObserverInit = {
  threshold: 0.1,
};

export default function CollectionScreen() {
  const intersectionObserver = useIntersectionObserver(
    generalAnimationIntersectionObserverCB,
    intersectionObserverOptions
  );

  useInitGeneralAnimationIntersectionObserver(intersectionObserver);

  return (
    <>
      <GenericHeroSection headerText="collections" />
      <section className="bg-special-primary-200 font-medium leading-loose text-gray-800">
        <div
          className={cx(
            getSectionInnerContainerClassNames(),
            "flex flex-col gap-16 px-8 pb-20 pt-12 sm:px-16"
          )}
        >
          <div className="flex flex-wrap justify-start gap-16">
            <div className="flex flex-col gap-4">
              <CustomNextImage
                src="/images/d6bbcebc00531220f00ff5a40a6af1ad.jpg"
                alt=""
                width={495}
                height={675}
                className="h-[28rem] w-[21rem] object-cover"
              />
              <p className="text-2xl capitalize">rompers</p>
              <small className="-mt-2 text-base">€450</small>
            </div>
            <div className="flex flex-col gap-4">
              <CustomNextImage
                src="/images/c526acafcc73a8ac425680a2e7b404f9.jpg"
                alt=""
                width={495}
                height={675}
                className="h-[28rem] w-[21rem] object-cover"
              />
              <p className="text-2xl capitalize">onesies</p>
              <small className="-mt-2 text-base">€180</small>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap">
              <CustomNextImage
                src="/images/d0b95d5a13d371f41e106dfbfd9de762.jpg"
                alt=""
                width={700}
                height={450}
                className="h-[28rem] w-[44rem] flex-grow object-cover"
              />
              <div className="flex flex-grow flex-col items-start justify-center gap-8 bg-special-primary-100 p-8">
                <div className="bg-stone-500 p-3 text-base font-semibold uppercase leading-none tracking-wide text-white">
                  About Product
                </div>
                <p className="text-[23px] font-medium leading-[49px] text-gray-800">
                  Silk has an incredibly soft, smooth, and light <br />
                  texture that feels wonderful against your baby&apos;s skin.
                  <br /> It is also naturally hypoallergenic.
                </p>
              </div>
            </div>
            <p className="text-2xl capitalize">full collection</p>
            <small className="-mt-2 text-base">€600</small>
          </div>
        </div>
      </section>
      <GenericAboveFooterSliderSection />
    </>
  );
}
