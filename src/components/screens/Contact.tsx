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

const ContactsData = (props: { className: string }) => {
  return (
    <div
      className={cx(
        "font-semibold text-stone-400",
        "leading-normal sm:leading-relaxed",
        "text-sm sm:text-xl",
        props.className,
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
            "flex gap-8 sm:gap-16",
            "flex-col lg:flex-row",
            "py-20 sm:py-40",
            "px-8 sm:px-16 md:px-20 xl:px-36",
          )}
        >
          <IntersectionElement
            dataConfig={{
              onIntersectionRemove: "opacity-0",
              unobserveAfterIntersection: true,
            }}
            className={cx(
              "flex flex-col gap-4 sm:gap-8",
              "opacity-0",
              "transition-all duration-700",
            )}
          >
            <CustomNextImage
              priority
              src="/images/cc15f94a64b56b5e457264ccc18ad9cd.jpg"
              width={800}
              height={325}
              className={cx(
                "h-[20rem] w-[50rem] object-cover",
                "transition-all duration-700",
              )}
            />
            <p
              className={cx(
                "mt-4 font-medium text-gray-800 sm:mt-8",
                "leading-normal sm:leading-relaxed",
                "text-sm sm:text-xl",
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

            <ContactsData className="hidden sm:block" />
          </IntersectionElement>
          <div className="flex w-[50rem] max-w-full flex-col gap-4 sm:gap-8">
            <IntersectionElement
              as="form"
              dataConfig={{
                onIntersectionAdd: animationClasses.animate!,
                unobserveAfterIntersection: true,
              }}
              className={cx(
                "flex w-full flex-col bg-special-primary-800 px-8 py-12 sm:px-20 sm:py-16",
                "text-sm sm:text-xl",
                "text-white",
                "gap-6 sm:gap-12",
                animationClasses["intersect-show-up"],
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
            </IntersectionElement>
            <ContactsData className="block sm:hidden" />
          </div>
        </div>
      </section>
      <GenericAboveFooterSliderSection />
    </>
  );
}
