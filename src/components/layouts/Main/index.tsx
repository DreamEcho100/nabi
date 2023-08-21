import { type PropsWithChildren, type PointerEvent, useRef } from "react";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import { fontsClasses } from "~/utils/core/fonts";
import { cx } from "class-variance-authority";
import CustomNextImage from "~/components/shared/common/CustomNextImage";

function activeCursor(
  event: PointerEvent<HTMLDivElement>,
  cursorElem: HTMLDivElement
) {
  event.stopPropagation();

  const item = event.target as Element;

  if (item.classList?.contains("logo") || item.classList?.contains("burger")) {
    cursorElem.classList.add("nav-active");
    cursorElem.style.mixBlendMode = "color-burn";
  } else if (item.classList.contains("explore")) {
    cursorElem.classList.add("explore-active");
    cursorElem.style.mixBlendMode = "screen";
  } else {
    cursorElem.classList.remove("nav-active", "explore-active");
    cursorElem.style.mixBlendMode = "color-burn";
  }
}
function cursor(
  event: PointerEvent<HTMLDivElement>,
  cursorElem: HTMLDivElement
) {
  event.stopPropagation();

  cursorElem.style.top = `${event.pageY}px`;
  cursorElem.style.left = `${event.pageX}px`;
}
const MainLayout = (props: PropsWithChildren) => {
  const cursorElemRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cx(
        "flex flex-grow flex-col font-all-round-gothic-w01-xlig",
        fontsClasses
      )}
      onPointerMove={(event) => cursor(event, cursorElemRef.current!)}
      onPointerOver={(event) => activeCursor(event, cursorElemRef.current!)}
    >
      <div className="intro-animation fixed inset-0 z-[999] flex items-center justify-center bg-special-primary-400">
        <div className="relative flex h-96 w-96 items-center justify-center rounded-full bg-special-primary-200/80 p-8">
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

      <MainHeader />
      <main
        className={cx(
          "flex flex-grow flex-col bg-special-primary-200",
          fontsClasses
        )}
      >
        {props.children}
      </main>
      <MainFooter />
      <div id="cursor" ref={cursorElemRef}>
        <span className="cursor-txt"></span>
      </div>
    </div>
  );
};

export default MainLayout;
