import { useEffect, useState } from "react";
import { useStore } from "zustand";
import { globalStore } from "~/components/utils/store";

export function useIntersectionObserver(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit | undefined,
) {
  const [config, setConfig] = useState<
    | { isClient: false; intersectionObserver: null }
    | { isClient: true; intersectionObserver: IntersectionObserver }
  >({
    isClient: false,
    intersectionObserver: null,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    setConfig({
      isClient: true,
      intersectionObserver: new IntersectionObserver(callback, options),
    });

    return () => {
      config.intersectionObserver?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback, options]);

  return config;
}

export const useInitGeneralAnimationIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit | undefined,
) => {
  const intersectionObserver = useIntersectionObserver(callback, options);
  const hasIntroAnimationEnded = useStore(
    globalStore,
    (store) => store.hasIntroAnimationEnded,
  );

  useEffect(() => {
    if (!intersectionObserver.isClient || !hasIntroAnimationEnded) return;

    const intersectElements: Element[] = [];

    document
      .querySelectorAll(
        '[data-intersection-observer-element="true"],[data-intersection-observer-parent-element="true"]',
      )
      .forEach((elem) => intersectElements.push(elem));

    let elem: Element;
    for (elem of intersectElements) {
      intersectionObserver.intersectionObserver.observe(elem);
    }

    return () => {
      let elem: Element;
      for (elem of intersectElements) {
        intersectionObserver.intersectionObserver.unobserve(elem);
      }
    };
  }, [
    hasIntroAnimationEnded,
    intersectionObserver.intersectionObserver,
    intersectionObserver.isClient,
  ]);

  return intersectionObserver;
};
