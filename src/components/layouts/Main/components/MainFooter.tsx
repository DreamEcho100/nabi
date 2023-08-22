import { cx } from "class-variance-authority";
import Link from "next/link";
import CustomNextImage from "~/components/shared/common/CustomNextImage";
import { getSectionInnerContainerClassNames } from "~/components/utils";

const footerLinks = [
  { name: "collection", href: "#" },
  { name: "privacy policy", href: "#" },
  { name: "the brand", href: "#" },
  { name: "cookie policy", href: "#" },
  { name: "contacts", href: "#" },
  { name: "refund policy", href: "#" },
];

export default function MainFooter() {
  return (
    <footer className="">
      <section className="bg-special-primary-700/70">
        <div
          className={cx(
            getSectionInnerContainerClassNames({ "max-w": "max-w-[1150px]" }),
            "flex items-end justify-center gap-8  px-8 py-12 lg:gap-4",
            "flex-wrap lg:flex-row lg:flex-nowrap"
          )}
        >
          <div className="flex grow flex-col items-center justify-between gap-x-4 gap-y-6 sm:flex-row sm:items-end">
            <h2 className="text-4xl font-normal leading-10 text-white">
              Newsletter
            </h2>

            <form className="inline-flex grow flex-wrap gap-4 sm:flex-nowrap">
              <input
                type="email"
                name="email"
                id="email"
                className="flex-shrink-0 grow basis-0 border-b border-neutral-200 bg-transparent px-2 text-base font-normal text-white outline-none"
              />
              <button className="flex flex-grow items-center justify-center border border-white p-10 py-2 text-center text-base font-semibold uppercase leading-tight text-white sm:flex-grow-0">
                Subscribe
              </button>
            </form>
          </div>

          <div className="text-right text-sm font-normal leading-relaxed text-white">
            Subscribe to our newsletter to receive latest news and product
            updates
          </div>
        </div>
      </section>
      <section className="flex flex-wrap justify-center gap-8 bg-[#DBC9E3] px-8 py-12 text-white">
        <ul className="flex flex-col gap-4 uppercase">
          {footerLinks.slice(0, 3).map((item) => (
            <Link key={item.name} href={item.href}>
              {item.name}
            </Link>
          ))}
        </ul>
        <ul className="flex flex-col gap-4 uppercase">
          {footerLinks.slice(3).map((item) => (
            <Link key={item.name} href={item.href}>
              {item.name}
            </Link>
          ))}
        </ul>
      </section>

      <section
        style={{
          // backgroundAttachment: "fixed",
          backgroundImage: "url(/images/2dda775e04b7ae48e51400ca48accc49.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="text-white"
      >
        <div
          className={cx(
            getSectionInnerContainerClassNames({ "max-w": "max-w-[1150px]" }),
            "flex items-center justify-between gap-8  px-8 py-12 lg:gap-4",
            "flex-wrap lg:flex-row lg:flex-nowrap"
          )}
        >
          <CustomNextImage
            className="h-10 w-16 object-contain"
            src="/images/58c85845d0b5fdf1d0621d1a7cfafb4b.png"
            width={120}
            height={80}
          />
          <p>&copy; 2023 A.K. Nabi Baby Ltd. All rights reserved</p>
          <p>Created by Nabi agency</p>
        </div>
      </section>
    </footer>
  );
}
