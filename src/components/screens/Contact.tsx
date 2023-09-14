import { cx } from "class-variance-authority";
import { getSectionInnerContainerClassNames } from "../utils";
import {
  useInitGeneralAnimationIntersectionObserver,
  useIntersectionObserver,
} from "./utils/hooks";
import { generalAnimationIntersectionObserverCB } from "./utils";
import CustomNextImage from "../shared/common/CustomNextImage";
import GenericHeroSection from "./components/GenericHeroSection";
import GenericAboveFooterSliderSection from "./components/GenericAboveFooterSliderSection";

import animationClasses from "~/styles/animation.module.css";

const intersectionObserverOptions: IntersectionObserverInit = {
  threshold: 0.1,
};

const formFields: {
  placeholder?: string;
  type?: "email" | "textarea";
  name: string;
  min?: number;
}[] = [
  { placeholder: "Your name", name: "name", min: 2 },
  { placeholder: "Email", name: "email", type: "email" },
  { placeholder: "Subject", name: "subject", min: 2 },
  { name: "content", type: "textarea" },
];

export default function ContactScreen() {
  const intersectionObserver = useIntersectionObserver(
    generalAnimationIntersectionObserverCB,
    intersectionObserverOptions,
  );

  useInitGeneralAnimationIntersectionObserver(intersectionObserver);

  return (
    <>
      <GenericHeroSection headerText="contact" />
      <section className="bg-special-primary-100 text-gray-800">
        <div
          className={cx(
            getSectionInnerContainerClassNames(),
            "flex gap-16",
            "py-40",
            "px-16 md:px-20 xl:px-40",
            "flex-col lg:flex-row",
            "intersect-show-up-container",
          )}
        >
          <div
            className={cx(
              "flex flex-col gap-8",
              "intersect-show intersect-elem",
              "opacity-0",
              "transition-all",
            )}
            style={{ transitionDuration: "0.75s" }}
          >
            <CustomNextImage
              src="/images/cc15f94a64b56b5e457264ccc18ad9cd.jpg"
              width={800}
              height={325}
              className={cx(
                "h-[20rem] w-[50rem] object-cover",
                animationClasses["intersect-show-up"],
                "transition-all duration-700",
              )}
            />
            <p className="mt-8 text-2xl font-medium leading-10 text-gray-800">
              <span
                className={cx(
                  animationClasses["intersect-show-up"],
                  "transition-all duration-1000",
                )}
              >
                Nabi is the trade mark of A.K. Nabi Ltd
              </span>
              <br />
              <span
                className={cx(
                  animationClasses["intersect-show-up"],
                  "duratio1000 transition-all",
                )}
              >
                HE406533
              </span>
              <br />
              <span
                className={cx(
                  animationClasses["intersect-show-up"],
                  "transition-all duration-1000",
                )}
              >
                Georgiou A&apos; 9, SOFIRINI COURT 1, SHOP 1-3,
              </span>
              <br />
              <span
                className={cx(
                  animationClasses["intersect-show-up"],
                  "transition-all duration-1000",
                )}
              >
                4040, Germasogeia, Limassol, Cyprus
              </span>
            </p>

            <div className="text-base font-semibold leading-loose text-stone-400">
              <a
                href="tel:+35799829358"
                target="_blank"
                rel="noopener noreferrer"
                className={cx(
                  animationClasses["intersect-show-up"],
                  "transition-all duration-700",
                )}
              >
                Tel.: +357 99829358
              </a>
              <br />
              <a
                href="mailto:info@nabi.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cx(
                  animationClasses["intersect-show-up"],
                  "transition-all duration-700",
                )}
              >
                info@nabi.com
              </a>
            </div>
          </div>
          <div className="w-[50rem] max-w-full">
            <form
              className={cx(
                "flex w-full flex-col gap-12 bg-special-primary-800 px-20 py-16",
                animationClasses["intersect-show-up"],
                "transition-all duration-700",
              )}
            >
              <div className="mb-4 text-center text-4xl font-normal leading-10 text-stone-200">
                Contact form
              </div>
              {formFields.map((formField) =>
                formField.type === "textarea" ? (
                  <textarea
                    key={formField.name}
                    {...formField}
                    className="w-full border border-stone-300 bg-transparent px-6 py-6 text-base font-medium text-white placeholder:text-base placeholder:text-white"
                    cols={30}
                    rows={3}
                  />
                ) : (
                  <input
                    key={formField.name}
                    {...formField}
                    className="w-full border border-stone-300 bg-transparent px-6 py-6 text-base font-medium text-white placeholder:text-base placeholder:text-white"
                  />
                ),
              )}
              <button
                type="submit"
                className="h-10 w-36 border border-white px-4 py-3 text-center text-sm font-semibold uppercase leading-none text-white"
              >
                send
              </button>
            </form>
          </div>
        </div>
      </section>
      <GenericAboveFooterSliderSection />
    </>
  );
}
