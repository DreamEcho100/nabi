// import { localFont } from 'next/font/google';
// import { WorkSans } from "next/font/google";
import localFont from "next/font/local";

export const WorkSansFont = localFont({
  src: [
    {
      path: "./Work Sans/static/WorkSans-Black.ttf",
      weight: "900",
      style: "black",
    },
    {
      path: "./Work Sans/static/WorkSans-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./Work Sans/static/WorkSans-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./Work Sans/static/WorkSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./Work Sans/static/WorkSans-ExtraBold.ttf",
      weight: "800",
      style: "extra-bold",
    },
    {
      path: "./Work Sans/static/WorkSans-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./Work Sans/static/WorkSans-ExtraLight.ttf",
      weight: "200",
      style: "extra-light",
    },
    {
      path: "./Work Sans/static/WorkSans-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./Work Sans/static/WorkSans-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "./Work Sans/static/WorkSans-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./Work Sans/static/WorkSans-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./Work Sans/static/WorkSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./Work Sans/static/WorkSans-Regular.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "./Work Sans/static/WorkSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Work Sans/static/WorkSans-SemiBold.ttf",
      weight: "600",
      style: "semi-bold",
    },
    {
      path: "./Work Sans/static/WorkSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./Work Sans/static/WorkSans-Thin.ttf",
      weight: "100",
      style: "thin",
    },
    {
      path: "./Work Sans/static/WorkSans-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-work-sans",
  fallback: ["sans-serif"],
  display: "swap",
});

export const AnticDidoneFont = localFont({
  src: [
    {
      path: "./Antic Didone/AnticDidone-Regular.ttf",
      weight: "400",
      style: "regular",
    },
  ],
  variable: "--font-antic-didone",
  fallback: ["sans-serif"],
  display: "swap",
});

export const fontsClasses = `${WorkSansFont.variable} ${AnticDidoneFont.variable}  font-sans`;
