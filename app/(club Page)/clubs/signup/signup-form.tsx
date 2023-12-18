"use client";

import { Icons, Primitives, Images } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast, Toaster } from "react-hot-toast";
import { FaApple, FaGoogle, FaUser } from "react-icons/fa";
import {
  FiEye,
  FiEyeOff,
  FiLoader,
  FiLock,
  FiMail,
  FiUser,
} from "react-icons/fi";
import { useState } from "react";
import { Router } from "next/router";
import { FcGoogle } from "react-icons/fc";
// import { Icons } from '@/components/icons';

export const SignupFormSchema = z.object({
  name: z.string().min(4, {
    message: "Name must not be less than 4 characters.",
  }),
  email: z
    .string()
    .min(2, {
      message: "email must be at least 2 characters.",
    })
    .email({ message: "Invalid email address" }),
  password: z.string().min(8, {
    message: "Password should contain atleast 8 characters",
  }),
});

export function ClubSignup() {
  const [isPassVisible, setIsPassVisible] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof SignupFormSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: values }),
    });
    console.log(response);

    const userInfo = await response.json();
    const { data, error, errorCode } = userInfo;

    if (data) {
      toast.success(
        (t) => (
          <span className="flex items-center space-x-3">
            <b>{`Account Created Successfully!`}</b>
          </span>
        ),
        { position: "bottom-center" },
      );
      form.reset();
      setTimeout(() => {
        router.push(`/login`);
      }, 3000);
    }

    if (error && errorCode === "409") {
      console.error(error);
      toast.error(
        (t) => (
          <span className="flex items-center space-x-3">
            <b>{`${error}, Try Loggin in!`}</b>
          </span>
        ),
        { position: "bottom-center" },
      );
      setTimeout(() => {
        router.push(`/login?email=${values.email}`);
      }, 3000);
    }
    setIsSubmitting(false);
  };
  return (
    //Todo: Glass effect needs to be implemented in the form card component.
    <Card className="custom-card to-tr w-full max-w-lg border-none bg-gradient-to-br from-zinc-500 via-zinc-800 p-5 py-20 backdrop-blur-2xl">
      <div className="mb-5 flex flex-col items-center justify-center gap-1">
        <h1 className="text-4xl font-semibold text-white underline underline-offset-4">
          Create Account
        </h1>
        <span className="text-white">Welcome onboard with us!</span>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <div className="grid">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <div className="">
                          {/* <Primitives.person
                          className={`absolute -left-12 top-0 m-2.5 h-6 w-6`}
                        /> */}
                          <Input
                            placeholder="name"
                            {...field}
                            className="border-none bg-white/60 outline-none"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="relative text-white">
                          {/* <Primitives.mail
                          className={`absolute -left-12 m-2.5 h-6 w-6`}
                        /> */}
                          <Input
                            placeholder="user@example.com"
                            {...field}
                            className=" border-2 border-none border-white bg-white/60 py-5 outline-none"
                          />
                        </div>
                      </FormControl>
                      {/* <FormDescription>
											This is your public display name.
										</FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          {/* <Primitives.lock
                          className={`absolute -left-12 m-2.5 h-6 w-6`}
                        /> */}
                          <Input
                            type={isPassVisible ? "text" : "password"}
                            {...field}
                            className="border-none bg-white/60 outline-none "
                            placeholder="password"
                          />
                          <button
                            type="button"
                            onClick={() => setIsPassVisible((ref) => !ref)}
                            className="absolute inset-y-0 right-0 m-2.5 h-5 w-5"
                          >
                            {isPassVisible ? (
                              <FiEyeOff />
                            ) : field.value ? (
                              <FiEye />
                            ) : null}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-center">
                <Button
                  className="w-full bg-red-600 p-5 text-lg text-white hover:text-red-500"
                  type="submit"
                >
                  {isSubmitting ? (
                    <div className=" animate-spin">
                      <span>Registering....</span>
                      <FiLoader />
                    </div>
                  ) : (
                    "SIGN UP"
                  )}
                </Button>
              </div>
              <div className="">
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <span>Already have an account?</span>
                  <Link
                    href={"/login"}
                    className="font-bold text-white underline-offset-4 hover:underline"
                  >
                    Login <span className="font-light">Here</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row items-center justify-center gap-2">
                <span className="h-px w-full bg-white" />
                <div className="flex justify-center text-lg font-semibold">
                  <span className="text-white">or</span>
                </div>
                <span className="h-px w-full bg-white" />
              </div>
              <div className="flex items-center justify-center space-x-2 ">
                <Button
                  variant="ghost"
                  onClick={() => {
                    signIn("google");
                  }}
                  type="button"
                  className="w-fit"
                >
                  <FcGoogle className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => console.log("login with apple")}
                  type="button"
                  className="w-fit"
                >
                  <FaApple className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </CardContent>
        </form>
      </Form>
    </Card>
  );
}
