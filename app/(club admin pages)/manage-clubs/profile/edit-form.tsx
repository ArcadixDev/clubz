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
  company: z.string().min(1).max(255),
  password: z.string().min(8).max(255),
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
        className="flex flex-col space-y-5"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex items-center">
              <FormLabel className="w-48 text-lg">Full Name</FormLabel>
              <FormControl>
                <Input
                  className="border border-white"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <RiPencilFill className="ml-5 h-6 w-6 text-red-500" />
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem className="flex items-center">
              <FormLabel className="w-48 text-lg">Company Name</FormLabel>
              <FormControl>
                <Input
                  className="border border-white"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <RiPencilFill className="ml-5 h-6 w-6 text-red-500" />
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
              <FormLabel className="w-48 text-lg">Mobile Number</FormLabel>
              <FormControl>
                <Input
                  className="border border-white"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <RiPencilFill className="ml-5 h-6 w-6 text-red-500" />
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
              <RiPencilFill className="ml-5 h-6 w-6 text-red-500" />
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="flex items-center">
              <FormLabel className="w-48 text-lg">Password</FormLabel>
              <FormControl>
                <Input
                  className="border border-white"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <span className="ml-5">Change</span>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-x-5 ml-auto">  
        <Button type="submit" className="w-56 px-5 mt-5 border-2 border-white bg-transparent text-white  capitalize">Back to Home</Button>
        <Button type="submit" className="w-56 px-5 mt-5 text-white bg-gradient-to-t from-red-800 to-red-400 capitalize">Save Changes</Button>
        </div>
      </form>
    </Form>
  );
};

export default EditForm;
