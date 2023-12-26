import cover from "../../../../public/assets/club3.jpg";
import profile from "../../../../public/assets/club1.jpg";
import Image from "next/image";
import EditForm from "./edit-form";
import { Metadata } from "next";

export const editClubPageMetadata: Metadata = {
  metadataBase: new URL("https://clubz.tech/admin"),
  title: {
    default: "Clubz Admin - Edit Club",
    template: "%s | Clubz Admin - Edit Club",
  },
  description:
    "Edit club details and settings in the Clubz Admin. Manage club information and events effortlessly.",
  openGraph: {
    title: "Clubz Admin - Edit Club",
    description:
      "Administer club details and settings in Clubz. Manage club information and events effortlessly.",
    url: "https://clubz.tech/admin/edit-club",
    siteName: "Clubz Admin",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://clubz.tech/admin/edit-club-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clubz Admin Edit Club",
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
    title: "Clubz Admin - Edit Club",
    description:
      "Administer club details and settings in Clubz. Manage club information and events effortlessly.",
    images: [
      {
        url: "https://clubz.tech/admin/edit-club-twitter-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clubz Admin Edit Club",
      },
    ],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function editClub() {
  return (
    <div className="relative mx-10">
      <div className="h-56 overflow-hidden">
        <Image src={cover} alt="Cover Image" />
      </div>
      
      <Image
        className="absolute top-36 left-5 z-50 w-36 h-36 rounded-full"
        src={profile}
        alt="Profile Picture"
      />
      <span className="absolute top-48 left-44 z-50 text-xl font-bold">
        Club Owner Name
      </span>

      <span className="absolute top-56 left-44 text-xl font-bold underline">
        Club Name
      </span>

      <div className="w-full bg-muted min-h-screen pt-24 pb-20 px-10">
        <h1 className="text-2xl font-bold">Edit Club Details</h1>
        <EditForm />
      </div>
    </div>
  );
}
