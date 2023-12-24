"use client";

import cover from "../../../../public/assets/club3.jpg";
import profile from "../../../../public/assets/club1.jpg";
import Image from "next/image";
import EditForm from "./edit-form";
import { useSession } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton";

export default function editClub() {
  const { data: session, status } = useSession();

  return (
    <div className="container relative mx-auto">
      <div className="h-56 overflow-hidden">
        <Image src={cover} alt="Cover Image" />
      </div>

      <div className="min-h-screen w-full bg-muted px-10 pb-20">
        <div className="flex -translate-y-1/2 items-center gap-x-6 px-5">
          <Image
            className="h-36 w-36 rounded-full"
            src={profile}
            alt="Profile Picture"
          />
          <div className="space-y-2">
            {status === "loading" ? (
              <Skeleton className="h-4 w-[250px] bg-muted-foreground  text-xl" />
            ) : (
              <h1 className="text-xl font-bold">{session?.user.name}</h1>
            )}
            {status === "loading" ? (
              <Skeleton className="h-4 w-[175px] bg-muted-foreground text-xl" />
            ) : (
              <h1 className="text-xl font-bold underline">Club Name</h1>
            )}
          </div>
        </div>
        <h1 className="text-2xl font-bold">Edit Club Details</h1>
        <EditForm />
      </div>
    </div>
  );
}
