import GenericHeroSection from "../components/GenericHeroSection";
import GenericAboveFooterSliderSection from "../components/GenericAboveFooterSliderSection";

import QAsSection, { type TQAsList } from "../components/QAsSection";
import { useInitIntersectionElementsIntersectionObserver } from "../components/IntersectionElement";

const returnsPolicyQAs: TQAsList = [
  {
    q: "I have received an item and I think its faulty, what do I do?",
    a: "First of all, we are sorry to hear this has happened! We are more than happy to assist you with this fault. Please email your name and order details along with images of your item to (...) and we will help you out.",
  },
  {
    q: "I placed an order online but have changed my mind and no longer want what I ordered, am I able to cancel my order and get a refund?",
    a: "Unfortunately we can't process a refund for a change of mind, all purchases made on Nabi Baby are final. If you are no longer wanting the particular item you ordered with us, you are more than welcome to return it and our team an issue you a store credit to use on any future purchase.",
  },
  {
    q: "What happens if the size I want isn't available once you receive my return?",
    a: "Unfortunately we cannot guarantee that the item you are after will be in stock. Your credit can be used to purchase an item of your choice or choose something else you love! Our credit notes have 12 months validity.",
  },
];

const intersectionObserverOptions: IntersectionObserverInit = {
  threshold: 0,
};

export default function ReturnsPolicyScreen() {
  useInitIntersectionElementsIntersectionObserver(intersectionObserverOptions);

  return (
    <>
      <GenericHeroSection headerText="return policy" />
      <QAsSection QAsList={returnsPolicyQAs} />
      <GenericAboveFooterSliderSection />
    </>
  );
}
