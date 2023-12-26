import {
  IoIosArrowRoundBack,
  IoIosNotificationsOutline,
  IoIosArrowRoundDown,
} from "react-icons/io";
import { Checkbox } from "@/components/ui/checkbox";

import Link from "next/link";
import { Metadata } from "next";

export const notificationPageMetadata: Metadata = {
  metadataBase: new URL("https://clubz.tech/admin"),
  title: {
    default: "Clubz Admin - Notifications",
    template: "%s | Clubz Admin - Notifications",
  },
  description:
    "Manage notifications in the Clubz Admin. Stay informed about important updates and events.",
  openGraph: {
    title: "Clubz Admin - Notifications",
    description:
      "Administer notifications in Clubz. Stay informed about important updates and events.",
    url: "https://clubz.tech/admin/notifications",
    siteName: "Clubz Admin",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://clubz.tech/admin/notifications-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clubz Admin Notifications",
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
    title: "Clubz Admin - Notifications",
    description:
      "Administer notifications in Clubz. Stay informed about important updates and events.",
    images: [
      {
        url: "https://clubz.tech/admin/notifications-twitter-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clubz Admin Notifications",
      },
    ],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};


export default function notifications() {
  return (
    <div className="mx-24 mt-16 flex flex-col">
      <Link href={""} className="flex items-center gap-x-3 text-2xl">
        {" "}
        <IoIosArrowRoundBack /> Notifications <IoIosNotificationsOutline />{" "}
      </Link>
      <span className="ml-auto flex items-center gap-x-3 text-xl">
        Recent <IoIosArrowRoundDown className="h-6 w-6" />
      </span>
      <hr className="my-5" />

      <div className="flex gap-y-5 min-h-min flex-col rounded-lg bg-muted bg-opacity-40 p-10">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
            exercitationem!
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
            exercitationem!
          </label>
        </div>
      </div>

      <div className="flex gap-y-5 min-h-min flex-col rounded-lg bg-muted bg-opacity-40 p-10 mt-10">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
            exercitationem!
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
            exercitationem!
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
            exercitationem!
          </label>
        </div>
      </div>
    </div>
  );
}
