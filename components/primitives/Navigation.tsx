"use client";

import logo from "@/public/logo.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaFilter, FaPlus } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { z } from "zod";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Slider } from "../ui/slider";

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

const Navigation = () => {
  const { data: session, status } = useSession();
  //   const session = {
  //     user: {
  //       id: 123,
  //     },
  //   };

  if (session) {
    console.log("session from navigation -> ", session);
  }

  const onSubmit = (values) => {
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
    <div className="relative h-fit">
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
            {!session?.user.id && (
              <Link
                href={"/login?loginUserType=clubAdmin"}
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
            <Link className="p-3" href={"/clubs"}>
              clubs
            </Link>
            <Link className="p-3" href={"/search"}>
              Search
            </Link>
            <Button variant={"ghost"} className="">
              Filter
            </Button>
            <Popover>
              <PopoverTrigger>Filter</PopoverTrigger>
              <PopoverContent className="">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center space-x-1">
                        <span>Filters</span>
                        <FaFilter />
                      </div>
                      <div>
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
                                      checked={field.value?.includes(item.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([
                                              ...field.value,
                                              item.id,
                                            ])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== item.id,
                                              ),
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {item.label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                      </div>
                      <div>
                        <div className="mb-1.5">No of People</div>
                        <div className="flex items-center space-x-2">
                          <div>
                            <Button variant={"outline"} className="p-1">
                              <FaPlus className={`h-3 w-3`} />
                            </Button>
                          </div>
                          <FormField
                            control={form.control}
                            name="people"
                            render={({ field }) => {
                              return (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <span>{field.value ?? "0"}</span>
                                  </FormControl>
                                </FormItem>
                              );
                            }}
                          />
                          <div>
                            <Button variant={"outline"} className="p-1">
                              <FaPlus className={`h-3 w-3`} />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-1.5">Price Range</div>
                        <FormField
                          control={form.control}
                          name="price"
                          render={({ field }) => {
                            return (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Slider
                                    defaultValue={[field.value]}
                                    max={2000}
                                    step={1000}
                                  />
                                </FormControl>
                              </FormItem>
                            );
                          }}
                        />
                      </div>
                      <Button type="submit">Submit</Button>
                    </div>
                  </form>
                </Form>
              </PopoverContent>
            </Popover>
            <div className="flex flex-grow items-center justify-center">
              <div className="relative h-full w-full flex-grow">
                <Input
                  placeholder="Search Location"
                  className="w-full rounded-full pl-10"
                />
                <MdLocationOn
                  className={`pointer-events-none absolute inset-y-0 ml-3 h-full w-5 text-secondary-foreground`}
                />
              </div>
            </div>
            {!session?.user.id && (
              <Link href={"/login"} className="shadow-custom">
                <Button variant={"outline"} className="rounded-lg">
                  login
                </Button>
              </Link>
            )}
            {session?.user.id && (
              <div>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
