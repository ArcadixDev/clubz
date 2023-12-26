import React from 'react'
import cover from "../../../../public/assets/club3.jpg";
import profileImg from "../../../../public/assets/club1.jpg";
import Image from "next/image";
import EditForm from './edit-form';
import { Metadata } from 'next';

export const profilePageMetadata: Metadata = {
  metadataBase: new URL("https://clubz.tech/admin"),
  title: {
    default: "Clubz Admin - Profile",
    template: "%s | Clubz Admin - Profile",
  },
  description:
    "View and manage your profile in the Clubz Admin. Update account details and preferences.",
  openGraph: {
    title: "Clubz Admin - Profile",
    description:
      "Administer your profile in Clubz. Update account details and preferences effortlessly.",
    url: "https://clubz.tech/admin/profile",
    siteName: "Clubz Admin",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://clubz.tech/admin/profile-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clubz Admin Profile",
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
    site: "@ClubzAdmin",
    title: "Clubz Admin - Profile",
    description:
      "Administer your profile in Clubz. Update account details and preferences effortlessly.",
    images: [
      {
        url: "https://clubz.tech/admin/profile-twitter-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clubz Admin Profile",
      },
    ],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function profile() {
  return (
    <div className="relative mx-24">
      <div className="h-56 overflow-hidden">
        <Image src={cover} alt="Cover Image" />
      </div>
      
      <div className="w-full bg-muted min-h-min py-20 px-10">
        
        <EditForm/>
      </div>
    </div>
  )
}
