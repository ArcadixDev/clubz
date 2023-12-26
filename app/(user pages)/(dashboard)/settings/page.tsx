import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import React from "react";
import { Metadata } from "next";

export const settingsPageMetadata: Metadata = {
  metadataBase: new URL("https://clubz.tech"),
  title: {
    default: "Clubz - Settings",
    template: "%s | Clubz - Settings",
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

const generalOptions = [
  {
    id: 1,
    label: "Account",
    href: "/myprofile",
  },
  {
    id: 2,
    label: "Notification",
    href: "/notification",
  },
  {
    id: 3,
    label: "Language",
    href: "/language",
  },
  {
    id: 4,
    label: "Privacy",
    href: "/privacy",
  },
  {
    id: 5,
    label: "Help",
    href: "/help",
  },
  {
    id: 6,
    label: "Delete My Account",
    href: "/delete-account",
  },
];

const feedbackOptions = [
  {
    id: 1,
    label: "Report a Bug",
    href: "/report-bug",
  },
  {
    id: 2,
    label: "Send Feedback",
    href: "/feedback",
  },
];

const SettingsPage = () => {
  return (
    <main className="w-full p-10 text-white">
      <div className="mx-auto">
        <section className="mb-8">
          <h1 className="mb-4 text-3xl font-bold">General Settings</h1>
          <div className="w-full space-y-4">
            {generalOptions.map((option) => (
              <Link
                href={option.href}
                key={option.id}
                className="flex items-center justify-between rounded-lg bg-zinc-800 p-3 transition duration-300 ease-in-out hover:bg-zinc-900"
              >
                {option.label}
                <IoIosArrowForward />
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h1 className="mb-4 text-3xl font-bold">Feedback</h1>
          <div className="space-y-4">
            {feedbackOptions.map((option) => (
              <Link
                href={option.href}
                key={option.id}
                className="flex items-center justify-between rounded-lg bg-zinc-800 p-3 transition duration-300 ease-in-out hover:bg-zinc-900"
              >
                {option.label}
                <IoIosArrowForward />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default SettingsPage;
