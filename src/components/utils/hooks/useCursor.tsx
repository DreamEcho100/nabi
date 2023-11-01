import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent,
} from "react";

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
  const containerElemRef = useRef<ContainerElem>(null);
  const cursorElemRef = useRef<CursorElem>(null);

  const resizeObserverCallback: ResizeObserverCallback = useCallback(
    (entries: ResizeObserverEntry[]) => {
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

    if (containerElemRef.current)
      resizeObserver?.observe(containerElemRef.current);

    return () => {
      resizeObserver?.disconnect();
    };
  }, [resizeObserver, resizeObserverCallback]);

  return {
    containerProps: {
      onPointerMove: (event: PointerEvent<ContainerElem>) =>
        cursor(event, cursorElemRef.current!),
      onPointerOver: (event: PointerEvent<ContainerElem>) =>
        activeCursor(event, cursorElemRef.current!),
      id: "app-container",
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
