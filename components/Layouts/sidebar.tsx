import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaUser } from "react-icons/fa6";
import { HiMiniTicket } from "react-icons/hi2";
import { BiSolidOffer } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";

type Props = {};

const options = [
  {
    id: 1,
    label: "My Profile",
    icon: <FaUser />,
    path: "/myprofile",
  },
  {
    id: 2,
    label: "My Bookings",
    icon: <HiMiniTicket />,
    path: "/mybookings",
  },
  {
    id: 3,
    label: "Discounts & Offers",
    icon: <BiSolidOffer />,
    path: "/offers",
  },
  {
    id: 4,
    label: "Settings",
    icon: <IoSettingsSharp />,
    path: "/settings",
  },
];

const Sidebar = (props: Props) => {
     const pathName = usePathname();
  return (
    <main className="flex w-full flex-col items-center gap-5 py-10">
      <Avatar className="h-32 w-32">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <section className="w-full p-2 text-center">
        <h1 className="text-3xl font-bold">Hi, Guest!</h1>
        <div className="mt-5 space-y-1">
          {options.map((item) => (
            <Link
              href={item.path}
              key={item.id}
              className={cn(
                "group flex flex-row gap-2 items-center w-full cursor-pointer justify-start rounded-lg p-3 font-medium transition hover:bg-white/10 hover:text-white",
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
