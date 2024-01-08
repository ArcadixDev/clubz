"use client";

// import logo from "@/public/logo.png";
import { PlusIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { auth } from "@/app/auth";
import { Filters, ProfileSection, AdminProfileSection } from "./actions";

import { GoChevronDown } from "react-icons/go";
import { IoAdd } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";
import { FaFilter } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

import club_image from "../../public/assets/club3.jpg";
import logo from "../../public/assets/logo.png";
import logo_text from "../../public/assets/logo_text.png";

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
import { atom, useRecoilState } from "recoil";
import { locationState } from "@/atoms/location";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";

const Location = () => {
  // const [location, setLocation] = useState<
  //   Record<"latitude" | "longitude", string | number>
  // >({
  //   latitude: "",
  //   longitude: "",
  // });
  // console.log("location => ", location);
  const [error, setError] = useState<string | null>(null);

  // const locationState = atom({
  //   key: "locationState",
  //   default: { latitude: 0, longitude: 0 },
  // });

  const [locationAtom, setLocationAtom] = useRecoilState(locationState);
  console.log("locationAtom => ", locationAtom);

  useEffect(() => {
    // Request location permission if not already granted
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // setLocation({
          //   latitude: position.coords.latitude,
          //   longitude: position.coords.longitude,
          // });
          setLocationAtom({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },

        (error) => {
          setError(error.message);
        },
        {
          // enableHighAccuracy: true, // Optional for more accurate results
          timeout: 5000, // Timeout after 5 seconds
          maximumAge: 0, // Use the most recent position
        },
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  // useEffect(() => {
  //   console.log("location => ", location);
  // }, [location]);

  // Function to handle button click
  const handleGetLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocationAtom({
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

  console.log("role => ", role, isLoggedIn);
  console.log("session from Nav => ", session);

  if (role === "club") {
    return (
      <>
        <div className="relative z-50 hidden h-fit bg-black bg-opacity-80 md:block">
          <div className="h-20"></div>
          <div className="absolute top-0 h-full w-full px-8 py-4">
            <div className="flex items-center justify-between">
              <Link className="flex items-center gap-x-1" href={"/"}>
                <Image src={logo} alt="logo..." className="h-8 w-auto" />
                <Image src={logo_text} alt="logo..." className="h-5 w-auto" />
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
                  <DropdownMenuTrigger className="flex items-center gap-x-2">
                    {"Manage Clubs"}
                    <GoChevronDown />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 rounded-lg">
                    <DropdownMenuGroup>
                      <DropdownMenuItem className="px-3 py-2">
                        Club 1
                      </DropdownMenuItem>
                      <DropdownMenuItem className="px-3 py-2">
                        Club 2
                      </DropdownMenuItem>
                      <DropdownMenuItem className="px-3 py-2">
                        <Link className="flex items-center gap-x-3" href={""}>
                          {"Add Club"}
                          <IoAdd />
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex items-center gap-x-3">
                <AdminProfileSection user={session?.user!} />
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Nav */}

        <div className="flex w-screen justify-between p-4 md:hidden">
          <div className="flex items-center">
            <div className="flex items-center gap-x-4">
              <RiMenu4Line className="h-6 w-6" />
              <Link className="flex items-center gap-x-1" href={"/"}>
                <Image src={logo} alt="logo..." className="h-8 w-auto" />
                <Image src={logo_text} alt="logo..." className="h-5 w-auto" />
              </Link>
            </div>
            <div className="ml-20 flex items-center gap-x-3">
              <AdminProfileSection user={session?.user!} />
            </div>
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
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="relative z-50 hidden h-fit bg-black bg-opacity-80 md:block">
          <div className="h-20"></div>
          <div className="absolute top-0 h-full w-full px-8 py-4">
            <div className="flex items-center justify-between">
              <Link className="flex items-center gap-x-1" href={"/"}>
                <Image src={logo} alt="logo..." className="h-8 w-auto" />
                <Image src={logo_text} alt="logo..." className="h-5 w-auto" />
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
                      Login
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

        {/* Mobile Nav */}

        <div className="relative z-50 flex items-center justify-between bg-black bg-opacity-80 p-4 md:hidden">
          <div className="flex items-center gap-x-2">
            <RiMenu4Line className="h-6 w-6" />
            <Link className="flex items-center gap-x-1" href={"/"}>
              <Image src={logo} alt="logo..." className="h-8 w-auto" />
              <Image src={logo_text} alt="logo..." className="h-5 w-auto" />
            </Link>
          </div>
          {isLoggedIn && (
            <div className="flex items-center gap-x-3">
              <FaFilter className="h-6 w-6" />
              <Link href={"/search"}><IoSearchSharp className="h-6 w-6" /></Link>
              <ProfileSection user={session?.user!} />
            </div>
          )}
          {!isLoggedIn && (
            <div className="flex items-center gap-x-2 font-semibold">
              <Link href={"/login"}>Login</Link>
              {"|"}
              <Link href={"/signup"}>Signup</Link>
            </div>
          )}
        </div>
      </>
    );
  }
};

export default Navigation;
