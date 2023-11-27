"use client";
import type { HTMLAttributes, FC } from "react";
import { useEffect, useRef } from "react";
import { globalStore } from "~/components/utils/store";
import { useStore } from "zustand";
import { useState } from "react";

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

export type DataConfig = {
  state?: "intersct" | "seperate";
  //
  onIntersectAdd?: string;
  onIntersectRemove?: string;
  unobserveAfterIntersect?: boolean;
  //
  onSeparateAdd?: string;
  onSeparateRemove?: string;
  unobserveAfterSeparate?: boolean;
  //
  intersectCounter?: string | number;
  separateCounter?: string | number;
};
type ExtraDataConfig = {
  //
  onIntersectAddAutomatic?: string;
  onIntersectRemoveAutomatic?: string;
  //
  onSeparateAddAutomatic?: string;
  onSeparateRemoveAutomatic?: string;
  //
};
type IntersectionObserverConfig2Dataset = {
  [Key in NonNullable<
    keyof DataConfig | keyof ExtraDataConfig
  >]: `xio${Capitalize<Key>}`;
};

const dataMap = {
  state: "xio-state",
  //
  onIntersectAdd: "xio-on-intersect-add",
  onIntersectRemove: "xio-on-intersect-remove",
  unobserveAfterIntersect: "xio-unobserve-after-intersect",
  //
  onSeparateAdd: "xio-on-separate-add",
  onSeparateRemove: "xio-on-separate-remove",
  unobserveAfterSeparate: "xio-unobserve-after-separate",
  //
  intersectCounter: "xio-intersect-counter",
  separateCounter: "xio-separate-counter",
} as const;

export const intersectionElementsIntersectionObserverCB: IntersectionObserverCallback =
  (entries, observer) => {
    let entry: IntersectionObserverEntry;
    for (entry of entries) {
      const dataset = (entry.target as HTMLElement).dataset as {
        [Key in IntersectionObserverConfig2Dataset[keyof IntersectionObserverConfig2Dataset]]:
          | string
          | undefined;
      };

      if (entry.isIntersecting) {
        dataset.xioState = "intersect";
        dataset.xioIntersectCounter = `${
          (dataset.xioIntersectCounter
            ? Number.parseInt(dataset.xioIntersectCounter)
            : 0) + 1
        }`;

        const config = {
          removed: "",
          added: "",
        };

        if (dataset.xioOnIntersectRemove) {
          config.removed = dataset.xioOnIntersectRemove;
          entry.target.classList.remove(
            ...dataset.xioOnIntersectRemove.split(" "),
          );
        }
        if (dataset.xioOnIntersectRemoveAutomatic) {
          entry.target.classList.remove(
            ...dataset.xioOnIntersectRemoveAutomatic.split(" "),
          );
          dataset.xioOnIntersectRemoveAutomatic = undefined;
        }

        if (dataset.xioOnIntersectAdd) {
          config.added = dataset.xioOnIntersectAdd;
          entry.target.classList.add(...dataset.xioOnIntersectAdd.split(" "));
        }
        if (dataset.xioOnIntersectAddAutomatic) {
          entry.target.classList.add(
            ...dataset.xioOnIntersectAddAutomatic.split(" "),
          );
          dataset.xioOnIntersectAddAutomatic = undefined;
        }

        if (dataset.xioUnobserveAfterIntersect) {
          observer.unobserve(entry.target);
          continue;
        } else {
          if (config.added) {
            dataset.xioOnSeparateRemoveAutomatic = config.added;
          }

          if (config.removed) {
            dataset.xioOnSeparateAddAutomatic = config.removed;
          }
        }
      } else {
        dataset.xioState = "seperate";
        dataset.xioSeparateCounter = `${
          (dataset.xioSeparateCounter
            ? Number.parseInt(dataset.xioSeparateCounter)
            : 0) + 1
        }`;

        const config = {
          removed: "",
          added: "",
        };

        if (dataset.xioOnSeparateRemove) {
          config.removed = dataset.xioOnSeparateRemove;
          entry.target.classList.remove(
            ...dataset.xioOnSeparateRemove.split(" "),
          );
        }
        if (dataset.xioOnSeparateRemoveAutomatic) {
          entry.target.classList.remove(
            ...dataset.xioOnSeparateRemoveAutomatic.split(" "),
          );
          dataset.xioOnSeparateRemoveAutomatic = undefined;
        }

        if (dataset.xioOnSeparateAdd) {
          config.added = dataset.xioOnSeparateAdd;
          entry.target.classList.add(...dataset.xioOnSeparateAdd.split(" "));
        }
        if (dataset.xioOnSeparateAddAutomatic) {
          entry.target.classList.add(
            ...dataset.xioOnSeparateAddAutomatic.split(" "),
          );
          dataset.xioOnSeparateAddAutomatic = undefined;
        }

        if (dataset.xioUnobserveAfterSeparate) {
          observer.unobserve(entry.target);
          continue;
        } else {
          if (config.added) {
            dataset.xioOnIntersectRemoveAutomatic = config.added;
          }

          if (config.removed) {
            dataset.xioOnIntersectAddAutomatic = config.removed;
          }
        }
      }
    }
  };

