import React from "react";
import { SignupFormDemo } from "./signup-form";
import { auth } from "@/lib/auth/config";
import { redirect } from "next/navigation";
import { Images } from "@/components/icons";

const page = async () => {
  const session = await auth();

  // if (session && session?.user) {
  // 	redirect('/');
  // }
  return (
    <section className="xs:p-5 flex flex-grow items-center rounded-lg p-0 xl:m-28 xl:my-10 xl:border-secondary xl:p-0 xl:shadow-custom">
      <div className="grid h-[800px] w-full grid-cols-1 place-items-center justify-items-center gap-4 lg:grid-cols-2">
        <div className="bg-signupllustration hidden h-full w-full items-center justify-center bg-auto bg-center bg-no-repeat lg:flex">
          {/* <Images.signUp /> */}
        </div>
        <div className="w-full">
          <SignupFormDemo />
        </div>
      </div>
    </section>
  );
};

export default page;
