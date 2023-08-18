import { cx } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import { fontsClasses } from "~/utils/core/fonts";

const headerLinks = [
  { name: "Our story", href: "#" },
  { name: "Services", href: "#" },
  { name: "Meet the team", href: "#" },
  { name: "Career", href: "#" },
  { name: "Rewards", href: "#" },
  { name: "Journal", href: "#" },
  { name: "Press", href: "#" },
  { name: "Get in touch", href: "#" },
  { name: "Book appointment", href: "#" },
];

const NavElementsOnGtLgScreens = () => {
  return (
    <>
      <ul className="hidden gap-4 lg:flex">
        {headerLinks.slice(0, 5).map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="explore whitespace-nowrap">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <Link href="#" className="hidden flex-shrink-0 lg:block">
        <Image
          src="/images/2ef897a2406c34255a69b2b3b8c42337.png"
          width={500}
          height={500}
          alt="logo"
          className="logo h-8 w-16 object-contain"
        />
      </Link>

      <ul className="hidden gap-4 lg:flex">
        {headerLinks.slice(5).map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="explore whitespace-nowrap">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const NavElementsOnLtLgScreens = () => {
  return (
    <>
      <Link href="#" className="block flex-shrink-0 lg:hidden">
        <Image
          src="/images/2ef897a2406c34255a69b2b3b8c42337.png"
          width={500}
          height={500}
          alt="logo"
          className="logo h-8 w-16 object-contain"
        />
      </Link>
      <div className="block lg:hidden">
        <button type="button">|||</button>
      </div>
    </>
  );
};

export default function MainHeader() {
  return (
    <header
      id="main-header"
      className={cx(
        "fixed left-0 right-0 top-0 isolate z-[2] flex h-main-header-h flex-col backdrop-blur-sm transition-all duration-300",
        fontsClasses
      )}
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(var(--color-special-primary-500) / 0.15), rgba(var(--color-special-primary-500) / 0.1)",
      }}
    >
      <div className="mx-auto flex h-full w-full max-w-main items-center justify-between px-8 text-white">
        <NavElementsOnGtLgScreens />
        <NavElementsOnLtLgScreens />
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
