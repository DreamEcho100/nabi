import { createStore } from "zustand";

type ValueOrUpdater<TData> = TData | ((value: TData) => TData);

type GlobalStore = {
  hasIntroAnimationEnded: boolean;
  utils: {
    setHasIntroAnimationEnded: (
      valueOrUpdater: ValueOrUpdater<boolean>
    ) => void;
  };
};

export const globalStore = createStore<GlobalStore>((set, get) => ({
  hasIntroAnimationEnded: false,
  utils: {
    setHasIntroAnimationEnded: (valueOrUpdater) =>
      set((prev) => ({
        hasIntroAnimationEnded:
          typeof valueOrUpdater === "function"
            ? valueOrUpdater(prev.hasIntroAnimationEnded)
            : valueOrUpdater,
      })),
  },
}));
