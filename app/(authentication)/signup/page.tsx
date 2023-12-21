import React from "react";
import Image from "next/image";
import { SignupFormDemo } from "./signup-form";
import { auth } from "@/app/auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();

  if (session?.user) {
    redirect("/");
  }
  return (
    <section className="relative flex h-screen w-full flex-row items-center justify-center">
      <div className="relative hidden items-center justify-center md:flex md:w-1/2">
        <Image
          src="/assets/Smart People 1.png"
          width={500}
          height={500}
          alt=""
        />
      </div>
      <div className="absolute left-72 top-0 -z-10 hidden md:flex">
        <Image src="/assets/Vector 14.png" alt="" width={800} height={800} />
      </div>
      <div className="absolute left-0 top-0 -z-10 hidden md:flex">
        <Image src="/assets/Vector 15.png" alt="" width={500} height={500} />
      </div>
      <div className="absolute bottom-60 left-0 hidden md:flex">
        <Image src="/assets/Ellipse 2.png" alt="" width={250} height={250} />
      </div>

      <div className="w-full md:w-1/2">
        <SignupFormDemo />
      </div>
      <Image
        src="/assets/image 8.png"
        alt=""
        width={100}
        height={100}
        className="absolute bottom-0 right-0 -z-10"
      />
      <Image
        src="/assets/Ellipse 3.png"
        alt=""
        width={200}
        height={200}
        className="absolute right-0 top-0 -z-10"
      />
      <Image
        src="/assets/note.png"
        alt=""
        width={50}
        height={100}
        className="absolute right-[400px] top-24"
      />
      <Image
        src="/assets/Ellipse 1.png"
        alt=""
        width={250}
        height={250}
        className="absolute bottom-0 right-0 -z-10"
      />
    </section>
  );
};

export default Page;
