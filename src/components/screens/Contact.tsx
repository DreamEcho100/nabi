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
            "px-8 sm:px-16 md:px-20 xl:px-36",
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
                "intersect-element intersect-show",
                "transition-all duration-700",
              )}
            />
            <p
              className={cx(
                "mt-8 font-medium leading-normal text-gray-800 sm:leading-10",
                "text-sm sm:text-xl",
              )}
            >
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

            <div className="text-base font-semibold leading-normal text-stone-400 sm:leading-loose">
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
                "flex w-full flex-col bg-special-primary-800 px-8 py-12 sm:px-20 sm:py-16",
                animationClasses["intersect-show-up"],
                "transition-all duration-700",
                "text-sm sm:text-xl",
                "text-white",
                "gap-6 sm:gap-12",
              )}
            >
              <div className="mb-4 text-center text-3xl font-normal leading-10 text-stone-200 sm:text-4xl">
                Contact form
              </div>
              {formFields.map((formField) =>
                formField.type === "textarea" ? (
                  <textarea
                    key={formField.name}
                    {...formField}
                    className={cx(
                      "w-full border border-stone-300 bg-transparent text-base font-medium",
                      "p-3 sm:p-6",
                      "placeholder:text-sm placeholder:text-white placeholder:sm:text-xl",
                    )}
                    cols={30}
                    rows={3}
                  />
                ) : (
                  <input
                    key={formField.name}
                    {...formField}
                    className={cx(
                      "w-full border border-stone-300 bg-transparent text-base font-medium",
                      "p-3 sm:p-6",
                      "placeholder:text-sm placeholder:text-white placeholder:sm:text-xl",
                    )}
                  />
                ),
              )}
              <button
                type="submit"
                className="h-10 w-full border border-white px-4 py-3 text-center text-sm font-semibold uppercase leading-none text-white sm:w-36"
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
