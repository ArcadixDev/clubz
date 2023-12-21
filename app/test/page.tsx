"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

interface FormData {
  day: string;
  openingHours: string;
  closingHours: string;
}

const FormSchema = z.object({
  day: z.string({
    required_error: "Please select an email to display.",
  }),
  openingHours: z.string({
    required_error: "Please select an email to display.",
  }),
  closingHours: z.string({
    required_error: "Please select an email to display.",
  }),
});

const page: React.FC = () => {
  //   const handleInputChange = (name: string, value: string) => {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   };

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     const jsonData = JSON.stringify(formData, null, 2);
  //     console.log(jsonData);
  //     // You can now send the jsonData to your server or handle it as needed
  //   };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      day: "everyday",
      openingHours: "18:00",
      closingHours: "23:00",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="day"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[250px]">
                    <SelectValue placeholder="Select A Day" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="everyday">Every Day</SelectItem>
                  <SelectItem value="weekdays">Weekdays</SelectItem>
                  <SelectItem value="weekends">Weekends</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                You can manage email addresses in your{" "}
                <Link href="/examples/forms">email settings</Link>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="openingHours"
          render={({ field }) => (
            <FormItem>
              <Input type="time" {...field} className="w-[250px]" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="closingHours"
          render={({ field }) => (
            <FormItem>
              <Input type="time" {...field} className="w-[250px]" />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default page;
