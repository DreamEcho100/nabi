import { cx } from "class-variance-authority";
import Link from "next/link";
import CustomNextImage from "~/components/shared/common/CustomNextImage";
import { getSectionInnerContainerClassNames } from "~/components/utils";

const footerLinksGroups: {
  name: string;
  links: { name: string; href: string }[];
  href?: string;
}[] = [
  {
    name: "corporate",
    links: [
      { name: "about us", href: "#" },
      { name: "collection", href: "#" },
      { name: "gift card", href: "#" },
      { name: "contact", href: "/contact" },
    ],
  },
  {
    name: "customer service",
    links: [
      { name: "privacy policy", href: "#" },
      { name: "return & exchange", href: "#" },
      { name: "terms and conditions", href: "#" },
      { name: "sales contract", href: "#" },
      { name: "secure shopping", href: "#" },
    ],
  },
  {
    name: "collection",
    href: "/collection",
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
      { name: "pinterest", href: "#" },
      { name: "youTube", href: "#" },
      { name: "linkedIn", href: "#" },
    ],
  },
];

export default function MainFooter() {
  return (
    <footer className="bg-special-primary-800/60 text-zinc-800">
      <div
        className={cx(
          getSectionInnerContainerClassNames(),
          "flex flex-col gap-8 px-8 py-20 sm:px-16 lg:gap-4"
        )}
      >
        <div className="flex flex-wrap justify-between gap-4">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <CustomNextImage
                className="explore h-12 w-24 object-contain"
                src="/images/58c85845d0b5fdf1d0621d1a7cfafb4b.png"
                width={240}
                height={160}
                alt="logo"
              />
            </Link>
            <p className="text-sm">Contact</p>
            <div className="text-sm">
              <p>Kemankeş Karamustafa Mah. Necatibey Cad.</p>
              <p>Gökçe Han No: 16 Kat: 4 Beyoğlu, İstanbul</p>
            </div>
            <div className="text-sm">
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
                href="mailto:info@seamlesstance.com"
              >
                info@seamlesstance.com
              </a>
            </div>
            <form className="relative flex h-28 w-80 max-w-full flex-col gap-2">
              <label className="text-lg font-medium capitalize" htmlFor="email">
                subscribe
              </label>

              <div className="flex items-center">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  className="inline-flex w-48 flex-grow items-start justify-start rounded-l border-[0.0625rem] border-zinc-800 bg-transparent px-4 py-2.5 text-xs text-neutral-600 outline-none placeholder:capitalize placeholder:text-neutral-600"
                />
                <button className="inline-flex items-center justify-center gap-3 rounded-r rounded-tr border-[0.0625rem] border-zinc-800 bg-zinc-800 px-8 py-2.5 text-sm leading-tight text-white">
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col gap-6 lg:items-end">
            <div className="flex flex-wrap gap-x-12 gap-y-6 text-right text-sm">
              {footerLinksGroups.map((linksGroup) => (
                <ul
                  key={linksGroup.name}
                  className="flex flex-col gap-4 capitalize"
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

            <CustomNextImage
              className="h-[3.5rem] w-[25rem]"
              src="/images/44c105f51dff021ca8d973aa5908ebd3.png"
              width={400}
              height={56}
            />
          </div>
        </div>
        <small className="mt-4 text-xs text-zinc-800">
          Nabi &copy; 2023 | All Rights Reserved.
        </small>
      </div>
    </footer>
  );
}
