"use client";

import type { PropsWithChildren } from "react";

import { ThemeProvider } from "next-themes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import TRPCProvider from "./trpc";
import { ToastContainer } from "react-toastify";
import UseCheckAccessToken from "./use-check-access-token";
import { TRPCReactProvider } from "~/libs/trpc/react";

export default function BaseProviders(
  props: PropsWithChildren<{ cookies: string }>,
) {
  return (
    <TRPCReactProvider cookies={props.cookies}>
      <ToastContainer
        position="top-left"
        autoClose={7500}
        newestOnTop={true}
        closeButton
        closeOnClick={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        storageKey="nabi-theme"
      >
        <UseCheckAccessToken />
        {props.children}
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </TRPCReactProvider>
  );
}
