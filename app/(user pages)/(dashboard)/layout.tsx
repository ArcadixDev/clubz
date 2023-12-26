import Sidebar from "@/components/Layouts/sidebar";
import prisma from "@/lib/prisma";
import React from "react";
import { auth } from "@/app/auth";
import ProfileCover from "@/public/assets/profileCover.png";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const settingsPageMetadata: Metadata = {
  metadataBase: new URL("https://clubz.tech"),
  title: {
    default: "Clubz - Dashboard",
    template: "%s | Clubz - Dashboard",
  },
  description:
    "Customize your Clubz experience with personalized settings. Manage notifications, preferences, and account details.",
  openGraph: {
    title: "Clubz - Settings",
    description:
      "Adjust your Clubz settings to tailor your nightlife experience. Manage preferences and account details effortlessly.",
    url: "https://clubz.tech/settings",
    siteName: "Clubz",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://clubz.tech/settings-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clubz Settings",
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
    title: "Clubz - Settings",
    description:
      "Customize your Clubz experience with personalized settings. Manage notifications, preferences, and account details.",
    images: [
      {
        url: "https://clubz.tech/settings-twitter-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clubz Settings",
      },
    ],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};


const Dashboardlayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  async function getUserData() {
    // console.log("getUserData Called")
    const data = await prisma.user.findUnique({
      where: {
        email: session?.user?.email!,
      },
    });
    return data;
  }

  const data = await getUserData();

  return (
    <main className="container relative mx-auto my-10 flex min-h-screen flex-grow flex-col overflow-hidden rounded-xl">
      <div className="h-56 w-full overflow-hidden rounded-t-2xl">
        <Image
          src={ProfileCover}
          alt={"Profile Cover"}
          className={"h-full w-full scale-105"}
        />
      </div>
      <div className="relative flex flex-grow rounded-b-2xl">
        {/* Sidebar Component */}
        <section className="hidden w-1/5 bg-sidebarBg bg-cover bg-no-repeat md:flex">
          <Sidebar />
        </section>
        {/* Main Screen */}
        <section className="overflow ml-5 flex-1 overflow-x-hidden rounded-b-2xl bg-zinc-800/30 p-6">
          <div className="relative flex flex-col sm:flex-row">
            <div className="w-full">{children}</div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Dashboardlayout;
