import Footer from "@/components/primitives/Footer";
import Navigation from "@/components/primitives/Navigation";
import { AuthProvider, ThemeProvider } from "@/components/primitives/Provider";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { auth } from "./auth";
import { getUserRole } from "@/lib/db/user";

export const metadata: Metadata = {
  metadataBase: new URL("https://clubz.tech"),
  title: {
    default: "Clubz - Your Ultimate Nightlife Companion",
    template: "%s | Clubz - Nightlife Experiences",
  },
  description:
    "Discover, book, and experience the best of the nightlife with Clubz. Get digital passes for exclusive clubs, reserve tables hassle-free, and stay updated on the hottest events in your city.",
  openGraph: {
    title: "Clubz - Your Ultimate Nightlife Companion",
    description:
      "Explore the vibrant nightlife scene with Clubz – your go-to app for seamless club passes and table bookings.",
    url: "https://clubz.tech",
    siteName: "Clubz",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://clubz.tech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clubz Nightlife Experiences",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@Clubz",
    title: "Clubz - Your Ultimate Nightlife Companion",
    description:
      "Your go-to app for seamless club passes, table bookings, and the hottest nightlife events.",
    images: [
      {
        url: "https://clubz.tech/twitter-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clubz Nightlife Experiences",
      },
    ],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

// to be typed as RootLayoutProps
export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  //   const isLoggedIn = !!(session && session.user);

  const role = await getUserRole(session?.user?.email!);
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <AuthProvider>
          <body>
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
