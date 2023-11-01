"use client";
import { useRef, useEffect, useState } from "react";
import detectMob from "is-mobile";
import { cx } from "class-variance-authority";
import CustomNextImage from "~/components/common/CustomNextImage";

const instagramSectionImages = [
  { src: "/images/78eacc02985eb7a8aa652f499f4754d5.jpg" },
  { src: "/images/d0b95d5a13d371f41e106dfbfd9de762.jpg" },
  { src: "/images/62d09421965a6fb97df8b7b773cfdd13.jpg" },
  { src: "/images/6f325a7e91cb0694e0c4961085b802d0.jpg" },
  { src: "/images/7439c368bf94e43b57734d9c6957c2cd.jpg" },
  { src: "/images/ae79344fcdb51aa3f86edc0cf2c95359.jpg" },
  { src: "/images/c0c5b84f937a87be25263de9c2689dce.jpg" },
];

export default function InstagramImagesSlider() {
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
          className={cx(
            "media absolute inset-0 h-full w-full",
            isMobile && "hidden",
          )}
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
