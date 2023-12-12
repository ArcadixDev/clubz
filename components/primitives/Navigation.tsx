import logo from "@/public/logo.png";
import { PlusIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { auth } from "@/app/auth";
import { Filters, ProfileSection } from "./actions";

const Navigation = async () => {
  const session = await auth();
  //   const session = {
  //     user: {
  //       id: 123,
  //     },
  //   };

  //   if (session && session.user) {
  //     console.log("session from navigation -> ", session);
  //   }

  return (
    <div className="relative h-fit bg-transparent/30">
      <div className="h-20"></div>
      <div className="absolute top-0 h-full w-full px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo..."
              className="h-12 w-auto rounded-md"
            />
          </Link>
          <div className="flex items-center justify-center space-x-5 place-self-center justify-self-end">
            {!session?.user!.id && (
              <Link
                href={"/login?loginUserType=clubAdmin"}
                className="flex items-center space-x-1"
              >
                <Button
                  variant={"link"}
                  className="flex items-center space-x-1"
                >
                  <PlusIcon className="h-5 w-5 font-bold text-foreground" />
                  <span>Add Club</span>
                </Button>
              </Link>
            )}
            <Link className="p-3" href={"/search"}>
              Search
            </Link>
            <Filters />
            <div className="flex flex-grow items-center justify-center">
              <div className="flex h-full w-full flex-grow items-center space-x-2">
                <MdLocationOn
                  className={`h-full w-5 text-secondary-foreground`}
                />
                <Input
                  placeholder="Search Location"
                  className="w-full rounded-none border-transparent px-px focus:outline-none focus-visible:border-b-foreground focus-visible:ring-0"
                />
              </div>
            </div>
            {!session?.user!.id && (
              <Link href={"/login"} className="shadow-custom">
                <Button variant={"ghost"} className="rounded-lg">
                  login
                </Button>
              </Link>
            )}
            {session?.user!.id && (
              <div>
                <ProfileSection />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
