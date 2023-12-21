import { ProfileForm } from "./profile-form";
import { auth } from "@/app/auth";
import { Separator } from "@/components/ui/separator";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if(!session){
    redirect("/login");
    console.log("Session not found")
  }
  if (session && session.user) {
    console.log("session from profilepage -> ", session);
    console.log("Session found")
  }

  async function getUserData() {
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
  return (
    <div className="space-y-6">
      {/* <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div> */}
      {/* <Separator /> */}
      <ProfileForm data={data!} />
    </div>
  );
};

export default page;
