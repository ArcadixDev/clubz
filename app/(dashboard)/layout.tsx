"use client";
import Sidebar from "@/components/Layouts/sidebar";
import { useTheme } from "next-themes";
import React from "react";

const Dashboardlayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <main className="relative flex h-screen overflow-hidden">
      {/* Sidebar Component */}
      <section className="bg-sidebarBg bg-cover hidden w-1/5 bg-no-repeat md:flex">
        <Sidebar />
      </section>
      {/* Main Screen */}
      <section className="flex-1 overflow-y-auto overflow-x-hidden">
        <div className="relative flex flex-col sm:flex-row">
          <div className="w-full">{children}</div>
        </div>
      </section>
    </main>
  );
};

export default Dashboardlayout;
