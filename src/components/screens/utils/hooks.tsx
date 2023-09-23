import { useEffect, useState } from "react";

export function useIntersectionObserver(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit | undefined,
) {
  const [config, setConfig] = useState<null | IntersectionObserver>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setConfig(new IntersectionObserver(callback, options));

    return () => {
      config?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback, options]);

  return [config, setConfig] as const;
}
