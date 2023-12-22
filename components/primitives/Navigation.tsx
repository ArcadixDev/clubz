"use client";

import logo from "@/public/logo.png";
import { PlusIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { auth } from "@/app/auth";
import { Filters, ProfileSection } from "./actions";

import club_image from "../../public/assets/club3.jpg";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getUserRole } from "@/lib/db/user";
import { useEffect, useState } from "react";
import { Session } from "next-auth";

const Location = () => {
  const [location, setLocation] = useState<
    Record<"latitude" | "longitude", string | number>
  >({
    latitude: "",
    longitude: "",
  });
  console.log("location => ", location);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Request location permission if not already granted
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        },
        {
          enableHighAccuracy: true, // Optional for more accurate results
          timeout: 5000, // Timeout after 5 seconds
          maximumAge: 0, // Use the most recent position
        },
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    console.log("location => ", location);
  }, [location]);

  // Function to handle button click
  const handleGetLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });

    console.log("values => ", location);
  };

  return (
    <Button variant={"ghost"} type="button" onClick={() => handleGetLocation()}>
      <MdLocationOn className={`h-full w-5 text-secondary-foreground`} />
    </Button>
  );
};

const Navigation = ({
  session,
  role,
}: {
  session: Session | null;
  role: "user" | "club";
}) => {
  const isLoggedIn = !!(session && session.user);

  //   const [isLoggedIn, role] = [!!session?.user, session?.user.role];
  //   const session = {
  //     user: {
  //       id: 123,
  //     },
  //   };

  //   if (session && session.user) {
  //     console.log("session from navigation -> ", session);
  //   }
  //   const role = "clubAdmin";

  console.log("role => ", role, isLoggedIn);

  if (role === "club") {
    return (
      <div className="relative h-fit bg-transparent/30">
        <div className="h-20"></div>
        <div className="absolute top-0 h-full w-full px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="logo..."
                className="h-12 w-auto rounded-md"
              />
            </Link>
            <div className="flex items-center justify-center space-x-5 place-self-center justify-self-end">
              <Link className="p-3" href={"/search"}>
                About Us
              </Link>
              <Link className="p-3" href={"/search"}>
                Community
              </Link>
              <Link className="p-3" href={"/search"}>
                Contact Us
              </Link>
              <Link className="p-3" href={"/search"}>
                Add Event
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger>{"Manage Clubs"}</DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 rounded-lg">
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="px-3 py-2">
                      Club 1
                    </DropdownMenuItem>
                    <DropdownMenuItem className="px-3 py-2">
                      Club 2
                    </DropdownMenuItem>
                    <DropdownMenuItem className="px-3 py-2">
                      <Link
                        className="mx-auto rounded-lg border border-white px-3 py-2"
                        href={""}
                      >
                        + Add Club
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link
              href={""}
              className="flex items-center gap-x-2 rounded-lg border border-white px-3 py-2"
            >
              <Image className="h-6 w-6" alt="club Images" src={club_image} />
              <span>Club Name</span>
            </Link>

            <div>
              <ProfileSection user={session?.user!} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative h-fit bg-transparent/30">
        <div className="h-20"></div>
        <div className="absolute top-0 h-full w-full px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="logo..."
                className="h-12 w-auto rounded-md"
              />
            </Link>
            <div className="flex items-center justify-center space-x-5 place-self-center justify-self-end">
              {!isLoggedIn && (
                <Link
                  href={"/clubs/signup"}
                  className="flex items-center space-x-1"
                >
                  <Button
                    variant={"link"}
                    className="flex items-center space-x-1"
                  >
                    <PlusIcon className="h-5 w-5 font-bold text-foreground" />
                    <span>Add Club</span>
                  </Button>
                </Link>
              )}
              <Link className="p-3" href={"/search"}>
                Search
              </Link>
              <Filters />
              <div className="flex flex-grow items-center justify-center">
                <div className="flex h-full w-full flex-grow items-center space-x-2">
                  <Location />
                  <Input
                    placeholder="Search Location"
                    className="w-full rounded-none border-transparent px-px focus:outline-none focus-visible:border-b-foreground focus-visible:ring-0"
                  />
                </div>
              </div>
              {!isLoggedIn && (
                <Link href={"/login"} className="shadow-custom">
                  <Button variant={"ghost"} className="rounded-lg">
                    login
                  </Button>
                </Link>
              )}
              {isLoggedIn && (
                <div>
                  <ProfileSection user={session?.user!} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  //   if (role === "user") {
  //     return (
  //       <div className="relative h-fit bg-transparent/30">
  //         <div className="h-20"></div>
  //         <div className="absolute top-0 h-full w-full px-8 py-4">
  //           <div className="flex items-center justify-between">
  //             <Link href={"/"}>
  //               <Image
  //                 src={logo}
  //                 alt="logo..."
  //                 className="h-12 w-auto rounded-md"
  //               />
  //             </Link>
  //             <div className="flex items-center justify-center space-x-5 place-self-center justify-self-end">
  //               {!isLoggedIn && (
  //                 <Link
  //                   href={"/clubs/signup"}
  //                   className="flex items-center space-x-1"
  //                 >
  //                   <Button
  //                     variant={"link"}
  //                     className="flex items-center space-x-1"
  //                   >
  //                     <PlusIcon className="h-5 w-5 font-bold text-foreground" />
  //                     <span>Add Club</span>
  //                   </Button>
  //                 </Link>
  //               )}
  //               <Link className="p-3" href={"/search"}>
  //                 Search
  //               </Link>
  //               <Filters />
  //               <div className="flex flex-grow items-center justify-center">
  //                 <div className="flex h-full w-full flex-grow items-center space-x-2">
  //                   <MdLocationOn
  //                     className={`h-full w-5 text-secondary-foreground`}
  //                   />
  //                   <Input
  //                     placeholder="Search Location"
  //                     className="w-full rounded-none border-transparent px-px focus:outline-none focus-visible:border-b-foreground focus-visible:ring-0"
  //                   />
  //                 </div>
  //               </div>
  //               {!isLoggedIn && (
  //                 <Link href={"/login"} className="shadow-custom">
  //                   <Button variant={"ghost"} className="rounded-lg">
  //                     login
  //                   </Button>
  //                 </Link>
  //               )}
  //               {isLoggedIn && (
  //                 <div>
  //                   <ProfileSection user={session?.user!} />
  //                 </div>
  //               )}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   } else if (role === "club") {
  //     return (
  //       <div className="relative h-fit bg-transparent/30">
  //         <div className="h-20"></div>
  //         <div className="absolute top-0 h-full w-full px-8 py-4">
  //           <div className="flex items-center justify-between">
  //             <Link href={"/"}>
  //               <Image
  //                 src={logo}
  //                 alt="logo..."
  //                 className="h-12 w-auto rounded-md"
  //               />
  //             </Link>
  //             <div className="flex items-center justify-center space-x-5 place-self-center justify-self-end">
  //               <Link className="p-3" href={"/search"}>
  //                 About Us
  //               </Link>
  //               <Link className="p-3" href={"/search"}>
  //                 Community
  //               </Link>
  //               <Link className="p-3" href={"/search"}>
  //                 Contact Us
  //               </Link>
  //               <Link className="p-3" href={"/search"}>
  //                 Add Event
  //               </Link>
  //               <DropdownMenu>
  //                 <DropdownMenuTrigger>{"Manage Clubs"}</DropdownMenuTrigger>
  //                 <DropdownMenuContent className="w-56 rounded-lg">
  //                   <DropdownMenuGroup>
  //                     <DropdownMenuItem className="px-3 py-2">
  //                       Club 1
  //                     </DropdownMenuItem>
  //                     <DropdownMenuItem className="px-3 py-2">
  //                       Club 2
  //                     </DropdownMenuItem>
  //                     <DropdownMenuItem className="px-3 py-2">
  //                       <Link
  //                         className="mx-auto rounded-lg border border-white px-3 py-2"
  //                         href={""}
  //                       >
  //                         + Add Club
  //                       </Link>
  //                     </DropdownMenuItem>
  //                   </DropdownMenuGroup>
  //                 </DropdownMenuContent>
  //               </DropdownMenu>
  //             </div>
  //             <Link
  //               href={""}
  //               className="flex items-center gap-x-2 rounded-lg border border-white px-3 py-2"
  //             >
  //               <Image className="h-6 w-6" alt="club Images" src={club_image} />
  //               <span>Club Name</span>
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }
};

export default Navigation;
