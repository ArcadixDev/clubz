import { Metadata } from "next";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { ProfileSidebarNav } from "@/components/primitives/ProfileSideBar";

import profilePic from "../../public/assets/sideBg.jpg";
import profilePic2 from "../../public/assets/section1Image0.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "@/app/auth";
import prisma from "@/lib/prisma";

import { FaRegUserCircle } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/profile/",
    icon: <FaRegUserCircle/>
  },
  {
    title: "My Bookings",
    href: "/bookings",
    icon: <FaRegCalendarCheck/>
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default async function ProfileLayout({ children }: SettingsLayoutProps) {
  const session = await auth();

  if (session && session.user) {
    console.log("session from profilepage -> ", session);
  }

  async function getUserData(){
    // console.log("getUserData Called")
    const data = await prisma.user.findUnique({
      where: {
        id: session?.user?.id,
      },
    });
    return data;
  }

  const data = await getUserData();
  // console.log("data -> ", data);
  return (
    <>
      <div className="relative mx-10 mt-10 h-32 rounded-t-2xl">
        <Image
          src={profilePic}
          alt="profilePic"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute -bottom-1/2 left-10 h-32 w-32 overflow-hidden rounded-full bg-gray-100">
          {
            data!.image ? (
              <Image
            src={data!.image}
            alt="profilePic"
            layout="fill"
            objectFit="cover"
            className="z-50"
          />
            ) : (
              <Image
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${data!.name}&background=%230000ff&color=%23ffffff&bold=true`}
            alt="profilePic"
            layout="fill"
            objectFit="cover"
            className="z-50"
          />
            )
          }
        </div>
      </div>
      <div className="flex-grow">
        <div className="space-y-6 px-6 md:px-10">
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-6 lg:space-y-0">
            <aside className="relative pt-20 lg:w-1/5">
              <h1 className="ml-4 text-3xl">Hi! {data!.name}</h1>
              <Image
                src={profilePic}
                alt="profilePic"
                layout="fill"
                objectFit="cover"
                className="-z-10 "
              />
              <Separator className="z-50 my-5" />
              <ProfileSidebarNav items={sidebarNavItems} className="z-50" />
            </aside>
            {/* class - lg:max-w-2xl was removed to make child full width */}
            <div className="flex-1 ">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
