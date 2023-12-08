"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff, FiLoader } from "react-icons/fi";
import { z } from "zod";

export const LoginFormSchema = z.object({
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

export function LoginFormDemo() {
  const searchParams = useSearchParams();
  const callback = searchParams.get("callbackUrl");
  const error = searchParams.get("error");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isPassVisible, setIsPassVisible] = useState<boolean>(false);

  if (error) {
    console.log("error catched => ", error);
  }

  if (error === "OAuthAccountNotLinked") {
    console.log(
      "There is an account which has been signed up with credentials but has not yet linked from the OAuth account that the user is trying to signup with.",
    );
  }

  // 1. Define your form.
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: searchParams.get("email") ?? "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginFormSchema>) => {
    try {
      setIsSubmitting(true);
      await signIn("credentials", {
        ...values,
        callbackUrl: callback ?? "/",
        redirect: true,
      });
    } catch (error) {
      console.log("Error signing in", error);
      toast.error("Error occured!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="custom-card w-full max-w-lg border-none bg-zinc-800/30 p-5">
      <div className="mb-5 flex flex-col items-center justify-center gap-1">
        <h1 className="text-4xl font-semibold text-white underline underline-offset-4">
          Login
        </h1>
        <span className="text-white">Welcome back!</span>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
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
                  className="w-full bg-red-600 p-5 text-lg text-white"
                  type="submit"
                >
                  {isSubmitting ? (
                    <div className=" animate-spin">
                      <span>Login In</span>
                      <FiLoader />
                    </div>
                  ) : (
                    "SIGN IN"
                  )}
                </Button>
              </div>
              <div className="">
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <span>Don't have an account?</span>
                  <Link
                    href={"/signup"}
                    className="font-bold text-white underline-offset-4 hover:underline"
                  >
                    Register <span className="font-light">Now</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-0">
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
