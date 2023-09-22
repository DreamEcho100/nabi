import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (!intersectionObserver.isClient) return;

    const intersectElements: Element[] = [
      ...document.querySelectorAll(
        '[data-intersection-observer-element="true"],[data-intersection-observer-parent-element="true"]',
      ),
    ];

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
    intersectionObserver.intersectionObserver,
    intersectionObserver.isClient,
  ]);

  return intersectionObserver;
};
