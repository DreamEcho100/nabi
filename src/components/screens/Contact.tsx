import { cx } from "class-variance-authority";
import { getSectionInnerContainerClassNames } from "../utils";
import CustomNextImage from "../shared/common/CustomNextImage";
import GenericHeroSection from "./components/GenericHeroSection";
import GenericAboveFooterSliderSection from "./components/GenericAboveFooterSliderSection";

import animationClasses from "~/styles/animation.module.css";
import IntersectionElement, {
  useInitIntersectionElementsIntersectionObserver,
} from "./components/IntersectionElement";

const intersectionObserverOptions: IntersectionObserverInit = {
  threshold: 0,
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

const ContactsData = (props: { showOn?: "gt-sm" | "lt-sm" }) => {
  const extraClassName =
    props.showOn === "lt-sm" ? "block md:hidden" : "hidden md:block";

  return (
    <>
      <p
        className={cx(
          "font-medium text-gray-800 md:mt-2",
          "leading-normal md:leading-relaxed",
          "text-sm md:text-xl",
          extraClassName,
        )}
      >
        {[
          { children: "Nabi is the trade mark of A.K. Nabi Ltd" },
          { children: "HE406533" },
          { children: "Georgiou A&apos; 9, SOFIRINI COURT 1, SHOP 1-3," },
          { children: "4040, Germasogeia, Limassol, Cyprus" },
        ].map((item, itemIndex) => (
          <IntersectionElement
            as="span"
            dataConfig={{
              onIntersectionAdd: animationClasses.animate!,
              unobserveAfterIntersection: true,
            }}
            key={itemIndex}
            className={cx("block", animationClasses["intersect-show-up"])}
          >
            {item.children}
          </IntersectionElement>
        ))}
      </p>
      <div
        className={cx(
          "font-semibold text-stone-400",
          "leading-normal md:leading-relaxed",
          "text-sm md:text-xl",
          extraClassName,
        )}
      >
        <IntersectionElement
          as="a"
          dataConfig={{
            onIntersectionAdd: animationClasses.animate!,
            unobserveAfterIntersection: true,
          }}
          href="tel:+35799829358"
          target="_blank"
          rel="noopener noreferrer"
          className={cx("block", animationClasses["intersect-show-up"])}
        >
          Tel.: +357 99829358
        </IntersectionElement>
        <IntersectionElement
          as="a"
          dataConfig={{
            onIntersectionAdd: animationClasses.animate!,
            unobserveAfterIntersection: true,
          }}
          href="mailto:info@nabi.com"
          target="_blank"
          rel="noopener noreferrer"
          className={cx("block", animationClasses["intersect-show-up"])}
        >
          info@nabi.com
        </IntersectionElement>
      </div>
    </>
  );
};

export default function ContactScreen() {
  useInitIntersectionElementsIntersectionObserver(intersectionObserverOptions);

  return (
    <>
      <GenericHeroSection headerText="contact" />
      <section className="bg-special-primary-100 text-gray-800">
        <div
          className={cx(
            getSectionInnerContainerClassNames(),
            "flex gap-6 lg:gap-16",
            "flex-col lg:flex-row",
            "pb-12 pt-12",
            "px-8 sm:px-16 md:px-20 xl:px-36",
          )}
        >
          <IntersectionElement
            dataConfig={{
              onIntersectionRemove: "opacity-0",
              unobserveAfterIntersection: true,
            }}
            className={cx(
              "flex flex-col gap-6",
              "opacity-0",
              "transition-all duration-700",
            )}
          >
            <CustomNextImage
              priority
              src="/images/cc15f94a64b56b5e457264ccc18ad9cd.jpg"
              width={750}
              height={562.5}
              className={cx(
                "h-[12rem] w-[30rem] sm:h-[20rem] sm:w-[50rem]",
                "aspect-video object-cover",
                "transition-all duration-700",
              )}
            />
            <ContactsData />
          </IntersectionElement>
          <div className="flex w-[50rem] max-w-full flex-col gap-4 md:gap-6">
            <IntersectionElement
              as="form"
              dataConfig={{
                onIntersectionAdd: animationClasses.animate!,
                unobserveAfterIntersection: true,
              }}
              className={cx(
                "flex w-full flex-col bg-special-primary-800 px-8 py-12 md:px-16 lg:px-16 xl:px-20",
                "text-sm md:text-xl",
                "text-white",
                "gap-6 md:gap-12",
                animationClasses["intersect-show-up"],
                animationClasses["on-gt-sm"],
              )}
            >
              <div className="mb-4 text-center text-3xl font-normal leading-10 text-stone-200 md:text-4xl">
                Contact form
              </div>
              {formFields.map((formField) =>
                formField.type === "textarea" ? (
                  <textarea
                    key={formField.name}
                    {...formField}
                    className={cx(
                      "w-full border border-stone-300 bg-transparent text-base font-medium",
                      "p-3 md:p-6",
                      "placeholder:text-sm placeholder:text-white placeholder:md:text-xl",
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
                      "p-3 md:p-6",
                      "placeholder:text-sm placeholder:text-white placeholder:md:text-xl",
                    )}
                  />
                ),
              )}
              <button
                type="submit"
                className="h-10 w-full border border-white px-4 py-3 text-center text-sm font-semibold uppercase leading-none text-white md:w-36"
              >
                send
              </button>
            </IntersectionElement>
            <div className="mt-1.5 flex flex-col gap-4">
              <ContactsData showOn="lt-sm" />
            </div>
          </div>
        </div>
      </section>
      <GenericAboveFooterSliderSection />
    </>
  );
}
