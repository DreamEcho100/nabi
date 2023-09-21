import Link from "next/link";
import { getSectionInnerContainerClassNames } from "~/components/utils";
import CustomNextImage from "~/components/shared/common/CustomNextImage";
import { cx } from "class-variance-authority";
import animationClasses from "~/styles/animation.module.css";
import { generalAnimationIntersectionObserverCB } from "./utils";
import { useInitGeneralAnimationIntersectionObserver } from "./utils/hooks";
import { useRef, useEffect, useState } from "react";
import detectMob from "is-mobile";

const intersectionObserverOptions: IntersectionObserverInit = {
  threshold: 0.1,
};

const instagramSectionImages = [
  { src: "/images/78eacc02985eb7a8aa652f499f4754d5.jpg" },
  { src: "/images/d0b95d5a13d371f41e106dfbfd9de762.jpg" },
  { src: "/images/62d09421965a6fb97df8b7b773cfdd13.jpg" },
  { src: "/images/6f325a7e91cb0694e0c4961085b802d0.jpg" },
  { src: "/images/7439c368bf94e43b57734d9c6957c2cd.jpg" },
  { src: "/images/ae79344fcdb51aa3f86edc0cf2c95359.jpg" },
  { src: "/images/c0c5b84f937a87be25263de9c2689dce.jpg" },
];

function InstagramImagesSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const trackWrapperRef = useRef<HTMLDivElement>(null);
  const trackContainerRef = useRef<HTMLDivElement>(null);
  const configRef = useRef<{
    isInitialized: boolean;
    track: { translateX: number; originalX: number; width: number };
    trackContainer: { x: number; x2: number };
    mouse: { oldX: number };
    isActive: boolean;
  }>({
    isInitialized: false,
    track: { translateX: 0, originalX: 0, width: 0 },
    trackContainer: { x: 0, x2: 0 },
    mouse: { oldX: 0 },
    isActive: false,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => setIsMobile(detectMob()), []);

  useEffect(() => {
    if (
      detectMob() ||
      configRef.current.isInitialized ||
      !trackContainerRef.current ||
      !trackRef.current
    )
      return;

    const trackContainerBoundingClientRect =
      trackContainerRef.current.getBoundingClientRect();
    configRef.current.trackContainer.x = trackContainerBoundingClientRect.x;
    configRef.current.trackContainer.x2 =
      trackContainerBoundingClientRect.x +
      trackContainerBoundingClientRect.width;

    const trackBoundingClientRect = trackRef.current.getBoundingClientRect();
    configRef.current.track.width = trackBoundingClientRect.width;
    configRef.current.track.originalX = trackBoundingClientRect.x;

    configRef.current.isInitialized = true;
  }, []);

  return (
    <div
      className={cx(isMobile ? "overflow-x-auto" : "overflow-x-hidden")}
      ref={trackContainerRef}
    >
      <div
        className="relative flex gap-4"
        style={{
          width: `${
            8 * instagramSectionImages.length +
            (1 * instagramSectionImages.length - 1)
          }rem`,
        }}
        ref={trackRef}
      >
        {instagramSectionImages.map((item) => (
          <CustomNextImage
            key={item.src}
            src={item.src}
            width={612}
            height={448}
            className={cx(
              "aspect-square h-32 w-32 flex-shrink-0 -translate-y-1 object-cover",
            )}
          />
        ))}
        <div
          ref={trackWrapperRef}
          className="absolute inset-0 h-full w-full"
          onPointerDown={(event) => {
            if (!trackRef.current) return;

            configRef.current.isActive = true;
            configRef.current.mouse.oldX = event.clientX;
          }}
          onPointerUp={() => {
            if (!trackRef.current) return;

            configRef.current.isActive = false;
            configRef.current.mouse.oldX = 0;
          }}
          onPointerLeave={() => {
            if (!trackRef.current) return;

            configRef.current.isActive = false;
            configRef.current.mouse.oldX = 0;
          }}
          onPointerMove={(event) => {
            if (!configRef.current.isActive || !trackRef.current) return;
            const moveX = event.clientX - configRef.current.mouse.oldX;

            if (
              configRef.current.track.translateX + moveX > 0 ||
              Math.abs(configRef.current.track.translateX + moveX) >
                configRef.current.trackContainer.x2
            )
              return;

            configRef.current.track.translateX += moveX;
            trackRef.current.style.transform = `translateX(${configRef.current.track.translateX}px)`;

            configRef.current.mouse.oldX = event.clientX;
          }}
        />
      </div>
    </div>
  );
}

