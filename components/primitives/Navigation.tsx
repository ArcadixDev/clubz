"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { Logo } from "../icons";
import logo from "@/public/logo.png";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Icons } from "../icons/home";
import { MdLocationOn } from "react-icons/md";

const Navigation = () => {
  const { data: session, status } = useSession();

  if (session) {
    console.log("session from navigation -> ", session);
  }

  return (
    <div className="bg-gradient-to-tr from-secondary to-background px-8 py-4 shadow-custom">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <Image src={logo} alt="logo..." className="h-12 w-auto rounded-md" />
        </Link>
        <div className="space-x-5">
          {/* <Link className="p-3" href={'/'}>
						Home
					</Link>
					<Link className="p-3" href={'/signup'}>
						signUp
					</Link>
					<Link className="p-3" href={'/login'}>
						Login
					</Link>
					<button onClick={() => signOut()}>Sign Out</button> */}
          <Link className="p-3" href={"/"}>
            About
          </Link>
          <Link className="p-3" href={"/signup"}>
            Contact
          </Link>
          <Link className="p-3" href={"/login"}>
            Community
          </Link>
        </div>
        <div className="space-x- flex items-center justify-center place-self-center justify-self-end">
          <div className="flex flex-grow items-center justify-center">
            <div className="relative h-full w-full flex-grow">
              <Input
                placeholder="Search Location"
                className="w-full rounded-full pl-10"
              />
              <MdLocationOn
                className={`absolute inset-y-0 ml-3 h-full w-5 text-secondary-foreground`}
              />
            </div>
            <Button variant={"ghost"}>Filter</Button>
          </div>
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