export const useInitIntersectionElementsIntersectionObserver = (
  options?: IntersectionObserverInit | undefined,
  selectorOptions?: {
    haveSelector?: string;
    notHaveSelector?: string;
  },
) => {
  const [xio] = useIntersectionObserver(
    intersectionElementsIntersectionObserverCB,
    options,
  );
  const hasIntroAnimationEnded = useStore(
    globalStore,
    (store) => store.hasIntroAnimationEnded,
  );

  const configRef = useRef({
    firstMount: false,
  });

  useEffect(() => {
    if (
      !hasIntroAnimationEnded ||
      typeof window === "undefined" ||
      !xio ||
      !configRef.current.firstMount
    ) {
      configRef.current.firstMount = true;
      return;
    }

    const intersectElements: Element[] = [];

    document
      .querySelectorAll(
        `[data-xio-element="true"]${selectorOptions?.haveSelector ?? ""}`,
      )
      .forEach((elem) => {
        if (
          selectorOptions?.notHaveSelector &&
          elem.classList.contains(selectorOptions.notHaveSelector)
        )
          return;

        intersectElements.push(elem);
      });

    let elem: Element;
    for (elem of intersectElements) {
      xio.observe(elem);
    }

    return () => {
      xio?.disconnect();
    };
  }, [hasIntroAnimationEnded, xio, selectorOptions]);

  return xio;
};

type Props<
  As extends keyof HTMLElementTagNameMap | FC,
  ElementProps extends As extends FC<infer FCProps>
    ? Omit<FCProps, "as" | "dataConfig">
    : As extends keyof HTMLElementTagNameMap
    ? Omit<HTMLAttributes<HTMLElementTagNameMap[As]>, "as" | "dataConfig">
    : Omit<HTMLAttributes<HTMLElementTagNameMap["div"]>, "as" | "dataConfig">,
> = ElementProps & {
  as?: keyof HTMLElementTagNameMap | FC<ElementProps>;
  dataConfig?: DataConfig;
};

function createFromDataConfig(params: DataConfig) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: Record<string, any> = {
    "data-xio-element": true,
  };

  let key: keyof DataConfig;
  for (key in params) {
    if (typeof params[key] !== "undefined")
      data[`data-${dataMap[key]}`] = params[key]!;
  }

  return data;
}

const baseDataConfig = {};

export default function IntersectionElement<
  As extends keyof HTMLElementTagNameMap | FC,
  ElementProps extends As extends FC<infer FCProps>
    ? FCProps
    : As extends keyof HTMLElementTagNameMap
    ? Omit<HTMLAttributes<HTMLElementTagNameMap[As]>, "as" | "dataConfig">
    : never,
>(props: Props<As, ElementProps>) {
  const { as, dataConfig = baseDataConfig, ..._props } = props;

  const Element = typeof as === "undefined" ? "div" : as;

  return (
    <Element
      {...(_props as ElementProps)}
      {...createFromDataConfig(dataConfig)}
    />
  );
}

export function UseInitIntersectionElementsIntersectionObserver(props: {
  options?: IntersectionObserverInit | undefined;
  selectorOptions?: {
    haveSelector?: string;
    notHaveSelector?: string;
  };
}) {
  useInitIntersectionElementsIntersectionObserver(
    props.options,
    props.selectorOptions,
  );

  return null;
}
