import React from "react";
import { LoginFormDemo } from "./login-form";
import { Images } from "@/components/icons";
import { useSearchParams } from "next/navigation";

const page = () => {
  return (
    <section className="flex flex-grow items-center rounded-lg bg-cover bg-no-repeat p-0 sm:p-5 xl:m-28 xl:my-10 xl:border-secondary xl:p-0 xl:shadow-custom">
      <div className="grid min-h-[775px] w-full grid-cols-1 place-items-center justify-items-center gap-4 lg:grid-cols-2">
        <div className="w-full">
          <LoginFormDemo />
        </div>
        <div className="hidden h-full w-full items-center justify-center bg-loginIllustration bg-center bg-no-repeat lg:flex">
          {/* <Images.login /> */}
        </div>
      </div>
    </section>
  );
};

export default page;
