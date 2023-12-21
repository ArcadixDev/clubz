"use client";

import React, { FormEvent, useState, useEffect } from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { UseFormReturn, useForm } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Form,
  FormField,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "../ui/form";
import { FiLogOut, FiSettings, FiUser } from "react-icons/fi";
import { FaFilter, FaMinus, FaPlus } from "react-icons/fa6";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "../ui/checkbox";
import { Slider } from "../ui/slider";
import Link from "next/link";
import {
  DotIcon,
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons";
import { GiTicket } from "react-icons/gi";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import profileBg from "@/public/footer-bg.png";
import { Badge } from "../ui/badge";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { useRouter, useSearchParams } from "next/navigation";
import { createUrl } from "@/lib/utils";
import { Session } from "next-auth";

const Filters = () => {
  const [type, setType] = useState("alcohol");
  const [price, setPrice] = useState([500]);
  const [people, setPeople] = useState(1);

  const router = useRouter();
  const searchParams = useSearchParams();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("values => ", { price, people, type });
    const urlParams = new URLSearchParams(searchParams.toString());

    if (price[0]) {
      urlParams.set("price", price[0].toString());
    }

    if (people) {
      urlParams.set("people", people.toString());
    }

    if (type === "alcohol") {
      urlParams.set("alcohol", "true");
    } else urlParams.set("alcohol", "false");

    router.push(createUrl("/search", urlParams));
  };

  return (
    <Popover>
      <PopoverTrigger>Filter</PopoverTrigger>
      <PopoverContent
        className=" w-60 rounded-xl bg-zinc-900 p-5"
        sideOffset={20}
      >
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="">
            <div className="flex items-center justify-between space-x-3 text-2xl font-semibold tracking-wider">
              <span>Filters</span>
              <FaFilter />
            </div>
            <hr className="mb-4 mt-2" />
            <div className="mb-4 ">
              <div className="mb-2">Type</div>
              <div>
                <ToggleGroup
                  size={"sm"}
                  type="single"
                  className="flex flex-row justify-evenly"
                  defaultValue={type}
                  onValueChange={setType}
                >
                  <ToggleGroupItem value="alcohol" aria-label="Alcohol">
                    <div>Alcohol</div>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="noAlcohol" aria-label="No Alcohol">
                    <div>No Alcohol</div>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
            <div className="mb-4 ">
              <div className="mb-2">No of People</div>
              <div>
                <div className="flex items-center space-x-3">
                  <Button
                    type="button"
                    variant={"link"}
                    onClick={() =>
                      setPeople((ref) => {
                        if (ref > 1) {
                          return ref - 1;
                        }
                        return ref;
                      })
                    }
                    className="p-3"
                  >
                    <FaMinus className={`h-3 w-3`} />
                  </Button>
                  <Button
                    type="button"
                    disabled
                    className="h-3 w-3 p-4 font-semibold"
                  >
                    {people ?? "1"}
                  </Button>
                  <Button
                    type="button"
                    variant={"link"}
                    onClick={() =>
                      setPeople((ref) => {
                        if (ref < 10) {
                          return ref + 1;
                        }
                        return ref;
                      })
                    }
                    className="p-3"
                  >
                    <FaPlus className={`h-3 w-3`} />
                  </Button>
                </div>
              </div>
            </div>
            <div className="mb-6 ">
              <div className="mb-3">
                Price Range : <span className="font-semibold">{price[0]}</span>
              </div>
              <div>
                <Slider
                  defaultValue={price}
                  max={20000}
                  step={500}
                  onValueChange={setPrice}
                />
              </div>
            </div>
            <div className="my-2 ">
              <Button type="submit" variant={"ghost"} className="w-full">
                Filter Search
              </Button>
            </div>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

const ProfileSection = ({
  user: { name, email, image, role, id },
}: {
  user: Session["user"];
}) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src={image ?? ""} />
          <AvatarFallback>{name?.substring(0, 2)}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent
        sideOffset={50}
        align={`end`}
        className={`overflow-hidden rounded-xl bg-zinc-900 p-0`}
      >
        <div>
          <div className="relative">
            <Image
              src={profileBg}
              alt={`Profile Background h-[100px] bg-cover bg-no-repeat`}
            />
            <div className="flex -translate-y-1/2 items-center justify-center">
              <Image
                src={profileBg}
                alt={`Profile Picture`}
                className={`h-20 w-20 rounded-full`}
              />
            </div>
          </div>
          <div className="-translate-y-8 pt-3">
            <div className="mx-2 flex flex-col">
              <Link href={`/profile`} className="p-1">
                <Button
                  className="my-px w-full justify-start space-x-2 shadow-custom"
                  variant={"ghost"}
                >
                  <FiUser />
                  <span>Profile</span>
                </Button>
              </Link>
              <Link href={`/bookings`} className="p-1">
                <Button
                  className="my-px w-full justify-start space-x-2 shadow-custom"
                  variant={"ghost"}
                >
                  <GiTicket />
                  <span>Bookings</span>
                </Button>
              </Link>
              <Link href={`/settings`} className="p-1">
                <Button
                  className="my-px w-full justify-start space-x-2 shadow-custom"
                  variant={"ghost"}
                >
                  <FiSettings />
                  <span>Settings</span>
                </Button>
              </Link>
              <LogoutButton />
            </div>
            <div className="mx-auto mt-3">
              <div className="flex items-center justify-center space-x-2 text-xs">
                <Link href={"#"}>Privacy Policy</Link>
                <DotIcon />
                <Link href={"#"}>Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const LogoutButton = () => {
  return (
    <Button
      variant={"outline"}
      onClick={() => signOut()}
      className="mx-auto my-3 w-fit justify-start space-x-2 rounded-lg"
    >
      <FiLogOut />
      <span>Logout</span>
    </Button>
  );
};

export { LogoutButton, Filters, ProfileSection };
