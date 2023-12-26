import { ProfileForm } from "./profile-form";
import { auth } from "@/app/auth";
import { Separator } from "@/components/ui/separator";
import prisma from "@/lib/prisma";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const profilePageMetadata: Metadata = {
  metadataBase: new URL("https://clubz.tech"),
  title: {
    default: "Clubz - Your Profile",
    template: "%s | Clubz - Your Profile",
  },
  description:
    "Manage your Clubz profile. Update your information, preferences, and view your activity.",
  openGraph: {
    title: "Clubz - Your Profile",
    description:
      "Manage your Clubz profile. Update your information, preferences, and view your activity.",
    url: "https://clubz.tech/profile",
    siteName: "Clubz",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://clubz.tech/profile-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clubz Profile",
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
    title: "Clubz - Your Profile",
    description:
      "Manage your Clubz profile. Update your information, preferences, and view your activity.",
    images: [
      {
        url: "https://clubz.tech/profile-twitter-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clubz Profile",
      },
    ],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};


const page = async () => {
  const session = await auth();
  if(!session){
    redirect("/login");
    console.log("Session not found")
  }
  if (session && session.user) {
    console.log("session from profilepage -> ", session);
    console.log("Session found")
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
  // console.log("data -> ", typeof(data));
  return (
    <div className="space-y-6">
      {/* <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div> */}
      <Separator />
      <ProfileForm data={data!} />
    </div>
  );
};

export default page;
