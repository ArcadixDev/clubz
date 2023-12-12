"use client";
import Sidebar from "@/components/Layouts/sidebar";
import { useTheme } from "next-themes";
import React from "react";

const Dashboardlayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <main className="container relative mx-auto my-10 flex min-h-screen flex-grow flex-col overflow-hidden rounded-xl">
      <div className="h-56 w-full rounded-t-2xl bg-zinc-800"></div>
      <div className="relative flex flex-grow rounded-b-2xl">
        {/* Sidebar Component */}
        <section className="bg-sidebarBg hidden w-1/5 bg-cover bg-no-repeat md:flex">
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
