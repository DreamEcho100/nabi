"use client";

import type { PropsWithChildren } from "react";

import { cx } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import { PiFacebookLogo, PiInstagramLogo, PiTiktokLogo } from "react-icons/pi";
import type { IconType } from "react-icons";
import MagnifierGlassSvg from "~/components/common/svgs/magnifier-glass";
import HeartSvg from "~/components/common/svgs/heart";
import ShoppingCartSvg from "~/components/common/svgs/shopping-cart";
import { globalStore } from "~/components/utils/store";
import { useStore } from "zustand";

export const mainAppHeaderLinks = [
  { name: "Collections", href: "/collections" },
  { name: "our story", href: "/our-story" },
  { name: "FAQs", href: "/faqs" },
  { name: "contact", href: "/contact" },
];

export const mainSocialHeaderLinks = [
  {
    name: "facebook",
    href: "https://facebook.com/",
    Icon: PiFacebookLogo as IconType,
  },
  {
    name: "instagram",
    href: "https://instagram.com/",
    Icon: PiInstagramLogo as IconType,
  },
  {
    name: "tikTok",
    href: "https://tiktok.com/",
    Icon: PiTiktokLogo as IconType,
  },
];

const NavElementsOnGtLgScreens = () => {
  const isHeaderNavOnLtMdOpen = useStore(
    globalStore,
    (store) => store.menus.headerNavOnLtLg.isOpen,
  );

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

      <Link
        href="/"
        className={cx(
          "flex-shrink-0",
          isHeaderNavOnLtMdOpen && "hidden lg:inline",
        )}
      >
        <Image
          src="/images/2ef897a2406c34255a69b2b3b8c42337.png"
          width={500}
          height={500}
          alt="logo"
          className="logo h-10 w-20 object-contain"
        />
      </Link>

      <div
        className={cx(
          "flex items-center gap-4 text-gray-800 lg:gap-8",
          isHeaderNavOnLtMdOpen &&
            "ml-auto rtl:ml-0 rtl:mr-0 sm:ml-0 sm:rtl:mr-0",
        )}
      >
        <ul className={cx("gap-4 lg:gap-8", "hidden lg:flex")}>
          {mainSocialHeaderLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="explore whitespace-nowrap capitalize"
              >
                <span className="hidden lg:inline">{item.name}</span>{" "}
                <item.Icon className="inline text-lg lg:hidden" />
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={cx(isHeaderNavOnLtMdOpen && "hidden lg:inline")}
        >
          <MagnifierGlassSvg
            className="h-4 w-4 object-contain"
            width={16}
            height={16}
          />
        </button>
        <button
          type="button"
          className={cx(isHeaderNavOnLtMdOpen && "hidden lg:inline")}
        >
          <HeartSvg className="h-4 w-4 object-contain" width={16} height={16} />
        </button>
        <button
          type="button"
          className={cx(isHeaderNavOnLtMdOpen && "hidden lg:inline")}
        >
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

export function NavMenuOnLtLg() {
  const isHeaderNavOnLtMdOpen = useStore(
    globalStore,
    (store) => store.menus.headerNavOnLtLg.isOpen,
  );

  return (
    <div
      className={cx(
        "bg-special-primary-400 fixed inset-0 z-10",
        isHeaderNavOnLtMdOpen
          ? "opacity-1"
          : "pointer-events-none select-none opacity-0",
      )}
      style={{
        clipPath: `circle(${
          isHeaderNavOnLtMdOpen ? "200.0%" : "0.0%"
        } at 100% 0)`,
        opacity: isHeaderNavOnLtMdOpen ? "1" : "0",
        transition: `clip-path ${
          isHeaderNavOnLtMdOpen ? "0.7s" : "0.5s"
        } cubic-bezier(0.4, 0, 0.2, 1), opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1) ${
          isHeaderNavOnLtMdOpen ? "0s" : "0.5s"
        }`,
      }}
    >
      <div
        className={cx(
          "flex h-full w-full flex-col items-center justify-center gap-3",
          "text-2xl sm:text-4xl",
        )}
      >
        <Link
          href="/"
          className="explore whitespace-nowrap capitalize"
          onClick={() =>
            globalStore
              .getState()
              .utils.setIsMenuOpen("headerNavOnLtLg", (prev) => !prev)
          }
        >
          home
        </Link>
        {mainAppHeaderLinks.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="explore whitespace-nowrap capitalize"
            onClick={() =>
              globalStore
                .getState()
                .utils.setIsMenuOpen("headerNavOnLtLg", (prev) => !prev)
            }
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

const NavElementsOnLtLgScreens = () => {
  const isHeaderNavOnLtMdOpen = useStore(
    globalStore,
    (store) => store.menus.headerNavOnLtLg.isOpen,
  );

  return (
    <button
      type="button"
      className={cx(
        "group flex h-4 w-4 flex-col justify-center gap-[15%] lg:hidden",
        isHeaderNavOnLtMdOpen && "relative z-[11]",
      )}
      onClick={() =>
        globalStore
          .getState()
          .utils.setIsMenuOpen("headerNavOnLtLg", (prev) => !prev)
      }
      aria-expanded={isHeaderNavOnLtMdOpen}
    >
      <span
        className={cx(
          "h-[10%] w-full scale-y-50 bg-black",
          "transition-transform duration-500",
          isHeaderNavOnLtMdOpen && "delay-75",
          "origin-center",
          "group-aria-[expanded=true]:w-[120%] group-aria-[expanded=true]:translate-y-[250%] group-aria-[expanded=true]:-rotate-45 group-aria-[expanded=true]:scale-x-110",
        )}
      />
      <span
        className={cx(
          "h-[10%] w-full scale-y-50 bg-black",
          "transition-opacity duration-300",
          isHeaderNavOnLtMdOpen && "delay-75",
          "group-aria-[expanded=true]:opacity-0",
        )}
      />
      <span
        className={cx(
          "h-[10%] w-full scale-y-50 bg-black",
          "transition-transform duration-500",
          isHeaderNavOnLtMdOpen && "delay-75",
          "origin-center",
          "group-aria-[expanded=true]:w-[120%] group-aria-[expanded=true]:-translate-y-[250%] group-aria-[expanded=true]:rotate-45 group-aria-[expanded=true]:scale-x-110",
        )}
      />
    </button>
  );
};

function MainHeaderWrapper(props: PropsWithChildren) {
  const isHeaderNavOnLtMdOpen = useStore(
    globalStore,
    (store) => store.menus.headerNavOnLtLg.isOpen,
  );

  return (
    <header
      id="main-header"
      className={cx(
        "h-main-header-h isolate flex flex-col backdrop-blur-[1px] transition-all duration-300",
        "-mb-main-header-h",
        isHeaderNavOnLtMdOpen ? "sticky top-0 z-[11]" : "relative z-[11]",
      )}
      style={{
        backgroundImage: isHeaderNavOnLtMdOpen
          ? undefined
          : "linear-gradient(to bottom, rgba(var(--color-special-primary-500) / 0.15), rgba(var(--color-special-primary-500) / 0.1)",
      }}
    >
      {props.children}
    </header>
  );
}

export default function MainHeader() {
  return (
    <MainHeaderWrapper>
      <div
        className={cx(
          "max-w-main mx-auto flex h-full w-full items-center justify-between text-white",
          "px-8 sm:px-16 xl:px-32",
        )}
      >
        <NavElementsOnGtLgScreens />
      </div>
    </MainHeaderWrapper>
  );
}