export default function HomeScreen() {
  useInitGeneralAnimationIntersectionObserver(
    generalAnimationIntersectionObserverCB,
    intersectionObserverOptions,
  );

  return (
    <>
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
          <h1
            className={cx(
              "max-w-[1150px] leading-6 sm:leading-10",
              "text-lg sm:text-3xl",
              animationClasses["intersect-show-up"],
            )}
            data-intersection-observer-element={true}
            data-intersection-observer-on-intersect-add={
              animationClasses.animate
            }
            data-intersection-observer-unobserve-after-intersect={true}
          >
            Slow fashion for the fastest growing. Dreamed up and hand designed
            in the <br />
            Netherlands, sustainable and organic.
          </h1>
          <div
            className={cx(
              "mb-[-0.5rem] h-8 w-[0.0625rem] bg-special-primary-900",
              animationClasses["intersect-show-up"],
            )}
            data-intersection-observer-element={true}
            data-intersection-observer-on-intersect-add={
              animationClasses.animate
            }
            data-intersection-observer-unobserve-after-intersect={true}
          />
          <p
            className={cx(
              "text-center font-normal leading-tight text-zinc-800",
              "text-[0.6875rem] sm:text-sm",
              animationClasses["intersect-show-up"],
            )}
            data-intersection-observer-element={true}
            data-intersection-observer-on-intersect-add={
              animationClasses.animate
            }
            data-intersection-observer-unobserve-after-intersect={true}
          >
            Scroll to discover <br />
            more about us
          </p>
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
            <div className="w-3/4 sm:w-1/2">
              <CustomNextImage
                className={cx("w-full", animationClasses["intersect-show-up"])}
                data-intersection-observer-element={true}
                data-intersection-observer-on-intersect-add={
                  animationClasses.animate
                }
                data-intersection-observer-unobserve-after-intersect={true}
                src="/images/c0c5b84f937a87be25263de9c2689dce.jpg"
                width={400}
                height={600}
                alt=""
                priority
              />
            </div>
            <div
              className={cx("flex h-[40rem] max-w-full sm:w-3/4")}
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                gridTemplateRows: "1fr 1fr",
              }}
            >
              <CustomNextImage
                className={cx(
                  "h-full w-full flex-grow object-cover sm:pl-20",
                  animationClasses["intersect-show-up"],
                )}
                data-intersection-observer-element={true}
                data-intersection-observer-on-intersect-add={
                  animationClasses.animate
                }
                style={{
                  gridColumn: "1/2",
                  gridRow: "2/3",
                  justifySelf: "end",
                }}
                src="/images/eee0eb8f09076922a7b0589c159d306e.jpg"
                width={400}
                alt=""
                height={600}
              />
              <CustomNextImage
                className={cx(
                  "h-full w-full flex-grow object-cover",
                  animationClasses["intersect-show-up"],
                )}
                data-intersection-observer-element={true}
                data-intersection-observer-on-intersect-add={
                  animationClasses.animate
                }
                style={{
                  gridColumn: "2/3",
                  gridRow: "1/2",
                }}
                src="/images/c526acafcc73a8ac425680a2e7b404f9.jpg"
                width={400}
                height={600}
                alt=""
                priority
              />
            </div>
            <div className={cx("flex h-[25rem] object-cover")}>
              <div className="w-1/2" />
              <CustomNextImage
                className={cx(
                  "object-coversw-1/2 h-full",
                  animationClasses["intersect-show-up"],
                )}
                data-intersection-observer-element={true}
                data-intersection-observer-on-intersect-add={
                  animationClasses.animate
                }
                src="/images/0a2f04bd01da4575eb635a90c642061b.jpg"
                width={328}
                height={328}
                alt=""
              />
            </div>
          </div>
          <div
            className={cx(
              "relative max-w-[928px] flex-grow text-white",
              "pb-10 pt-5 sm:pb-36 sm:pt-36 lg:pe-16 lg:ps-8",
            )}
          >
            <h2
              className={cx(
                "sticky top-[var(--main-header-h)] flex justify-center font-all-round-gothic-w01-xlig font-normal capitalize",
                "text-sm sm:text-[2.5rem]",
                animationClasses["intersect-show-up"],
              )}
              data-intersection-observer-element={true}
              data-intersection-observer-on-intersect-add={
                animationClasses.animate
              }
            >
              <span className="leading-relaxed sm:whitespace-nowrap">
                Home to beautiful <br />
                pieces and delicate <br className="hidden sm:block" /> fabrics
              </span>
            </h2>
          </div>
          <div className={cx("mx-auto w-1/2 pt-10", "sm:hidden")}>
            <CustomNextImage
              className={cx("w-full", animationClasses["intersect-show-up"])}
              data-intersection-observer-element={true}
              data-intersection-observer-on-intersect-add={
                animationClasses.animate
              }
              src="/images/c0c5b84f937a87be25263de9c2689dce.jpg"
              width={400}
              height={600}
              alt=""
              priority
            />
          </div>
        </div>
      </section>
      <section className="bg-special-primary-200">
        <div
          className={`${getSectionInnerContainerClassNames()} flex flex-col gap-8 px-8 pb-10 pt-4 sm:gap-16`}
        >
          <div className="mx-auto grid max-w-[1024px] grid-cols-2 gap-4 sm:h-[28rem] md:h-[44rem]">
            {[
              { src: "/images/895cda6c8300cb3d38a0b002fea06b76.jpg" },
              { src: "/images/2dda775e04b7ae48e51400ca48accc49.jpg" },
            ].map((item) => (
              <div key={item.src} className="w-full flex-grow overflow-hidden">
                <CustomNextImage
                  src={item.src}
                  width={600}
                  height={800}
                  alt=""
                  className={cx(
                    "h-[20rem] w-[12rem] object-cover sm:h-full sm:w-full",
                    "transition-all duration-1000",
                  )}
                  data-intersection-observer-element={true}
                  data-intersection-observer-on-intersect-remove="scale-150"
                  priority
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-center sm:gap-4 md:gap-8">
            <p
              className={cx(
                "text-center font-normal leading-6 text-zinc-800",
                "text-sm sm:text-xl sm:leading-10",
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
          <div className="intersect-show-up-container">
            <p
              className={cx(
                "text-sm font-semibold leading-7 text-white",
                animationClasses["intersect-show-up"],
              )}
              data-intersection-observer-element={true}
              data-intersection-observer-on-intersect-add={
                animationClasses.animate
              }
            >
              @nabibabystore
            </p>
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
