import { createStore } from "zustand";

type ValueOrUpdater<TData> = TData | ((value: TData) => TData);

type Menus = { headerNavOnLtLg: { isOpen: boolean } };
type GlobalStore = {
  menus: Menus;
  hasIntroAnimationEnded: boolean;
  utils: {
    setHasIntroAnimationEnded: (
      valueOrUpdater: ValueOrUpdater<boolean>,
    ) => void;
    setIsMenuOpen: (
      menuName: keyof Menus,
      valueOrUpdater: ValueOrUpdater<boolean>,
    ) => void;
  };
};

export const globalStore = createStore<GlobalStore>((set) => ({
  menus: { headerNavOnLtLg: { isOpen: false } },
  hasIntroAnimationEnded: false,
  utils: {
    setHasIntroAnimationEnded: (valueOrUpdater) =>
      set((prev) => ({
        hasIntroAnimationEnded:
          typeof valueOrUpdater === "function"
            ? valueOrUpdater(prev.hasIntroAnimationEnded)
            : valueOrUpdater,
      })),
    setIsMenuOpen: (menuName, valueOrUpdater) =>
      set((prev) => ({
        menus: {
          ...prev.menus,
          [menuName]: {
            ...prev.menus[menuName],
            isOpen:
              typeof valueOrUpdater === "function"
                ? valueOrUpdater(prev.menus[menuName].isOpen)
                : valueOrUpdater,
          },
        },
      })),
  },
}));
