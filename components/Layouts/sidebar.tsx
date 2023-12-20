"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaUser } from "react-icons/fa6";
import { HiMiniTicket } from "react-icons/hi2";
import { BiSolidOffer } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { auth } from "@/app/auth";
import { useSession } from "next-auth/react";

type Props = {};

const options = [
  {
    id: 1,
    label: "My Profile",
    icon: <FaUser />,
    path: "/profile",
  },
  {
    id: 2,
    label: "My Bookings",
    icon: <HiMiniTicket />,
    path: "/bookings",
  },
  //   {
  //     id: 3,
  //     label: "Discounts & Offers",
  //     icon: <BiSolidOffer />,
  //     path: "/offers",
  //   },
  {
    id: 4,
    label: "Settings",
    icon: <IoSettingsSharp />,
    path: "/settings",
  },
];

const Sidebar = (props: Props) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  return (
    <main className="flex w-full flex-col items-center gap-5 pb-10">
      <Avatar className=" h-32 w-32 -translate-y-1/2 transform">
        <AvatarImage
          src={
            session && session.user
              ? (session?.user?.image as string | undefined)
              : "https://github.com/k8pai.png"
          }
          alt="@shadcn"
        />
        <AvatarFallback>
          {session?.user.name?.substring(0, 2) || session?.user.name}
        </AvatarFallback>
      </Avatar>
      <section className="w-full p-2 text-center">
        <div className="mt-5 space-y-1">
          {options.map((item) => (
            <Link
              href={item.path}
              key={item.id}
              className={cn(
                "group flex w-full cursor-pointer flex-row items-center justify-start gap-2 rounded-lg p-3 font-medium transition hover:bg-white/10 hover:text-white",
                pathName === item.path
                  ? "bg-white/20 text-white"
                  : "text-zinc-400",
              )}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Sidebar;
