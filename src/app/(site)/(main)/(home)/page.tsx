"use client";
import Link from "next/link";
import { getSectionInnerContainerClassNames } from "~/components/utils";
import { cx } from "class-variance-authority";
import animationClasses from "~/app/styles/animation.module.css";

import IntersectionElement, {
  UseInitIntersectionElementsIntersectionObserver,
} from "~/components/core/IntersectionElement";
import CustomNextImage from "~/components/common/CustomNextImage";
import InstagramImagesSlider from "./_components/InstagramImagesSlider";

const intersectionObserverOptions: IntersectionObserverInit = {
  threshold: 0,
};

export default function HomeScreen() {
  return (
    <>
      <UseInitIntersectionElementsIntersectionObserver
        options={intersectionObserverOptions}
      />
      <section className="h-screen max-h-[100rem] min-h-fit bg-special-primary-500">
        {[
          {
            src: "https://pub-e64c0d41da1941878cb722e3371ce7a2.r2.dev/Reel_1_v1.mp4 - Review Link - July 17, 2023 - Frame.io.mp4",
            className: "h-full w-full object-cover sm:hidden",
          },
          {
            src: "https://pub-e64c0d41da1941878cb722e3371ce7a2.r2.dev/Nabi_30_v2_1.mp4",
            className: "h-full w-full object-cover hidden sm:block",
          },
        ].map((item) => (
          <video
            key={item.src}
            className={item.className}
            autoPlay
            muted
            loop
            poster="/images/3eda340496860c533c866c4a3619cc26.jpg"
            width={500}
            height={800}
            playsInline
          >
            <source src={item.src} type="video/mp4" />
          </video>
        ))}
      </section>

      <section className="bg-special-primary-700/40">
        <div
          className={`${getSectionInnerContainerClassNames()} flex flex-col items-center justify-center gap-4 px-8 py-8 text-center sm:min-h-[36rem] sm:py-36`}
        >
          <IntersectionElement
            as="h1"
            dataConfig={{ onIntersectAdd: animationClasses.animate! }}
            className={cx(
              "max-w-[1150px] leading-6 sm:leading-10",
              "text-lg sm:text-3xl",
              animationClasses.intersectShowUp,
            )}
          >
            Slow fashion for the fastest growing. Dreamed up and hand designed
            in the <br />
            Netherlands, sustainable and organic.
          </IntersectionElement>
          <IntersectionElement
            dataConfig={{ onIntersectAdd: animationClasses.animate! }}
            className={cx(
              "mb-[-0.5rem] h-8 w-[0.0625rem] bg-special-primary-900",
              animationClasses.intersectShowUp,
            )}
          />
          <IntersectionElement
            as="p"
            dataConfig={{ onIntersectAdd: animationClasses.animate! }}
            className={cx(
              "text-center font-normal leading-tight text-zinc-800",
              "text-[0.6875rem] sm:text-sm",
              animationClasses.intersectShowUp,
            )}
          >
            Scroll to discover <br />
            more about us
          </IntersectionElement>
        </div>
      </section>

      <section className="overflow-hidden bg-special-primary-800">
        <div
          className={`${getSectionInnerContainerClassNames({
            "max-w": "",
            w: "",
          })} lg:text-align-initial flex flex-col-reverse justify-center text-center lg:flex-row`}
        >
          <div
            className={cx(
              "max-w-[928px] flex-grow overflow-hidden py-10",
              "hidden sm:block",
            )}
          >
            <IntersectionElement className="w-3/4 sm:w-1/2">
              <CustomNextImage
                className="parent-intersect-show-up w-full"
                src="/images/WhatsApp Image 2023-10-24 at 12.15.00_d01b03f9.jpg"
                width={400}
                height={600}
                alt=""
                priority
              />
            </IntersectionElement>
            <div
              className={cx("flex h-[40rem] max-w-full sm:w-3/4")}
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                gridTemplateRows: "1fr 1fr",
              }}
            >
              <IntersectionElement
                style={{
                  gridColumn: "1/2",
                  gridRow: "2/3",
                  justifySelf: "end",
                }}
              >
                <CustomNextImage
                  className="parent-intersect-show-up h-full w-full flex-grow object-cover sm:pl-20"
                  src="/images/eee0eb8f09076922a7b0589c159d306e.jpg"
                  width={400}
                  alt=""
                  height={600}
                />
              </IntersectionElement>
              <IntersectionElement
                style={{ gridColumn: "2/3", gridRow: "1/2" }}
              >
                <CustomNextImage
                  className="parent-intersect-show-up h-full w-full flex-grow object-cover"
                  src="/images/c526acafcc73a8ac425680a2e7b404f9.jpg"
                  width={400}
                  height={600}
                  // alt=""
                  priority
                />
              </IntersectionElement>
            </div>
            <IntersectionElement className="flex h-[25rem]">
              <div className="w-1/2" />
              <CustomNextImage
                className="parent-intersect-show-up h-full w-2/5 object-cover"
                src="/images/0a2f04bd01da4575eb635a90c642061b.jpg"
                width={328}
                height={328}
                alt=""
              />
            </IntersectionElement>
          </div>
          <div
            className={cx(
              "relative max-w-[928px] flex-grow text-white",
              "pb-10 pt-5 sm:pb-36 sm:pt-36 lg:pe-16 lg:ps-8",
            )}
          >
            <IntersectionElement
              as="h2"
              dataConfig={{ onIntersectAdd: animationClasses.animate! }}
              className={cx(
                "sticky top-[var(--main-header-h)] flex justify-center font-all-round-gothic-w01-xlig font-normal capitalize",
                "text-sm sm:text-[2.5rem]",
                animationClasses.intersectShowUp,
              )}
            >
              <span className="leading-relaxed sm:whitespace-nowrap">
                Home to beautiful <br />
                pieces and delicate <br className="hidden sm:block" /> fabrics
              </span>
            </IntersectionElement>
          </div>
          <IntersectionElement className="mx-auto w-1/2 pt-10 sm:hidden">
            <CustomNextImage
              className="parent-intersect-show-up w-full"
              src="/images/WhatsApp Image 2023-10-24 at 12.15.00_d01b03f9.jpg"
              width={400}
              height={600}
              alt=""
              priority
            />
          </IntersectionElement>
        </div>
      </section>

      <section className="bg-special-primary-200">
        <div
          className={`${getSectionInnerContainerClassNames()} flex flex-col gap-8 px-8 pb-10 pt-4 sm:gap-16`}
        >
          <div className="mx-auto grid max-w-[1024px] grid-cols-2 gap-4 sm:h-[24rem] md:h-[44rem]">
            {[
              { src: "/images/895cda6c8300cb3d38a0b002fea06b76.jpg" },
              { src: "/images/2dda775e04b7ae48e51400ca48accc49.jpg" },
            ].map((item) => (
              <div key={item.src} className="w-full flex-grow overflow-hidden">
                <IntersectionElement
                  as={CustomNextImage}
                  dataConfig={{ onIntersectRemove: "scale-150" }}
                  src={item.src}
                  width={600}
                  height={800}
                  alt=""
                  className={cx(
                    "aspect-[9/16] h-[15rem] w-[12rem] object-cover xl-2-sm:h-[18rem] sm:h-full sm:w-full",
                    "scale-150",
                    "transition-all duration-1000",
                  )}
                  priority
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-center sm:gap-4 md:gap-8">
            <p
              className={cx(
                "text-center font-normal text-zinc-800",
                "text-sm sm:text-xl",
                "leading-6 sm:leading-10",
              )}
            >
              Merino wool has the ability to create a microclimate around your
              baby. <br />
              Meaning it will regulate body temperature, keeping your baby
              &apos;warm when it&apos;s cold and cool when it&apos;s hot&apos;.
              <br />
              In cooler temperatures it will trap warm air in to provide warmth.
            </p>
            <Link
              href="/our-story"
              className="explore leading-7s text-center text-xs font-normal text-zinc-800 underline sm:text-sm"
            >
              Read more about our story
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-special-primary-700/40">
        <div
          className={cx(
            getSectionInnerContainerClassNames({
              "max-w": "max-w-[1088px]",
            }),
            "flex flex-col gap-3 px-8 py-10 sm:gap-8 sm:py-32",
          )}
        >
          <div className="intersectShowUp-container">
            <IntersectionElement
              as="p"
              dataConfig={{ onIntersectAdd: animationClasses.animate! }}
              className={cx(
                "text-sm font-semibold leading-7 text-white",
                animationClasses.intersectShowUp,
              )}
            >
              @nabibabystore
            </IntersectionElement>
          </div>
          <div className="flex flex-col gap-8">
            <CustomNextImage
              src="/svgs/instagram.svg"
              width={980}
              height={135}
              alt=""
              priority
              className="mx-auto object-cover"
            />
            <InstagramImagesSlider />
          </div>
        </div>
      </section>
    </>
  );
}
