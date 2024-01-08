import { Icons } from "@/components/icons/home";
import {
  BookingCardLeft,
  BookingCardRight,
} from "@/components/primitives/BookingCard";
import { Button } from "@/components/ui/button";
import image1 from "@/public/assets/section1Image.png";
import image0 from "@/public/assets/section1Image0.png";
import Image from "next/image";
import { auth } from "@/app/auth";
import { FaArrowRightLong } from "react-icons/fa6";

import note from "../public/assets/note.png";
import stars_bg from "../public/assets/bg-star.svg";
import club1 from "../public/assets/club1.jpg";
import club2 from "../public/assets/club2.jpg";
import club3 from "../public/assets/club3.jpg";
import club4 from "../public/assets/club4.jpg";
import club5 from "../public/assets/club5.jpg";
import liquid_artistry from "../public/assets/Liquid Artistry.png";
import line1 from "../public/assets/line1.png";
import ellipse1 from "../public/assets/ellipse1.png";

import { Noto_Serif } from "next/font/google";
const noto_serif = Noto_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default async function Home() {
  const session = await auth();

  return (
    <div className="mb-24 max-w-[100vw] flex-grow overflow-hidden">
      <Image src={stars_bg} alt="Bg" className="absolute w-full bg-cover" />
      <div className="relative w-full bg-starsBg bg-cover bg-bottom bg-no-repeat min-h-[200px] md:min-h-screen">
        <div className="absolute h-full w-full bg-waves bg-cover bg-top bg-no-repeat"></div>
        <div className="relative px-8 md:pl-72 md:pt-40">
          <Image
            className="absolute left-[700px] top-[80px] rotate-6"
            src={note}
            alt="Note"
          />
          <Image
            className="top-10 mt-10 h-20 w-auto md:left-[700px] md:top-[80px] md:mt-0 md:h-auto"
            src={liquid_artistry}
            alt="Note"
          />
          <Image
            className="absolute left-0 -top-[7px] md:top-[60px] w-screen"
            src={line1}
            alt="Line 1"
          />
          <Image
            className="absolute h-44 -top-28 md:h-auto w-auto -right-10 md:-top-10 rotate-[20deg]"
            src={ellipse1}
            alt="Ellipse 1"
          />
          <p className={` text-sm md:mt-5 md:text-lg `}>
            Step into a world of extraordinary flavors <br /> and unrivaled
            mixology expertise
          </p>
        </div>
        <div className="absolute left-1/3 mt-14 md:bottom-10 md:left-[45vw] md:block">
          <Button
            variant={`outline`}
            className="rounded-lg border border-white px-8 py-6 text-xl font-bold tracking-widest"
          >
            Explore
          </Button>
        </div>
      </div>
      <div className="pb-32 md:pb-0 md:min-h-screen overflow-hidden bg-aicon bg-auto bg-left-top bg-no-repeat">
        <div className="relative my-20">
          <div className="clip-right absolute right-0 top-0 z-50 h-auto w-44 md:h-[600px] md:w-[450px] bg-zinc-900 text-white">
            <div className="ml-auto mr-3 mt-10  md:h-[375px] md:w-[350px] overflow-hidden p-3 text-right">
              <h1 className="text-2xl md:text-4xl font-bold ">Upcoming Events.</h1>
              <hr className="text-sm md:text-md my-6 h-1 md:w-48 rounded-md bg-white text-right" />
              <div className="ml-10 text-sm mb-20 md:m-0 md:text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>
          <div className="relative pt-16">
            <div className="mx-auto flex w-fit overflow-x-scroll rounded-md bg-zinc-800/30 scrollbar-default">
              <div className="box relative m-3 h-[200px] w-[200px] md:h-[300px] md:w-[300px] overflow-hidden rounded-md bg-zinc-600">
                <Image
                  src={club1}
                  alt="Club 1"
                  className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] object-cover"
                />
                <div className="absolute bottom-0 w-full pb-3 text-center text-4xl font-bold">
                  Disco Night
                </div>
              </div>
              <div className="box relative m-3 h-[200px] w-[200px] md:h-[300px] md:w-[300px] rounded-md bg-zinc-600">
                <Image
                  src={club2}
                  alt="Club 1"
                  className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] object-cover"
                />
                <div className="absolute bottom-0 w-full pb-3 text-center text-4xl font-bold">
                  DJ Night
                </div>
              </div>
              <div className="box relative m-3 h-[200px] w-[200px] md:h-[300px] md:w-[300px] rounded-md bg-zinc-600">
                <Image
                  src={club3}
                  alt="Club 1"
                  className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] object-cover"
                />
                <div className="absolute bottom-0 w-full pb-3 text-center text-4xl font-bold">
                  Retro Night
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative min-h-screen space-y-40 bg-cicon bg-auto bg-right bg-no-repeat">
        <div className="">
          <div className="felx-wrap flex w-full items-start">
            <Image
              src={image0}
              alt={"image 0"}
              className="z-50 h-auto flex-1"
            />
            <Image
              src={image1}
              alt={"image 1"}
              className="z-50 h-auto flex-1"
            />
          </div>
          <div className="absolute left-10 translate-x-32 translate-y-32 -rotate-12">
            <Icons.NoteIcon />
          </div>
        </div>
        <div className="grid grid-cols-1 mx-5 md:grid-cols-2 gap-x-10 gap-y-4">
          <BookingCardLeft />
          <BookingCardRight />
          <BookingCardLeft />
          <BookingCardRight />
          <BookingCardLeft />
          <BookingCardRight />
        </div>
      </div>
      <div className=" relative min-h-screen space-y-40 bg-bDesign bg-auto bg-left-top bg-no-repeat">
        <div className="container my-24 flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="flex-grow text-center text-4xl md:text-left md:text-7xl font-bold capitalize">
            <div className="mx-auto mb-4 w-full max-w-md">
              We help you to find best
            </div>
            <div className="mx-auto h-1.5 w-32 translate-x-full rounded-md bg-white"></div>
          </div>
          <div className="-ml-28 md:ml-0 relative flex flex-grow items-end justify-start">
            <div className="flex aspect-[9/16] h-[300px] w-[200px] md:h-[525px] md:w-[350px] items-start justify-start bg-gray-400">
              <Image
                className="aspect-[9/16] h-[300px] w-[200px] md:h-[525px] md:w-[350px] object-cover"
                src={club5}
                alt="Club"
              />
            </div>
            <div className="absolute left-32 md:left-48 top-20 flex aspect-[9/16] h-[300px] w-[200px] md:h-[525px] md:w-[350px] items-end justify-end bg-gray-400">
              <Image
                className="aspect-[9/16] h-[300px] w-[200px] md:h-[525px] md:w-[350px] object-cover"
                src={club2}
                alt="Club"
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto my-24 flex flex-col md:flex-row items-center justify-center">
          <div className="relative w-full max-w-xs space-y-14">
            <div className="w-full text-5xl md:text-6xl font-semibold">
              <div className="-mb-4 md:mb-4">Light Your Night</div>
              <div className="ml-auto h-1 w-28 rounded-md bg-white"></div>
            </div>
            <div className="text-md text-center md:text-left tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="flex items-center md:items-start justify-center md:justify-start">
              <Button variant={"secondary"} className="space-x-2">
                <span>Get notify</span>
                <FaArrowRightLong />
              </Button>
            </div>
          </div>

          <div className="pt-10 md:mx-auto w-full flex-grow">
            <div className="grid grid-cols-2 place-items-start content-center items-center gap-10">
              <div className="h-[350px] w-[350px] place-self-end bg-zinc-800 shadow-custom">
                <Image
                  className="h-[350px] w-[350px] object-cover"
                  src={club4}
                  alt="Club"
                />
              </div>
              <div className="h-[350px] w-[350px] bg-zinc-800 shadow-custom">
                <Image
                  className="h-[350px] w-[350px] object-cover"
                  src={club3}
                  alt="Club"
                />
              </div>
              <div className="hidden md:block h-[350px] w-[350px] place-self-end bg-zinc-800 shadow-custom">
                <Image
                  className="h-[350px] w-[350px] object-cover"
                  src={club2}
                  alt="Club"
                />
              </div>
              <div className="hidden md:block h-[350px] w-[350px] bg-zinc-800 shadow-custom">
                <Image
                  className="h-[350px] w-[350px] object-cover"
                  src={club1}
                  alt="Club"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
