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

import { RiPencilFill } from "react-icons/ri";

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Seriously?! Write your full name" })
    .max(255),
  email: z.string().email().min(1).max(255),
  phone: z.coerce.string().min(10).max(10),
  clubname: z.string().min(1).max(255),
  location: z.string().min(1).max(255),
  timing: z.string().min(1).max(255),
  services: z.string().min(1).max(255),
  details: z.string().min(1).max(255),
  url: z.string().min(1).max(255),
});

const EditForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 flex flex-col space-y-5"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex  items-center">
              <FormLabel className="w-full max-w-[250px] text-lg">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  className="border border-white"
                  placeholder="Name..."
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
          name="clubname"
          render={({ field }) => (
            <FormItem className="flex items-center">
              <FormLabel className="w-full max-w-[250px] text-lg">
                Club Name
              </FormLabel>
              <FormControl>
                <Input
                  className="border border-white"
                  placeholder="Club Name..."
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
            <FormItem className="flex items-center">
              <FormLabel className="w-full max-w-[250px] text-lg">
                Mobile No.
              </FormLabel>
              <FormControl>
                <Input
                  className="border border-white"
                  placeholder="Phone..."
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
            <FormItem className="flex items-center">
              <FormLabel className="w-full max-w-[250px] text-lg">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  className="border border-white"
                  placeholder="example@gmail.com"
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
          name="location"
          render={({ field }) => (
            <FormItem className="flex items-center">
              <FormLabel className="w-full max-w-[250px] text-lg">
                Club Location
              </FormLabel>
              <FormControl>
                <Input
                  className="border border-white"
                  placeholder="Main Street, Your County, or Anytown."
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
          name="timing"
          render={({ field }) => (
            <FormItem className="flex items-center">
              <FormLabel className="w-full max-w-[250px] text-lg">
                Club Timings
              </FormLabel>
              <FormControl>
                <div className="flex w-full items-center">
                  <Input
                    type="time"
                    className="w-full flex-grow border border-white"
                    placeholder=""
                    {...field}
                  />
                  <FormLabel className="mx-10 w-fit text-lg">To</FormLabel>
                  <Input
                    type="time"
                    className="w-full flex-grow border border-white"
                    placeholder=""
                    {...field}
                  />
                </div>
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="services"
          render={({ field }) => (
            <FormItem className="flex items-center">
              <FormLabel className="w-full max-w-[250px] text-lg">
                Services Provided
              </FormLabel>
              <FormControl>
                <Input
                  className="border border-white"
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
          name="details"
          render={({ field }) => (
            <FormItem className="flex items-center">
              <FormLabel className="w-full max-w-[250px] text-lg">
                Details about Club
              </FormLabel>
              <FormControl>
                <Input
                  className="border border-white"
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
          name="url"
          render={({ field }) => (
            <FormItem className="flex items-center">
              <FormLabel className="w-full max-w-[250px] text-lg">
                Location Url
              </FormLabel>
              <FormControl>
                <Input
                  className="border border-white"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex">
          <span className="mt-3 w-full max-w-[250px] text-xl">Pictures</span>
          <label
            htmlFor="image-upload"
            className="ml-auto mr-10 flex h-[300px] w-2/3 flex-col items-center justify-center bg-black p-5"
          >
            <span className="text-md cursor-pointer rounded-lg border px-5 py-2">
              Add Photos +
            </span>
          </label>
          <input
            className="hidden"
            id="image-upload"
            type="file"
            multiple
            accept=".png,.jpeg,.jpg"
            name="image"
          />
        </div>

        <Button
          type="submit"
          className="mx-auto mt-5 w-40 bg-gradient-to-t from-red-800 to-red-400 px-5 capitalize text-white"
        >
          Save Changes
        </Button>
      </form>
    </Form>
  );
};

export default EditForm;
