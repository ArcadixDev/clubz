"use client";

import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
import { useSession } from "next-auth/react";
import { User } from "@prisma/client";
import { Calendar } from "@/components/ui/calendar";
import { Session } from "next-auth";
import { redirect, useRouter } from "next/navigation";


const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Seriously?! Write your full name" })
    .max(255),
  email: z.string().email().min(1).max(255),
  phone: z.coerce.string().min(10).max(10),
  people: z.coerce.number().gte(1).lte(10).min(1).max(10),
  date: z.coerce.date(),
});


const BookingForm = ({
  name,
  email,
  tickets,
}: {
  name: string | null | undefined;
  email: string | null | undefined;
  tickets: number;
}) => {
  const route = useRouter();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name ?? "",
      email: email ?? "",
      people: 1,
    },
  });

  const disabledDays = [
    {  }
  ];

  console.log("disabledDays => ", disabledDays);
  console.log("date => ", new Date());

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    if(!name && !email){
      route.push("/login");
    }
  }

  console.log("tickets available => ", tickets);
  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  className="border-transparent border-b-foreground focus-visible:ring-0"
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
                  className="border-transparent border-b-foreground focus-visible:ring-0"
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
                  className="border-transparent border-b-foreground focus-visible:ring-0"
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
                  className="border-transparent border-b-foreground focus-visible:ring-0"
                  type="number"
                  placeholder=""
                  {...field}
                  min={1}
                  max={10}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date & Time</FormLabel>
              <FormControl>
                <Calendar
                  className="w-full"
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={[{before: new Date(2023, 12, 1)}]}
                  {...field}
                  classNames={{
                    months: "",
                    tbody: "justify-around",
                    head_row: "justify-evenly",
                    head_cell: "justify-evenly",
                    head: "justify-around",
                    row: "justify-around",
                  }}
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

        {/* <Button
          className="w-1full mt-5 text-white bg-gradient-to-t from-red-800 to-red-400 capitalize"
          type="submit"
        >
          Book ticket
        </Button> */}
        <Button
          className="mt-5 w-full bg-gradient-to-t from-red-800 to-red-400 capitalize text-white"
          type="submit"
          disabled={tickets <= 0}
        >
          {tickets > 0 ? "Book Ticket" : "Sold Out"}
        </Button>
        {tickets > 0 && (
          <span className="ml-5 text-red-500">Only {tickets} left! Hurry!</span>
        )}
      </form>
    </Form>
  );
};

export default BookingForm;
