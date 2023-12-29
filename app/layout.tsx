import Footer from "@/components/primitives/Footer";
import Navigation from "@/components/primitives/Navigation";
import { AuthProvider, ThemeProvider } from "@/components/primitives/Provider";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { auth } from "./auth";
import { getUserRole } from "@/lib/db/user";

import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon-2x.png";

import { RecoilRoot } from "recoil";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Clubz",
  description: "Clubz is a platform for booking clubs and events.",
};

// to be typed as RootLayoutProps
export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  //   const isLoggedIn = !!(session && session.user);

  const role = await getUserRole(session?.user.email!);
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <AuthProvider>
          <body className={montserrat.className}>
            <ThemeProvider attribute="class" defaultTheme="dark">
              <main className="relative flex h-full min-h-screen w-full flex-col">
                <Navigation session={session} role={role!} />
                {children}
                <Footer />
              </main>
            </ThemeProvider>
            <Toaster />
          </body>
        </AuthProvider>
      </html>
    </>
  );
}
