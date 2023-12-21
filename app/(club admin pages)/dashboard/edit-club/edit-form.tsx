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
        className="mt-10 space-y-5 flex flex-col"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex items-center">
              <FormLabel className="w-48 text-lg">Name</FormLabel>
              <FormControl>
                <Input
                  className="border border-white"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <RiPencilFill className="ml-5 h-6 w-6 text-red-600" />
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
              <FormLabel className="w-48 text-lg">Club Name</FormLabel>
              <FormControl>
                <Input
                  className="border border-white"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <RiPencilFill className="ml-5 h-6 w-6 text-red-600" />
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
              <FormLabel className="w-48 text-lg">Mobile No.</FormLabel>
              <FormControl>
                <Input
                  className="border border-white"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <RiPencilFill className="ml-5 h-6 w-6 text-red-600" />
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
              <FormLabel className="w-48 text-lg">Email</FormLabel>
              <FormControl>
                <Input
                  className="border border-white"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <RiPencilFill className="ml-5 h-6 w-6 text-red-600" />
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
              <FormLabel className="w-48 text-lg">Club Location</FormLabel>
              <FormControl>
                <Input
                  className="border border-white"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <RiPencilFill className="ml-5 h-6 w-6 text-red-600" />
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
              <FormLabel className="w-48 text-lg">Club Timings</FormLabel>
              <FormControl>
                <Input
                  type="time"
                  className="-mx-5 w-1/4 border border-white"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <FormLabel className="mx-10 text-lg">To</FormLabel>
              <FormControl>
                <Input
                  type="time"
                  className="-mx-5 w-1/4 border border-white"
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
          name="services"
          render={({ field }) => (
            <FormItem className="flex items-center">
              <FormLabel className="w-48 text-lg">Services Provided</FormLabel>
              <FormControl>
                <Input
                  className="border border-white"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <RiPencilFill className="ml-5 h-6 w-6 text-red-600" />
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
              <FormLabel className="w-48 text-lg">Details about Club</FormLabel>
              <FormControl>
                <Input
                  className="border border-white"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <RiPencilFill className="ml-5 h-6 w-6 text-red-600" />
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
              <FormLabel className="w-48 text-lg">Location Url</FormLabel>
              <FormControl>
                <Input
                  className="border border-white"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <RiPencilFill className="ml-5 h-6 w-6 text-red-600" />
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex">
        <span className="text-xl mt-3 w-48">Pictures</span>
        <label
          htmlFor="image-upload"
          className="w-2/3 p-5 h-[300px] mr-10 bg-black ml-auto flex flex-col justify-center items-center"
        >
            <span className="py-2 px-5 text-md border rounded-lg cursor-pointer">Add Photos +</span>
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

        <Button type="submit" className="px-5 w-40 mx-auto mt-5 text-white bg-gradient-to-t from-red-800 to-red-400 capitalize">Save Changes</Button>
      </form>
    </Form>
  );
};

export default EditForm;
