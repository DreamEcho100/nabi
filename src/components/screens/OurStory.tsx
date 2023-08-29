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

export default function OurStoryScreen() {
  const intersectionObserver = useIntersectionObserver(
    generalAnimationIntersectionObserverCB,
    intersectionObserverOptions
  );

  useInitGeneralAnimationIntersectionObserver(intersectionObserver);

  return (
    <>
      <GenericHeroSection headerText="our story" />
      <section className="bg-special-primary-100">
        <div
          className={cx(
            getSectionInnerContainerClassNames(),
            "flex flex-col gap-16 px-8 pb-20  pt-12 sm:px-16"
          )}
        >
          <div className="flex flex-col sm:flex-row">
            {[
              {
                src: "/images/d6bbcebc00531220f00ff5a40a6af1ad.jpg",
                width: 450,
                height: 600,
                containerClassName: "flex-grow-[1] w-full sm:w-1/4",
              },
              {
                src: "/images/a77396da5e6b7b29d69d2aad30bd3e0a.jpg",
                width: 900,
                height: 600,
                containerClassName: "flex-grow-[2] w-full sm:w-2/4",
              },
              {
                src: "/images/895cda6c8300cb3d38a0b002fea06b76.jpg",
                width: 450,
                height: 600,
                containerClassName: "flex-grow-[1] w-full sm:w-1/4",
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

          <div className="mx-auto max-w-[1300px] text-center text-base font-semibold leading-[27px] text-zinc-800">
            Nabi is a luxury brand for babies and toddlers. We only use organic
            Merino wool and fine silk for our products. <br />
            This sublime combination of fabrics is one that was carefully
            chosen:
            <br />
            <br />
            Merino wool has the ability to create a microclimate around your
            baby. Meaning it will regulate body temperature, keeping your baby
            &apos;warm when it&apos;s cold and cool when it&apos;s hot&apos;. In
            cooler temperatures it will trap warm air in to provide warmth.
            <br />
            <br />
            Silk has an incredibly soft, smooth, and light texture that feels
            wonderful against your baby&apos;s skin. It is also naturally
            hypoallergenic.
            <br />
            <br />
            Together, silk and Merino wool are just a dream. <br />
            Like a little sheep with butterfly wings. All our products are
            organic and certified with the Oeko-Tex Standard 100 label.
          </div>
        </div>
      </section>
      <GenericAboveFooterSliderSection />
    </>
  );
}
