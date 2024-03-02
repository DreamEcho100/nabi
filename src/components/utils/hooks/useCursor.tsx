"use client";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent,
} from "react";
import { isMobile, isTablet } from "mobile-device-detect";
import { useIsMounted } from "~/libs/client/hooks";

function activeCursor(
  event: PointerEvent<HTMLElement>,
  cursorElem: HTMLElement,
) {
  event.stopPropagation();

  const item = event.target as Element;

  if (item.classList?.contains("logo") || item.classList?.contains("burger")) {
    cursorElem.classList.add("nav-active");
    cursorElem.style.mixBlendMode = "difference";
  } else if (item.classList.contains("explore")) {
    cursorElem.classList.add("explore-active");
    cursorElem.style.mixBlendMode = "difference";
  } else if (
    ["IMG", "VIDEO"].includes(item.tagName) ||
    item.classList?.contains("media")
  ) {
    cursorElem.classList.remove("nav-active", "explore-active");
    cursorElem.style.mixBlendMode = "hard-light";
    cursorElem.style.background = "rgb(var(--color-special-primary-700))";
  } else {
    cursorElem.classList.remove("nav-active", "explore-active");
    cursorElem.style.mixBlendMode = "difference";
    cursorElem.style.background = "white";
  }
}
function cursor(event: PointerEvent<HTMLElement>, cursorElem: HTMLElement) {
  event.stopPropagation();

  cursorElem.style.top = `${event.pageY}px`;
  cursorElem.style.left = `${event.pageX}px`;
}

export default function useCursor<
  ContainerElem extends HTMLElement,
  CursorElem extends HTMLElement,
>() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const containerElemRef = useRef<ContainerElem>(null);
  const cursorElemRef = useRef<CursorElem>(null);
  const isMounted = useIsMounted();

  const resizeObserverCallback: ResizeObserverCallback = useCallback(
    (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        if (
          entry.target.id === "app-cursor-container" &&
          cursorElemRef.current
        ) {
          cursorElemRef.current.style.top = "0px";
          cursorElemRef.current.style.left = "0px";
        }
      }
      return;
    },
    [],
  );

  const resizeObserverRef = useRef<ResizeObserver | undefined>(undefined);

  useEffect(() => {
    if (!isMounted) return;
    const isMobileOrTablet = isMobile || isTablet;
    setIsMobileOrTablet(isMobileOrTablet);
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted || !containerElemRef.current) {
      return;
    }

    let resizeObserver: ResizeObserver | undefined = undefined;
    if (!resizeObserver) {
      resizeObserver = new ResizeObserver(resizeObserverCallback);
      resizeObserverRef.current = resizeObserver;
    }

    console.log("___ 0 resizeObserver", resizeObserver);
    if (resizeObserver) {
      console.log("___ 1 isMobileOrTablet", isMobileOrTablet);
      resizeObserver.observe(containerElemRef.current);
    }

    return () => {
      resizeObserver?.disconnect();
    };
  }, [isMounted, isMobileOrTablet, resizeObserverCallback]);

  useEffect(() => {
    if (!isMounted) return;

    if (isMobileOrTablet) {
      cursorElemRef.current?.classList.add("hidden");
      containerElemRef.current?.classList.remove("cursor-none");
      return;
    }

    const timeoutId = setTimeout(() => {
      containerElemRef.current?.classList.add("cursor-none");
      cursorElemRef.current?.classList.remove("hidden");
    }, 0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isMounted]);

  return isMobileOrTablet
    ? {
        isMobileOrTablet,
        cursorElemRef,
        containerElemRef,
        containerProps: {},
      }
    : {
        isMobileOrTablet,
        containerProps: {
          onPointerMove: (event: PointerEvent<ContainerElem>) =>
            cursor(event, cursorElemRef.current!),
          onPointerOver: (event: PointerEvent<ContainerElem>) =>
            activeCursor(event, cursorElemRef.current!),
          id: "app-cursor-container",
        },
        cursorElemRef,
        containerElemRef,
        defaultCursorElement: (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <div id="cursor" ref={cursorElemRef}>
            <span className="cursor-txt"></span>
          </div>
        ),
      };
}
