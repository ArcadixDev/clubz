import Sidebar from "@/components/Layouts/sidebar";
import prisma from "@/lib/prisma";
import React from "react";
import { auth } from "@/app/auth";
import ProfileCover from "@/public/assets/profileCover.png";
import Image from "next/image";

const Dashboardlayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  async function getUserData() {
    // console.log("getUserData Called")
    const data = await prisma.user.findUnique({
      where: {
        email: session?.user?.email!,
      },
    });
    return data;
  }

  const data = await getUserData();

  return (
    <main className="container relative mx-auto my-10 flex min-h-screen flex-grow flex-col overflow-hidden rounded-xl">
      <div className="h-56 w-full overflow-hidden rounded-t-2xl">
        <Image
          src={ProfileCover}
          alt={"Profile Cover"}
          className={"h-full w-full scale-105"}
        />
      </div>
      <div className="relative flex flex-grow rounded-b-2xl">
        {/* Sidebar Component */}
        <section className="hidden w-1/5 bg-sidebarBg bg-cover bg-no-repeat md:flex">
          <Sidebar />
        </section>
        {/* Main Screen */}
        <section className="overflow ml-5 flex-1 overflow-x-hidden rounded-b-2xl bg-zinc-800/30 p-6">
          <div className="relative flex flex-col sm:flex-row">
            <div className="w-full">{children}</div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Dashboardlayout;
