import { cx } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";

import MagnifierGlassSvg from "~/svgs/magnifier-glass.svg";
import HeartSvg from "~/svgs/heart.svg";
import ShoppingCartSvg from "~/svgs/shopping-cart.svg";

const mainAppHeaderLinks = [
  { name: "Collections", href: "/collections" },
  { name: "our story", href: "/our-story" },
  { name: "the gift", href: "#" },
  { name: "contact", href: "/contact" },
];

const mainSocialHeaderLinks = [
  { name: "facebook", href: "https://facebook.com/" },
  { name: "instagram", href: "https://instagram.com/" },
  { name: "tikTok", href: "https://tiktok.com/" },
];

const NavElementsOnGtLgScreens = () => {
  return (
    <>
      <ul className="hidden gap-8 text-gray-800 lg:flex">
        {mainAppHeaderLinks.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="explore whitespace-nowrap capitalize"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/" className="flex-shrink-0">
        <Image
          src="/images/2ef897a2406c34255a69b2b3b8c42337.png"
          width={500}
          height={500}
          alt="logo"
          className="logo h-10 w-20 object-contain"
        />
      </Link>

      <div className="flex gap-8 text-gray-800">
        <ul className="hidden gap-8 lg:flex">
          {mainSocialHeaderLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="explore whitespace-nowrap capitalize"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <button type="button">
          <MagnifierGlassSvg
            className="h-4 w-4 object-contain"
            width={16}
            height={16}
          />
        </button>
        <button type="button">
          <HeartSvg className="h-4 w-4 object-contain" width={16} height={16} />
        </button>
        <button type="button">
          <ShoppingCartSvg
            className="h-4 w-4 object-contain"
            width={16}
            height={16}
          />
        </button>
        <NavElementsOnLtLgScreens />
      </div>
    </>
  );
};

const NavElementsOnLtLgScreens = () => {
  return (
    <>
      <button type="button" className="block lg:hidden">
        |||
      </button>
    </>
  );
};

export default function MainHeader() {
  return (
    // left-0 right-0 top-0 isolate
    <header
      id="main-header"
      className={cx(
        "relative isolate z-[2] flex h-main-header-h flex-col backdrop-blur-[1px] transition-all duration-300",
        "-mb-main-header-h"
      )}
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(var(--color-special-primary-500) / 0.15), rgba(var(--color-special-primary-500) / 0.1)",
      }}
    >
      <div className="mx-auto flex h-full w-full max-w-main items-center justify-between px-8 text-white">
        <NavElementsOnGtLgScreens />
      </div>
    </header>
  );
}

/* <div
        className="h-main-header-h"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(var(--color-special-primary-500) / 0.95), rgba(var(--color-special-primary-500) / 0.85)",
        }}
      /> */
