export const generalAnimationIntersectionObserverCB: IntersectionObserverCallback =
  (entries, observer) => {
    let entry: IntersectionObserverEntry;
    for (entry of entries) {
      const dataset = (entry.target as HTMLElement).dataset;

      if (entry.isIntersecting) {
        const config = {
          removed: "",
          added: "",
        };

        if (dataset.intersectionObserverOnIntersectRemove) {
          config.removed = dataset.intersectionObserverOnIntersectRemove;
          entry.target.classList.remove(
            ...dataset.intersectionObserverOnIntersectRemove.split(" "),
          );
        }
        if (dataset.intersectionObserverOnIntersectionRemoveAutomatic) {
          entry.target.classList.remove(
            ...dataset.intersectionObserverOnIntersectionRemoveAutomatic.split(
              " ",
            ),
          );
          dataset.intersectionObserverOnIntersectionRemoveAutomatic = "";
        }

        if (dataset.intersectionObserverOnIntersectAdd) {
          config.added = dataset.intersectionObserverOnIntersectAdd;
          entry.target.classList.add(
            ...dataset.intersectionObserverOnIntersectAdd.split(" "),
          );
        }
        if (dataset.intersectionObserverOnIntersectionAddAutomatic) {
          entry.target.classList.add(
            ...dataset.intersectionObserverOnIntersectionAddAutomatic.split(
              " ",
            ),
          );
          dataset.intersectionObserverOnIntersectionAddAutomatic = "";
        }

        if (dataset.intersectionObserverUnobserveAfterIntersect) {
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
        }
        if (dataset.intersectionObserverOnSeparationRemoveAutomatic) {
          entry.target.classList.remove(
            ...dataset.intersectionObserverOnSeparationRemoveAutomatic.split(
              " ",
            ),
          );
          dataset.intersectionObserverOnSeparationRemoveAutomatic = "";
        }

        if (dataset.intersectionObserverOnSeparationAdd) {
          config.added = dataset.intersectionObserverOnSeparationAdd;
          entry.target.classList.add(
            ...dataset.intersectionObserverOnSeparationAdd.split(" "),
          );
        }
        if (dataset.intersectionObserverOnSeparationAddAutomatic) {
          entry.target.classList.add(
            ...dataset.intersectionObserverOnSeparationAddAutomatic.split(" "),
          );
          dataset.intersectionObserverOnSeparationAddAutomatic = "";
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
