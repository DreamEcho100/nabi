import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { useEffect } from "react";

const elementOrThrow = <T,>(element: T) => {
  if (
    typeof element === "undefined" ||
    (typeof element === "object" && !element)
  )
    throw new Error();
  return element;
};

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mouse = elementOrThrow(
      document.getElementById("cursor") as HTMLDivElement
    );
    const mouseTxt = elementOrThrow(mouse.querySelector("span"));
    function activeCursor(e: globalThis.MouseEvent) {
      const item = elementOrThrow(e.target as Element);

      console.log("item.classList", item.classList);
      if (
        item.classList?.contains("logo") ||
        item.classList?.contains("burger")
      ) {
        mouse.classList.add("nav-active");
        mouse.style.mixBlendMode = "screen";
      } else {
        mouse.classList.remove("nav-active");
        mouse.style.mixBlendMode = "none";
      }

      if (item.classList.contains("explore")) {
        mouse.classList.add("explore-active");
        // gsap.to(".title-swipe", 1, { y: "0%" });
        // mouseTxt.innerText = "Tap";
      } else {
        mouse.classList.remove("explore-active");
        mouseTxt.innerText = "";
        // gsap.to(".title-swipe", 1, { y: "100%" });
      }
    }
    function cursor(e: globalThis.MouseEvent) {
      mouse.style.top = `${e.pageY}px`;
      mouse.style.left = `${e.pageX}px`;
    }

    window.addEventListener("mouseover", activeCursor);
    window.addEventListener("mousemove", cursor);

    return () => {
      window.removeEventListener("mouseover", activeCursor);
      window.removeEventListener("mousemove", cursor);
    };
  }, []);

  return (
    <>
      <div id="cursor">
        <span className="cursor-txt"></span>
      </div>
      <Component {...pageProps} />
    </>
  );
};

export default api.withTRPC(MyApp);
