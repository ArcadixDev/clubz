import {
  BookingCardLeft,
  BookingCardRight,
} from "@/components/primitives/BookingCard";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth/config";
import Image from "next/image";
import Link from "next/link";
import bgImage from "@/assets/Background Image.png";
import { Icons } from "@/components/icons/home";
import image0 from "@/public/assets/section1Image0.png";
import image1 from "@/public/assets/section1Image.png";

export default async function Home() {
  const session = await auth();

  if (!session) {
    console.log("no session found!");
    return (
      <div className="flex-grow">
        <div className="bg-design1 relative min-h-screen w-full bg-cover bg-bottom bg-no-repeat">
          {/* <Image src={bgImage} alt={"background image"} /> */}

          <div className="pl-72 pt-72">
            <div className="font-sans text-7xl font-bold tracking-widest">
              <div>Liquid</div>
              <div>Artistry</div>
            </div>
            <div className="trakcing-wider mt-6 text-lg">
              <div>Step into a world of</div>
              <div>extraordinary flavors and</div>
              <div>unrivaled mixology expertise</div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <Button
              variant={`outline`}
              className="rounded-lg px-8 py-6 text-xl font-bold tracking-widest"
            >
              Explore
            </Button>
          </div>
        </div>
        <div className="min-h-screen overflow-hidden bg-aicon bg-auto bg-left-bottom bg-no-repeat">
          <div className="relative my-20">
            <div className="clip-right absolute right-0 top-0 z-50 h-[600px] w-[450px] bg-zinc-900 text-white">
              <div className="ml-auto mr-3 mt-10 h-[375px] w-[350px] overflow-hidden p-3 text-right">
                <h1 className="text-4xl font-bold ">Upcoming Events.</h1>
                <hr className="my-6 h-1 w-48 rounded-md bg-white text-right" />
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            <div className="relative pt-16">
              <div className="flex w-fit translate-x-96 overflow-x-auto rounded-md bg-zinc-800 scrollbar-default">
                <div className="box relative m-3 h-[300px] min-w-[300px] rounded-md bg-zinc-600">
                  <div className="absolute bottom-0 w-full pb-3 text-center text-4xl font-bold">
                    Disco Night
                  </div>
                </div>
                <div className="box relative m-3 h-[300px] min-w-[300px] rounded-md bg-zinc-600">
                  <div className="absolute bottom-0 w-full pb-3 text-center text-4xl font-bold">
                    Disco Night
                  </div>
                </div>
                <div className="box relative m-3 h-[300px] min-w-[300px] rounded-md bg-zinc-600">
                  <div className="absolute bottom-0 w-full pb-3 text-center text-4xl font-bold">
                    Disco Night
                  </div>
                </div>
                <div className="box relative m-3 h-[300px] min-w-[300px] rounded-md bg-zinc-600">
                  <div className="absolute bottom-0 w-full pb-3 text-center text-4xl font-bold">
                    Disco Night
                  </div>
                </div>
                <div className="box relative m-3 h-[300px] min-w-[300px] rounded-md bg-zinc-600">
                  <div className="absolute bottom-0 w-full pb-3 text-center text-4xl font-bold">
                    Disco Night
                  </div>
                </div>
                <div className="box relative m-3 h-[300px] min-w-[300px] rounded-md bg-zinc-600">
                  <div className="absolute bottom-0 w-full pb-3 text-center text-4xl font-bold">
                    Disco Night
                  </div>
                </div>
                <div className="box relative m-3 h-[300px] min-w-[300px] rounded-md bg-zinc-600">
                  <div className="absolute bottom-0 w-full pb-3 text-center text-4xl font-bold">
                    Disco Night
                  </div>
                </div>
                <div className="box relative m-3 h-[300px] min-w-[300px] rounded-md bg-zinc-600">
                  <div className="absolute bottom-0 w-full pb-3 text-center text-4xl font-bold">
                    Disco Night
                  </div>
                </div>
                <div className="box relative m-3 h-[300px] min-w-[300px] rounded-md bg-zinc-600">
                  <div className="absolute bottom-0 w-full pb-3 text-center text-4xl font-bold">
                    Disco Night
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg- relative min-h-screen space-y-40 bg-cicon bg-auto bg-right bg-no-repeat">
          <div className="">
            {/* <div className="absolute right-0 top-0 z-0">
              <Icons.OIcon />
            </div> */}
            <div className="flex w-full items-start">
              <Image
                src={image0}
                alt={"image 0"}
                className="z-50 h-auto w-full flex-grow"
              />
              <Image
                src={image1}
                alt={"image 1"}
                className="z-50 h-auto w-full flex-grow"
              />
            </div>
            <div className="absolute left-10 translate-x-32 translate-y-32 -rotate-12">
              <Icons.NoteIcon />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-4">
            <BookingCardLeft />
            <BookingCardRight />
            <BookingCardLeft />
            <BookingCardRight />
            <BookingCardLeft />
            <BookingCardRight />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-grow">
      <div className="flex-grow">
        Hello {session && session.user ? session?.user.name : "world"}
      </div>
    </div>
  );
}
