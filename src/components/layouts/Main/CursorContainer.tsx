"use client";

import { cx } from "class-variance-authority";
import type { PropsWithChildren } from "react";
import CustomNextImage from "~/components/common/CustomNextImage";
import useCursor from "~/components/utils/hooks/useCursor";
import { globalStore } from "~/components/utils/store";

export default function CursorContainer(props: PropsWithChildren) {
  const { containerElemRef, containerProps, defaultCursorElement } = useCursor<
    HTMLDivElement,
    HTMLDivElement
  >();

  return (
    <div
      ref={containerElemRef}
      className={cx(
        "main-wrapper",
        "flex flex-col font-mont",
        "cursor-none overflow-x-hidden",
      )}
      {...containerProps}
    >
      <div
        className="intro-animation fixed inset-0 z-[999] flex items-center justify-center bg-special-primary-400"
        onAnimationStartCapture={(event) => {
          event.stopPropagation();
          setTimeout(() => {
            globalStore.getState().utils.setHasIntroAnimationEnded(true);
          }, 500);
        }}
      >
        <div
          className={cx(
            "relative flex items-center justify-center rounded-full bg-special-primary-200/80 p-8",
            "h-44 w-44 md:h-72 md:w-72 lg:h-96 lg:w-96",
            "transition-all duration-300 ease-in-out",
          )}
        >
          <div
            className="absolute inset-0 -z-[1] animate-ping rounded-full bg-special-primary-200/80 opacity-20"
            style={{ animationDuration: "0.75s" }}
          />
          <CustomNextImage
            src="/images/2ef897a2406c34255a69b2b3b8c42337.png"
            width={400}
            height={250}
            alt="logo"
            className="w-11/12 animate-pulse"
            style={{ animationDuration: "1.5s" }}
            priority
          />
        </div>
      </div>
      <style jsx>{`
        .intro-animation {
          animation: fadeAnimation 2s cubic-bezier(0, 0, 0.2, 1) 3s forwards;
        }
        @keyframes fadeAnimation {
          50% {
            transform: translateX(100%);
            pointer-events: none;
            opacity: 50;
          }
          100% {
            transform: translateX(100%);
            pointer-events: none;
            opacity: 0;
          }
        }
      `}</style>
      {props.children}

      {defaultCursorElement}
    </div>
  );
}
