import { cx } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";

import { PiFacebookLogo, PiInstagramLogo, PiTiktokLogo } from "react-icons/pi";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import MagnifierGlassSvg from "~/svgs/magnifier-glass.svg";
import HeartSvg from "~/svgs/heart.svg";
import ShoppingCartSvg from "~/svgs/shopping-cart.svg";
import { Fragment } from "react";

const mainAppHeaderLinks = [
  { name: "Collections", href: "/collections" },
  { name: "our story", href: "/our-story" },
  { name: "FAQs", href: "/faqs" },
  { name: "contact", href: "/contact" },
];

const mainSocialHeaderLinks = [
  { name: "facebook", href: "https://facebook.com/", Icon: PiFacebookLogo },
  {
    name: "instagram",
    href: "https://instagram.com/",
    Icon: PiInstagramLogo,
  },
  { name: "tikTok", href: "https://tiktok.com/", Icon: PiTiktokLogo },
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

      <div className="flex items-center gap-4 text-gray-800 lg:gap-8">
        <ul className="flex gap-4 lg:gap-8">
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
  const mainWrapper =
    typeof window === "undefined"
      ? null
      : document.querySelector(".main-wrapper");

  return (
    <DropdownMenu.Root>
      {/* <button
          className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
          aria-label="Customise options"
        >
          <HamburgerMenuIcon />
        </button> */}
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          className="group flex h-4 w-4 flex-col justify-center gap-[15%] lg:hidden"
        >
          <span
            className={cx(
              "h-[10%] w-full scale-y-50 bg-black",
              "transition-transform duration-500",
              "origin-center",
              "group-aria-[expanded=true]:w-[120%] group-aria-[expanded=true]:translate-y-[250%] group-aria-[expanded=true]:-rotate-45 group-aria-[expanded=true]:scale-x-110"
            )}
          />
          <span
            className={cx(
              "h-[10%] w-full scale-y-50 bg-black",
              "transition-opacity duration-300",
              "group-aria-[expanded=true]:opacity-0"
            )}
          />
          <span
            className={cx(
              "h-[10%] w-full scale-y-50 bg-black",
              "transition-transform duration-500",
              "origin-center",
              "group-aria-[expanded=true]:w-[120%] group-aria-[expanded=true]:-translate-y-[250%] group-aria-[expanded=true]:rotate-45 group-aria-[expanded=true]:scale-x-110"
            )}
          />
        </button>
      </DropdownMenu.Trigger>

      {mainWrapper && (
        <DropdownMenu.Portal container={mainWrapper}>
          <DropdownMenu.Content
            className="data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade relative me-1 min-w-[7rem] rounded-md bg-white p-[5px] py-3 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform]"
            sideOffset={5}
            // alignOffset={15}
          >
            {mainAppHeaderLinks.map((item, itemIndex, itemsArr) => (
              <Fragment key={item.name}>
                <DropdownMenu.Item className="text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-6 select-none items-center rounded-sm px-3 text-sm leading-none outline-none data-[disabled]:pointer-events-none">
                  <Link
                    href={item.href}
                    className="explore whitespace-nowrap capitalize"
                  >
                    {item.name}
                  </Link>
                </DropdownMenu.Item>
                {itemIndex !== itemsArr.length - 1 && (
                  <DropdownMenu.Separator className="bg-violet6 m-1" />
                )}
              </Fragment>
            ))}

            <DropdownMenu.Arrow className="fill-white" />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      )}
    </DropdownMenu.Root>
  );
};

export default function MainHeader() {
  return (
    // left-0 right-0 top-0 isolate
    <header
      id="main-header"
      className={cx(
        "relative isolate flex h-main-header-h flex-col backdrop-blur-[1px] transition-all duration-300",
        "-mb-main-header-h",
        "z-[1]"
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
