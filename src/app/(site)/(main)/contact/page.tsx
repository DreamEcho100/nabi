import { cx } from "class-variance-authority";
import CustomNextImage from "~/components/common/CustomNextImage";
import GenericAboveFooterSliderSection from "~/components/core/GenericAboveFooterSliderSection";

import animationClasses from "~/app/styles/animation.module.css";
import IntersectionElement, {
  UseInitIntersectionElementsIntersectionObserver,
} from "~/components/core/IntersectionElement";
import { getSectionInnerContainerClassNames } from "~/components/utils";
import type { Metadata } from "next";
import GenericHeroSection from "~/components/core/GenericHeroSection";

export const metadata: Metadata = {
  title: "Contact",
};

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
              onIntersectAdd: animationClasses.animate!,
              unobserveAfterIntersect: true,
            }}
            key={itemIndex}
            className={cx("block", animationClasses.intersectShowUp)}
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
            onIntersectAdd: animationClasses.animate!,
            unobserveAfterIntersect: true,
          }}
          href="tel:+35799829358"
          target="_blank"
          rel="noopener noreferrer"
          className={cx("block", animationClasses.intersectShowUp)}
        >
          Tel.: +357 99829358
        </IntersectionElement>
        <IntersectionElement
          as="a"
          dataConfig={{
            onIntersectAdd: animationClasses.animate!,
            unobserveAfterIntersect: true,
          }}
          href="mailto:info@nabi.com"
          target="_blank"
          rel="noopener noreferrer"
          className={cx("block", animationClasses.intersectShowUp)}
        >
          info@nabi.com
        </IntersectionElement>
      </div>
    </>
  );
};

export default function ContactScreen() {
  return (
    <>
      <UseInitIntersectionElementsIntersectionObserver
        options={intersectionObserverOptions}
      />
      <GenericHeroSection headerText="Contact" />
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
              onIntersectRemove: "opacity-0",
              unobserveAfterIntersect: true,
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
                onIntersectAdd: animationClasses.animate!,
                unobserveAfterIntersect: true,
              }}
              className={cx(
                "flex w-full flex-col bg-special-primary-800 px-8 py-12 md:px-16 lg:px-16 xl:px-20",
                "text-sm md:text-xl",
                "text-white",
                "gap-6 md:gap-12",
                animationClasses.intersectShowUp,
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
