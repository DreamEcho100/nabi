import animationClasses from "~/styles/animation.module.css";

export const generalAnimationIntersectionObserverCB: IntersectionObserverCallback =
  (entries, observer) => {
    let entry: IntersectionObserverEntry;
    for (entry of entries) {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("intersect-show-up-container")) {
          // entry.target.querySelectorAll(".intersect-show-up").forEach((elem) => {
          //   elem.classList.remove("translate-y-full", "opacity-0");
          // });
          entry.target
            .querySelectorAll(`.${animationClasses["intersect-show-up"]}`)
            .forEach((elem) => {
              elem.classList.add(animationClasses.animate!);
            });
        } else if (
          entry.target.classList.contains("intersect-show-from-right")
        ) {
          entry.target.classList.remove(
            "opacity-0",
            entry.target.classList.contains("double")
              ? "translate-x-[200%]"
              : "translate-x-full",
          );
        } else if (
          entry.target.classList.contains("intersect-show-from-left")
        ) {
          entry.target.classList.remove(
            "opacity-0",
            entry.target.classList.contains("double")
              ? "-translate-x-[200%]"
              : "-translate-x-full",
          );
        } else if (entry.target.classList.contains("intersect-show")) {
          entry.target.classList.remove("opacity-0");
        } else if (
          entry.target.classList.contains("intersect-scale-base-from-150")
        ) {
          entry.target.classList.remove("scale-150");
        }

        if (!entry.target.classList.contains("retry-intersect-animation")) {
          observer.unobserve(entry.target);

          continue;
        }
      } else {
        if (entry.target.classList.contains("intersect-show-up-container")) {
          // entry.target.querySelectorAll(".intersect-show-up").forEach((elem) => {
          //   elem.classList.add("translate-y-full", "opacity-0");
          // });
          entry.target
            .querySelectorAll(`.${animationClasses["intersect-show-up"]}`)
            .forEach((elem) => {
              elem.classList.remove(animationClasses.animate!);
            });
        } else if (
          entry.target.classList.contains("intersect-show-from-right")
        ) {
          entry.target.classList.add(
            "opacity-0",
            entry.target.classList.contains("double")
              ? "translate-x-[200%]"
              : "translate-x-full",
          );
        } else if (
          entry.target.classList.contains("intersect-show-from-left")
        ) {
          entry.target.classList.add(
            "opacity-0",
            entry.target.classList.contains("double")
              ? "-translate-x-[200%]"
              : "-translate-x-full",
          );
        } else if (entry.target.classList.contains("intersect-show")) {
          entry.target.classList.add("opacity-0");
        } else if (
          entry.target.classList.contains("intersect-scale-base-from-150")
        ) {
          entry.target.classList.add("scale-150");
        }
      }
    }
  };
