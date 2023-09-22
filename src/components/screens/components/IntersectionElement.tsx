import { type HTMLAttributes, type FC, useEffect } from "react";
import { useIntersectionObserver } from "../utils/hooks";

export type DataConfig = {
  //
  onIntersectionAdd?: string;
  onIntersectionRemove?: string;
  unobserveAfterIntersection?: boolean;
  //
  onSeparationAdd?: string;
  onSeparationRemove?: string;
  unobserveAfterSeparation?: boolean;
  //
};
type ExtraDataConfig = {
  //
  onIntersectionAddAutomatic?: string;
  onIntersectionRemoveAutomatic?: string;
  //
  onSeparationAddAutomatic?: string;
  onSeparationRemoveAutomatic?: string;
  //
};
type IntersectionObserverConfig2Dataset = {
  [Key in NonNullable<
    keyof DataConfig | keyof ExtraDataConfig
  >]: `intersectionObserver${Capitalize<Key>}`;
};

const dataMap = {
  //
  onIntersectionAdd: "data-intersection-observer-on-intersection-add",
  onIntersectionRemove: "data-intersection-observer-on-intersection-remove",
  unobserveAfterIntersection:
    "data-intersection-observer-unobserve-after-intersection",
  //
  onSeparationAdd: "data-intersection-observer-on-separation-add",
  onSeparationRemove: "data-intersection-observer-on-separation-remove",
  unobserveAfterSeparation:
    "data-intersection-observer-unobserve-after-separation",
  //
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
        const config = {
          removed: "",
          added: "",
        };

        if (dataset.intersectionObserverOnIntersectionRemove) {
          config.removed = dataset.intersectionObserverOnIntersectionRemove;
          entry.target.classList.remove(
            ...dataset.intersectionObserverOnIntersectionRemove.split(" "),
          );

          if (dataset.intersectionObserverOnIntersectionRemoveAutomatic) {
            entry.target.classList.remove(
              ...dataset.intersectionObserverOnIntersectionRemoveAutomatic.split(
                " ",
              ),
            );
            dataset.intersectionObserverOnIntersectionRemoveAutomatic =
              undefined;
          }
        }

        if (dataset.intersectionObserverOnIntersectionAdd) {
          config.added = dataset.intersectionObserverOnIntersectionAdd;
          entry.target.classList.add(
            ...dataset.intersectionObserverOnIntersectionAdd.split(" "),
          );

          if (dataset.intersectionObserverOnIntersectionAddAutomatic) {
            entry.target.classList.add(
              ...dataset.intersectionObserverOnIntersectionAddAutomatic.split(
                " ",
              ),
            );
            dataset.intersectionObserverOnIntersectionAddAutomatic = undefined;
          }
        }

        if (dataset.intersectionObserverUnobserveAfterIntersection) {
          observer.unobserve(entry.target);
          continue;
        } else {
          if (config.added) {
            dataset.intersectionObserverOnSeparationRemoveAutomatic =
              config.added;
          }

          if (config.removed) {
            dataset.intersectionObserverOnSeparationAddAutomatic =
              config.removed;
          }
        }
      } else {
        const config = {
          removed: "",
          added: "",
        };

        if (dataset.intersectionObserverOnSeparationRemove) {
          config.removed = dataset.intersectionObserverOnSeparationRemove;
          entry.target.classList.remove(
            ...dataset.intersectionObserverOnSeparationRemove.split(" "),
          );

          if (dataset.intersectionObserverOnSeparationRemoveAutomatic) {
            entry.target.classList.remove(
              ...dataset.intersectionObserverOnSeparationRemoveAutomatic.split(
                " ",
              ),
            );
            dataset.intersectionObserverOnSeparationRemoveAutomatic = undefined;
          }
        }

        if (dataset.intersectionObserverOnSeparationAdd) {
          config.added = dataset.intersectionObserverOnSeparationAdd;
          entry.target.classList.add(
            ...dataset.intersectionObserverOnSeparationAdd.split(" "),
          );

          if (dataset.intersectionObserverOnSeparationAddAutomatic) {
            entry.target.classList.add(
              ...dataset.intersectionObserverOnSeparationAddAutomatic.split(
                " ",
              ),
            );
            dataset.intersectionObserverOnSeparationAddAutomatic = undefined;
          }
        }

        if (dataset.intersectionObserverUnobserveAfterSeparation) {
          observer.unobserve(entry.target);
          continue;
        } else {
          if (config.added) {
            dataset.intersectionObserverOnIntersectionRemoveAutomatic =
              config.added;
          }

          if (config.removed) {
            dataset.intersectionObserverOnIntersectionAddAutomatic =
              config.removed;
          }
        }
      }
    }
  };

export const useInitIntersectionElementsIntersectionObserver = (
  options?: IntersectionObserverInit | undefined,
) => {
  const intersectionObserver = useIntersectionObserver(
    intersectionElementsIntersectionObserverCB,
    options,
  );

  useEffect(() => {
    if (!intersectionObserver.isClient) return;

    const intersectElements: Element[] = [
      ...document.querySelectorAll(
        '[data-intersection-observer-element="true"],[data-intersection-observer-parent-element="true"]',
      ),
    ];

    console.log("intersectElements", intersectElements);

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

type Props<
  As extends keyof HTMLElementTagNameMap | FC,
  ElementProps extends As extends FC<infer FCProps>
    ? Omit<FCProps, "as" | "dataConfig">
    : As extends keyof HTMLElementTagNameMap
    ? Omit<HTMLAttributes<HTMLElementTagNameMap[As]>, "as" | "dataConfig">
    : Omit<HTMLAttributes<HTMLElementTagNameMap["div"]>, "as" | "dataConfig">,
> = ElementProps & {
  as?: keyof HTMLElementTagNameMap | FC<ElementProps>;
  dataConfig: DataConfig;
};

function createFromDataConfig(params: DataConfig) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: Record<string, any> = {
    "data-intersection-observer-element": true,
  };

  let key: keyof DataConfig;
  for (key in params) {
    if (typeof params[key] !== "undefined") data[dataMap[key]] = params[key]!;
  }

  return data;
}

export default function IntersectionElement<
  As extends keyof HTMLElementTagNameMap | FC,
  ElementProps extends As extends FC<infer FCProps>
    ? FCProps
    : As extends keyof HTMLElementTagNameMap
    ? Omit<HTMLAttributes<HTMLElementTagNameMap[As]>, "as" | "dataConfig">
    : never,
>(props: Props<As, ElementProps>) {
  const { as, dataConfig, ..._props } = props;

  const Element = typeof as === "undefined" ? "div" : as;

  return (
    <Element
      {...(_props as ElementProps)}
      {...createFromDataConfig(dataConfig)}
    />
  );
}
