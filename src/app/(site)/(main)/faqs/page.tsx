import GenericHeroSection from "~/components/core/GenericHeroSection";
import GenericAboveFooterSliderSection from "~/components/core/GenericAboveFooterSliderSection";

import QAsSection, { type TQAsList } from "~/components/core/QAsSection";
import { UseInitIntersectionElementsIntersectionObserver } from "~/components/core/IntersectionElement";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs",
};

const faqsQAs: TQAsList = [
  {
    q: "How can I contact Nabi Baby?",
    a: "Please email us at (...) for all enquires. Our team will be in touch within 1-2 business days for a response.",
  },
  {
    q: "How much is delivery?",
    a: "We use DHL to ship our packages worldwide. Orders above €100 qualify for free shipping.",
  },
  {
    q: "Does Nabi Baby deliver worldwide?",
    a: "Yes! We love sending our beautiful pieces to you internationally.",
  },
  {
    q: "What is the sizing of Nabi Baby like?",
    a: "We use special intermediate sizes, so that your little one can enjoy our rompers and onesies for a longer period of time. For example, size 56-62 is suitable for newborns up to about 3 months. Our special wool-silk blend is also stretchy, so it can be worn longer. We have a size guide on each listing to help you make the correct decision for your baby.",
  },
  {
    q: "Will you be restocking?",
    a: "Nabi Baby prides itself on limited edition collections and drops that are made in small quantities. We want each piece to remain unique. In some instances, styles may be released in second round drops and or/ different colours.",
  },
  {
    q: "What is your returns policy?",
    a: "Nabi Baby offer returns on all full priced items within 14 days of delivery for an online credit.",
  },
];

const intersectionObserverOptions: IntersectionObserverInit = {
  threshold: 0,
};

export default function FAQsScreen() {
  return (
    <>
      <UseInitIntersectionElementsIntersectionObserver
        options={intersectionObserverOptions}
      />
      <GenericHeroSection headerText="FAQs" />
      <QAsSection QAsList={faqsQAs} />
      <GenericAboveFooterSliderSection />
    </>
  );
}
