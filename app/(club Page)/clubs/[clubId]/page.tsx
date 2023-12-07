"use client";

import Image from "next/image";
import React from "react";
import img from "@/public/assets/section1Image.png";
import map from "@/public/assets/map.png";
import { format } from "date-fns";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon, ClockIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Overview, Photos } from "../tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Seriously?! Write your full name" })
    .max(255),
  email: z.string().email().min(1).max(255),
  phone: z.coerce.string().min(10).max(10),
  people: z.coerce.number().gte(1).lte(100),
  date: z.coerce.date(),
});

export default function page() {
  //   const [date, setDate] = React.useState<Date | undefined>(new Date());

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      people: 1,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="w-full flex-grow py-20">
      <div className="container mx-auto ">
        <div className="mb-10 grid w-full grid-cols-3 gap-6">
          <div className="col-span-2 w-full">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={img}
                alt="Image"
                className="rounded-xl object-cover"
                fill
              />
            </AspectRatio>
            <div className="mb-10 w-full pt-10">
              <Tabs
                defaultValue="overview"
                className="w-full rounded-xl bg-secondary"
              >
                <TabsList className="flex items-center justify-between">
                  <TabsTrigger
                    defaultChecked
                    value="overview"
                    className="flex-grow data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="photos"
                    className="flex-grow data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    Photos
                  </TabsTrigger>
                </TabsList>
                <hr className="h-0.5 bg-white text-white" />
                <TabsContent value="overview">
                  <Overview />
                </TabsContent>
                <TabsContent value="photos">
                  <Photos />
                </TabsContent>
              </Tabs>
            </div>
            <div className="mb-10 space-y-4">
              <div className="text-2xl font-semibold capitalize text-secondary-foreground">
                FAQs
              </div>
              <div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          {/* Right Pane  */}
          <div>
            {/* Booking and Contact Section */}
            <h1 className="mb-10 font-serif text-4xl text-red-500">
              <span className="font-bold">Bookings</span> & Contact
            </h1>
            <Form {...form}>
              <form
                noValidate
                onSubmit={form.handleSubmit(onSubmit)}
                className=""
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          className="border-transparent border-b-foreground px-0"
                          placeholder="Name"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          className="border-transparent border-b-foreground px-0"
                          type="email"
                          placeholder="Email"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input
                          className="border-transparent border-b-foreground px-0"
                          type="text"
                          placeholder=""
                          {...field}
                        />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="people"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of people</FormLabel>
                      <FormControl>
                        <Input
                          className="border-transparent border-b-foreground px-0"
                          type="number"
                          placeholder=""
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dete & Time</FormLabel>
                      <FormControl>
                        <Calendar
                          className="w-full"
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          {...field}
                          classNames={{
                            table: "w-full",
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}

                {/* <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="relative flex flex-col">
                      <FormLabel>Date of birth</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>
                        Your date of birth is used to calculate your age.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}

                <Button
                  className="w-1full mt-5 bg-gradient-to-t from-red-800 to-red-400 capitalize"
                  type="submit"
                >
                  Book ticket
                </Button>
              </form>
            </Form>

            {/* Contact Info */}
            <div>
              <h1 className="mt-10 font-serif text-3xl text-red-500">
                Contact Info
              </h1>
              <div className="mb-10 flex flex-col gap-y-3">
                <div>
                  <h2>Phone</h2>
                  <Link href={"tel:"} className="font-thin underline">
                    +91999999999
                  </Link>
                </div>

                <div>
                  <h2>Email</h2>
                  <Link href={"mailto:"} className=" underline">
                    abc@abc.com
                  </Link>
                </div>
              </div>

              <AspectRatio ratio={16 / 9}>
                <Image
                  src={map}
                  alt="Image"
                  className="rounded-md object-cover"
                  fill
                />
              </AspectRatio>
            </div>
          </div>
        </div>
        {/* // similar section  */}
        {/* <div className=" mb-10 space-y-4">
          <div className="text-xl font-semibold text-secondary-foreground">
            Similar to this
          </div>
          <div className="flex items-center justify-between">
            <div className="w-[400px] space-y-3">
              <div className=" w-full">
                <AspectRatio ratio={3 / 2}>
                  <Image
                    src={img}
                    alt="Image"
                    className="rounded-xl object-cover"
                    fill
                  />
                </AspectRatio>
              </div>
              <div className="p-1">
                <div>Title</div>
                <div className="flex items-start space-x-2">
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </div>
                  <Button variant={"destructive"}>50% off</Button>
                </div>
              </div>
            </div>
            <div className="w-[400px] space-y-3">
              <div className=" w-full">
                <AspectRatio ratio={3 / 2}>
                  <Image
                    src={img}
                    alt="Image"
                    className="rounded-xl object-cover"
                    fill
                  />
                </AspectRatio>
              </div>
              <div className="p-1">
                <div>Title</div>
                <div className="flex items-start space-x-2">
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </div>
                  <Button variant={"destructive"}>50% off</Button>
                </div>
              </div>
            </div>
            <div className="w-[400px] space-y-3">
              <div className=" w-full">
                <AspectRatio ratio={3 / 2}>
                  <Image
                    src={img}
                    alt="Image"
                    className="rounded-xl object-cover"
                    fill
                  />
                </AspectRatio>
              </div>
              <div className="p-1">
                <div>Title</div>
                <div className="flex items-start space-x-2">
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </div>
                  <Button variant={"destructive"}>50% off</Button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* rate and review section  */}
        {/* <div className="p-5">
          <div className="mb-10 flex items-start justify-between">
            <div>
              <div className="text-2xl font-semibold capitalize text-secondary-foreground">
                Rate & Review
              </div>
              <div className="mt-10 flex items-start justify-center space-x-10">
                <div>
                  <Badge
                    variant={"outline"}
                    className="flex items-center space-x-2 rounded-lg border border-white text-lg"
                  >
                    <div>4.5</div>
                    <StarFilledIcon className="h-6 w-6 text-yellow-500" />
                  </Badge>
                  <div className="text-center"> 212 votes </div>
                </div>
                <div className="w-[200px]">
                  <div className="flex w-full items-center space-x-5">
                    <span>5</span>
                    <Progress value={75} className="text-green-500" />
                  </div>
                  <div className="flex w-full items-center space-x-5">
                    <span>5</span>
                    <Progress value={60} />
                  </div>
                  <div className="flex w-full items-center space-x-5">
                    <span>5</span>
                    <Progress value={40} />
                  </div>
                  <div className="flex w-full items-center space-x-5">
                    <span>5</span>
                    <Progress value={22} />
                  </div>
                  <div className="flex w-full items-center space-x-5">
                    <span>5</span>
                    <Progress value={10} />
                  </div>
                </div>
              </div>
            </div>
            <div>Spinner goes here...</div>
          </div>
          <div className="mb-10 space-y-4">
            <div className="text-2xl font-semibold capitalize text-secondary-foreground">
              Rate this Place
            </div>
            <div className="flex items-center space-x-5">
              <StarFilledIcon />
              <StarFilledIcon />
              <StarFilledIcon />
              <StarFilledIcon />
              <StarFilledIcon />
            </div>
          </div>
          <div className=" mb-10 space-y-4">
            <div className="text-2xl font-semibold capitalize text-secondary-foreground">
              FAQs
            </div>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
