"use client";

import React from "react";
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
import { DotIcon } from "@radix-ui/react-icons";
import { GiTicket } from "react-icons/gi";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import profileBg from "@/public/footer-bg.png";

const checkboxes = [
  {
    id: "alcohol",
    label: "Alcohol",
  },
  {
    id: "noAlcohol",
    label: "No Alcohol",
  },
] as const;

const FormSchema = z.object({
  type: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  people: z.number().min(1, {
    message: "You have to have atleast 1 person.",
  }),
  price: z.number().min(0, {
    message: "You have to select at least one item.",
  }),
});
const Filters = () => {
  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log("values => ", values);
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      type: ["alcohol", "noAlcohol"],
      people: 1,
      price: 0,
    },
  });
  return (
    <Popover>
      <PopoverTrigger>Filter</PopoverTrigger>
      <PopoverContent className=" w-60 rounded-xl bg-zinc-900 p-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="">
              <div className="flex items-center space-x-3 text-2xl font-semibold tracking-wider">
                <span>Filters</span>
                <FaFilter />
              </div>
              <hr className="mb-4 mt-2" />
              <div className="mb-4 space-y-4">
                {checkboxes.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="type"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              className="rounded-md"
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id,
                                      ),
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal tracking-wide">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <div className="mb-4 ">
                <div className="mb-2 font-semibold capitalize tracking-wide">
                  No of People
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="people"
                    render={({ field }) => {
                      return (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <div className="flex items-center space-x-2">
                              <Button variant={"outline"} className="p-1">
                                <FaMinus className={`h-3 w-3`} />
                              </Button>
                              <span>{field.value ?? "0"}</span>
                              <Button variant={"outline"} className="p-1">
                                <FaPlus className={`h-3 w-3`} />
                              </Button>
                            </div>
                          </FormControl>
                        </FormItem>
                      );
                    }}
                  />
                </div>
              </div>
              <div className="mb-6 ">
                <div className="mb-3">Price Range</div>
                <div>
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => {
                      return (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Slider
                              defaultValue={[field.value, 1000]}
                              max={2000}
                              step={1000}
                            />
                          </FormControl>
                          <FormDescription>{field.value}</FormDescription>
                        </FormItem>
                      );
                    }}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => {
                      return (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>{field.value}</FormControl>
                        </FormItem>
                      );
                    }}
                  />
                </div>
              </div>
              <div className="my-2 ">
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </PopoverContent>
    </Popover>
  );
};

const ProfileSection = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
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
