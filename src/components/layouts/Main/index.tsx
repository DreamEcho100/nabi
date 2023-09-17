import {
  type PropsWithChildren,
  type PointerEvent,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import MainHeader, { NavMenuOnLtLg } from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import { cx } from "class-variance-authority";
import CustomNextImage from "~/components/shared/common/CustomNextImage";
import { MontFont } from "~/utils/core/fonts";
import { globalStore } from "~/components/utils/store";

function activeCursor(
  event: PointerEvent<HTMLDivElement>,
  cursorElem: HTMLDivElement,
) {
  event.stopPropagation();

  const item = event.target as Element;

  if (item.classList?.contains("logo") || item.classList?.contains("burger")) {
    cursorElem.classList.add("nav-active");
    cursorElem.style.mixBlendMode = "difference";
  } else if (item.classList.contains("explore")) {
    cursorElem.classList.add("explore-active");
    cursorElem.style.mixBlendMode = "difference";
  } else if (["IMG", "VIDEO"].includes(item.tagName)) {
    cursorElem.classList.remove("nav-active", "explore-active");
    cursorElem.style.mixBlendMode = "hard-light";
    cursorElem.style.background = "rgb(var(--color-special-primary-700))";
  } else {
    cursorElem.classList.remove("nav-active", "explore-active");
    cursorElem.style.mixBlendMode = "difference";
    cursorElem.style.background = "white";
  }
}
function cursor(
  event: PointerEvent<HTMLDivElement>,
  cursorElem: HTMLDivElement,
) {
  event.stopPropagation();

  cursorElem.style.top = `${event.pageY}px`;
  cursorElem.style.left = `${event.pageX}px`;
}

const MainLayout = (props: PropsWithChildren) => {
  const cursorElemRef = useRef<HTMLDivElement>(null);
  const appContainerElemRef = useRef<HTMLDivElement>(null);

  const resizeObserverCallback: ResizeObserverCallback = useCallback(
    (entries: ResizeObserverEntry[]) => {
      console.log("entries", entries);
      for (const entry of entries) {
        if (entry.target.id === "app-container" && cursorElemRef.current) {
          cursorElemRef.current.style.top = "0px";
          cursorElemRef.current.style.left = "0px";
        }
      }
      return;
    },
    [],
  );

  const [resizeObserver, setResizeObserver] = useState(
    typeof window === "undefined"
      ? undefined
      : new ResizeObserver(resizeObserverCallback),
  );
  useEffect(() => {
    if (typeof window !== "undefined" && !resizeObserver)
      setResizeObserver(new ResizeObserver(resizeObserverCallback));

    if (appContainerElemRef.current)
      resizeObserver?.observe(appContainerElemRef.current);

    return () => {
      resizeObserver?.disconnect();
    };
  }, [resizeObserver, resizeObserverCallback]);

  return (
    <div
      ref={appContainerElemRef}
      id="app-container"
      className={cx(
        "main-wrapper",
        "flex flex-col font-mont",
        "cursor-none overflow-x-hidden",
        "light", // bg-bg-primary-500 text-text-primary-500',
        MontFont.className,
      )}
      onPointerMove={(event) => cursor(event, cursorElemRef.current!)}
      onPointerOver={(event) => activeCursor(event, cursorElemRef.current!)}
    >
      <div
        className="intro-animation fixed inset-0 z-[999] flex items-center justify-center bg-special-primary-400"
        onAnimationStartCapture={(event) => {
          event.stopPropagation();
          setTimeout(() => {
            globalStore.getState().utils.setHasIntroAnimationEnded(true);
          }, 500);
        }}
        // onAnimationIteration={(event) => {
        //   event.stopPropagation();
        // }}
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

      <MainHeader />
      <main className={cx("flex flex-grow flex-col bg-special-primary-200")}>
        {props.children}
      </main>
      <MainFooter />
      <div id="cursor" ref={cursorElemRef}>
        <span className="cursor-txt"></span>
      </div>
      <NavMenuOnLtLg />
    </div>
  );
};

export default MainLayout;
