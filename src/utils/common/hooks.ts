import { useEffect, useState } from "react";

export function useIntersectionObserver(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit | undefined
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
