"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import React, { useEffect } from "react";

import { MdOutlineModeEdit } from "react-icons/md";
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import {User} from "@prisma/client";

const profileFormSchema = z.object({
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  phone: z.string().regex(/^\d{10}$/),
  name: z.string().min(2).max(20),
  dob: z.string(),
  gender: z.string().min(2).max(20),
  pincode: z.string().regex(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/),
  city: z.string().min(2).max(20),
  state: z.string().min(2).max(20),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const defaultValues: Partial<ProfileFormValues> = {};



export function ProfileForm(props: {data: User }) {

  const [activateUpdateButton, setActivateUpdateButton] = React.useState(false);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });


  function onSubmit(data: ProfileFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  const userData = props.data;

  // Filter out the attributes which donot exist in the form
  // such as id, emailVerified, image, password etc.
  const filteredData = Object.fromEntries(Object.entries(userData).filter(([key]) => ![
    "id","emailVerified","image","password"
  ].includes(key)));

  // set the filtered data as the default values for the formData
  // so that initially formData === dbData
  const [formData, setFormData] = React.useState(filteredData);
  

  // handles onChange event of the form
  // and updates the formData
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value})
  }
  // keeps looking for changes in the formData
  // and updates the activateUpdateButton (when true you can edit form)
  useEffect(() => {
    const isSameData = Object.keys(filteredData).every((key) => filteredData[key] === formData[key]);
    setActivateUpdateButton(isSameData);
  }, [formData]);

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-y-8 rounded-lg bg-gradient-to-tl from-black to-slate-600 p-8"
        >
          <label className="text-2xl">Account Details</label>
          <div className="space-y-5 ml-10">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="w-44">Email Address</FormLabel>
                  <div className="flex gap-x-10 items-center">
                  <FormControl>
                    <Input defaultValue={userData.email!} className="border-white md:w-3/4" placeholder="emily@acies.com" {...field} onChange={handleChange} />
                  </FormControl>
                  <span className="flex items-center gap-x-1 hover:cursor-pointer"><MdOutlineModeEdit /> Edit</span>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="w-44">Mobile Number</FormLabel>
                  <div className="flex gap-x-10 items-center">
                  <FormControl>
                    <Input defaultValue={"9999999991"} className="border-white md:w-3/4" placeholder="99xxxxxxxx" {...field} onChange={handleChange} />
                  </FormControl>
                  <span className="flex items-center gap-x-1 hover:cursor-pointer"><MdOutlineModeEdit /> Edit</span>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <label className="text-2xl">Personal Details</label>
          <div className="space-y-5 ml-10">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="w-44">Name</FormLabel>
                  <FormControl>
                    <Input className="border-white md:w-3/4"
                    defaultValue={userData.name!}
                      placeholder="Enter your first name here"
                      {...field} onChange={handleChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="w-44">Date of Birth</FormLabel>
                  <FormControl>
                    <Input className="border-white md:w-3/4" type="date" {...field} onChange={handleChange}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            {/* <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="w-44">Gender</FormLabel>
                  <Select 
                    onValueChange={field.onChange}
                    defaultValue={field.value} 
                    
                  >
                    <FormControl className="border-white md:w-3/4">
                      <SelectTrigger>
                        <SelectValue placeholder="Select your Gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Prefer Not to say">
                        Prefer Not To Say
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            {/* <FormField
              control={form.control}
              name="pincode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="w-44">Zip/Pincode</FormLabel>
                  <FormControl>
                    <Input className="border-white md:w-3/4" {...field} onChange={handleChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="w-44">City/Town</FormLabel>
                  <FormControl>
                    <Input className="border-white md:w-3/4" {...field} onChange={handleChange}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="w-44">State</FormLabel>
                  <FormControl>
                    <Input className="border-white md:w-3/4" {...field} onChange={handleChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
          </div>
          <Button
                  className="ml-10 w-48 text-white mt-5 bg-gradient-to-t from-red-800 to-red-400 capitalize"
                  type="submit"
                  disabled={activateUpdateButton}
                >
                  Update Details
                </Button>
        </form>
      </Form>
    </>
  );
}
