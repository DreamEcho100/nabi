import { type PropsWithChildren, type PointerEvent, useRef } from "react";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import { fontsClasses } from "~/utils/core/fonts";
import { cx } from "class-variance-authority";

function activeCursor(
  event: PointerEvent<HTMLDivElement>,
  cursorElem: HTMLDivElement
) {
  event.stopPropagation();

  const item = event.target as Element;

  if (item.classList?.contains("logo") || item.classList?.contains("burger")) {
    cursorElem.classList.add("nav-active");
    cursorElem.style.mixBlendMode = "screen";
  } else {
    cursorElem.classList.remove("nav-active");
    cursorElem.style.mixBlendMode = "none";
  }

  if (item.classList.contains("explore")) {
    cursorElem.classList.add("explore-active");
    // gsap.to(".title-swipe", 1, { y: "0%" });
    // pointerTxt.innerText = "Tap";
  } else {
    cursorElem.classList.remove("explore-active");
    // pointerTxt.innerText = "";
    // gsap.to(".title-swipe", 1, { y: "100%" });
  }

  // if (item.classList?.contains("magnify-image")) {
  //   pointer.classList.add("hidden");
  //   isMagnifyingImg = true;
  //   mainContent.removeEventListener("pointerover", activeCursor);
  //   mainContent.removeEventListener("pointermove", cursor);
  //   item.addEventListener("pointerleave", () => {
  //     mainContent.addEventListener("pointerover", activeCursor, false);
  //     mainContent.addEventListener("pointermove", cursor, false);
  //     pointer.classList.remove("hidden");
  //     isMagnifyingImg = false;
  //   });
  // }
  // // else if (isMagnifyingImg) {
  // //   pointer.classList.remove("hidden");
  // //   isMagnifyingImg = false;
  // //   mainContent.addEventListener("pointerover", activeCursor, false);
  // //   mainContent.addEventListener("pointermove", cursor, false);
  // // }
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
      className="flex flex-grow flex-col"
      onPointerMove={(event) => cursor(event, cursorElemRef.current!)}
      onPointerOver={(event) => activeCursor(event, cursorElemRef.current!)}
    >
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
