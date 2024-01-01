"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { ReactNode, useEffect, useState } from "react";
import { SessionProvider, SessionProviderProps } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";

import { useRouter } from "next/navigation";



export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	return (
    <>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </>
  );
}

export function AuthProvider({ children, ...props }: SessionProviderProps) {
  return (
    <RecoilRoot>
      <SessionProvider {...props}>{children}</SessionProvider>
    </RecoilRoot>
  );
}
