import { cx } from "class-variance-authority";
import Link from "next/link";
import CustomNextImage from "~/components/common/custom-next-image";
import PaymentCards from "~/components/core/svgs/PaymentCards";
import { getSectionInnerContainerClassNames } from "~/components/utils";
// import PaymentCards from "~/svgs/payment-cards.svg";
// import PaymentCardsAllInline from "~/svgs/payment-cards-all-inline.svg";

type FooterLinksGroup = {
  name: string;
  links: { name: string; href: string }[];
  href?: string;
};

function SubscribeForm(props: { showOn: "gt-sm" | "lt-sm" }) {
  return (
    <form
      className={cx(
        "relative w-full max-w-full flex-col gap-y-4 sm:w-80",
        props.showOn === "gt-sm" ? "hidden sm:flex" : "flex sm:hidden",
      )}
    >
      <label className="text-sm font-semibold capitalize" htmlFor="email">
        subscribe
      </label>

      <div className="flex w-full items-center rounded border-[0.0625rem] border-white">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          className="inline-flex w-11/12 flex-grow items-start justify-start  bg-transparent px-4 py-2 text-sm text-white outline-none placeholder:capitalize placeholder:text-white"
        />
        <button className="inline-flex items-center justify-center gap-3 bg-white px-8 py-[0.6rem] text-sm font-normal leading-tight text-black">
          Send
        </button>
      </div>
    </form>
  );
}

const footerLinksGroups: [
  FooterLinksGroup,
  FooterLinksGroup,
  FooterLinksGroup,
  FooterLinksGroup,
] = [
  {
    name: "corporate",
    links: [
      { name: "about us", href: "#" },
      { name: "collections", href: "/collections" },
      { name: "contact", href: "/contact" },
    ],
  },
  {
    name: "customer service",
    links: [
      { name: "privacy policy", href: "#" },
      { name: "return & exchange", href: "/policies/return" },
      { name: "FAQs", href: "/faqs" },
    ],
  },
  {
    name: "collections",
    href: "/collections",
    links: [
      { name: "rompers", href: "#" },
      { name: "onesies", href: "#" },
    ],
  },
  {
    name: "social media",
    links: [
      { name: "instagram", href: "#" },
      { name: "facebook", href: "#" },
      { name: "twitter", href: "#" },
      { name: "youTube", href: "#" },
    ],
  },
];

export default function MainFooter() {
  return (
    <footer className="bg-special-primary-800 text-white">
      <div
        className={cx(
          getSectionInnerContainerClassNames(),
          "flex flex-col gap-8 py-16 font-medium sm:py-20 lg:gap-4",
          "px-8 sm:px-16 md:px-20 xl:px-36",
        )}
      >
        <div className="flex flex-wrap justify-between gap-4 lg:flex-nowrap">
          <div className="flex max-w-full flex-col gap-y-4">
            <Link href="/">
              <CustomNextImage
                className="explore h-12 w-24 object-contain"
                src="/images/58c85845d0b5fdf1d0621d1a7cfafb4b.png"
                width={240}
                height={160}
                alt="logo"
              />
            </Link>
            <h2 className="text-sm font-semibold">Contact</h2>
            <div className="flex flex-col gap-4 text-sm">
              <div>
                <p>Kemankeş Karamustafa Mah. Necatibey Cad.</p>
                <p>Gökçe Han No: 16 Kat: 4 Beyoğlu</p>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:+905347990864"
                >
                  +90 534 799 0864
                </a>
                <br />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:info@nabi.com"
                >
                  info@nabi.com
                </a>
              </div>
            </div>
            <SubscribeForm showOn="gt-sm" />
          </div>
          <div className="flex flex-col gap-8 lg:items-end lg:justify-end">
            <div className="hidden flex-wrap gap-x-16 gap-y-8 text-sm sm:flex sm:gap-x-12 sm:gap-y-6 lg:justify-end lg:text-right">
              {footerLinksGroups.map((linksGroup) => (
                <ul
                  key={linksGroup.name}
                  className="flex flex-col gap-2 capitalize sm:gap-4"
                >
                  <li className="font-semibold">
                    {linksGroup.href ? (
                      <Link className="explore" href={linksGroup.href}>
                        {linksGroup.name}
                      </Link>
                    ) : (
                      linksGroup.name
                    )}
                  </li>
                  <li>
                    <ul className="flex flex-col gap-1 capitalize">
                      {linksGroup.links.map((link) => (
                        <li key={link.name}>
                          <Link className="explore" href={link.href}>
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-[repeat(auto-fill,_minmax(8.25rem,_1fr))] justify-between gap-x-4 gap-y-8 text-sm sm:hidden">
              {footerLinksGroups.map((linksGroup) => (
                <ul
                  key={linksGroup.name}
                  className="flex flex-col gap-2 capitalize sm:gap-4"
                >
                  <li className="font-semibold">
                    {linksGroup.href ? (
                      <Link className="explore" href={linksGroup.href}>
                        {linksGroup.name}
                      </Link>
                    ) : (
                      linksGroup.name
                    )}
                  </li>
                  <li>
                    <ul className="flex flex-col gap-1 capitalize">
                      {linksGroup.links.map((link) => (
                        <li key={link.name}>
                          <Link className="explore" href={link.href}>
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              ))}
            </div>

            <SubscribeForm showOn="lt-sm" />

            <PaymentCards className="hidden h-16 w-52 sm:block" />
            <CustomNextImage
              src="/svgs/payment-cards-all-inline.svg"
              className="mt-4 max-w-full sm:hidden"
              width={416}
              height={30}
            />
          </div>
        </div>
        <small className="sm:text-align-initial mt-8 text-center text-sm sm:mt-4">
          Nabi &copy; 2023 | All Rights Reserved.
        </small>
      </div>
    </footer>
  );
}
