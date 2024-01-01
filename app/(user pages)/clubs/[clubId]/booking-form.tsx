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
import { Matcher } from "react-day-picker";
import { PrismaClient, Prisma } from '@prisma/client'

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

const prisma = new PrismaClient();

const BookingForm = ({
  name,
  email,
  tickets,
  clubId
}: {
  name: string | null | undefined;
  email: string | null | undefined;
  tickets: number;
  clubId: string;
}) => {
  const route = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name ?? "",
      email: email ?? "",
      people: 1,
      date: new Date(),
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    if (!name && !email) {
      route.push("/login");
    }
    const bookTicket = await fetch("/api/bookTicket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: "knanda3001@gmail.com",
        clubId: "1", // Hardcoded for now
        date: values.date,
        price: 100, // Hardcoded for now
        paymentStatus: true,
      })
    });
    try {
      const res = await bookTicket.json();
      console.log("Response from booking-form ==>",res);
    } catch (error) {
      return error;
    }
    
    
  }

  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5"
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
                  {...field}
                  disabled={{ before: new Date() }}
                  fromDate={new Date()}
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

        <Button
          className="mt-12 w-full bg-gradient-to-t from-red-800 to-red-400 capitalize text-white"
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
