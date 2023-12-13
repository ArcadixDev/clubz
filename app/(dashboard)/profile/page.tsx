import { ProfileForm } from "./profile-form";
<<<<<<< HEAD:app/(dashboard)/profile/page.tsx
import { Separator } from "@/components/ui/separator";
import React from "react";

type Props = {};

const page = (props: Props) => {
=======
import { auth } from "@/app/auth";
import prisma from "@/lib/prisma";
import { get } from "http";


export default async function page() {
  const session = await auth();

  if (session && session.user) {
    console.log("session from profilepage -> ", session);
  }

  async function getUserData(){
    // console.log("getUserData Called")
    const data = await prisma.user.findUnique({
      where: {
        id: session?.user?.id,
      },
    });
    return data;
  }

  const data = await getUserData();
  // console.log("data -> ", typeof(data));
>>>>>>> UI:app/profile/page.tsx
  return (
    <div className="space-y-6">
      {/* <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div> */}
      <Separator />
      <ProfileForm data={data!} />
    </div>
  );
};

export default page;
