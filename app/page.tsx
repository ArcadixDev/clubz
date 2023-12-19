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

import note from "../public/assets/note.png"
import stars_bg from "../public/assets/bg-star.svg"
import club1 from "../public/assets/club1.jpg";
import club2 from "../public/assets/club2.jpg";
import club3 from "../public/assets/club3.jpg";
import club4 from "../public/assets/club4.jpg";
import club5 from "../public/assets/club5.jpg";

import { Noto_Serif } from 'next/font/google'
const noto_serif = Noto_Serif({
  weight: ['400','500','700','900'],
  subsets: ['latin'],
})

export default async function Home() {
  const session = await auth();
  return (
    <div className="mb-24 flex-grow">
      <Image src={stars_bg} alt="Bg" className="absolute w-full object-cover max-h-screen"/>
      <div className="relative min-h-screen w-full bg-waves bg-cover bg-bottom bg-no-repeat">
        
        <div className="pl-72 pt-44 relative">
          <Image className="absolute left-[650px] top-[80px] rotate-6" src={note} alt="Note" />
          {/* <Image src={ellipse2} alt="Ellipse 2" className="absolute right-0 top-10" /> */}
          <h1 className={`${noto_serif.className} text-8xl font-bold tracking-wider`}>Liquid <br /> Artistry</h1>
          <p className="text-lg mt-5">
          Step into a world of extraordinary flavors <br /> and unrivaled mixology expertise
          </p>

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
      <div className="min-h-screen overflow-hidden bg-aicon bg-auto bg-left-top bg-no-repeat">
        <div className="relative my-20">
          <div className="clip-right absolute right-0 top-0 z-50 h-[600px] w-[450px] bg-zinc-900 text-white">
            <div className="ml-auto mr-3 mt-10 h-[375px] w-[350px] overflow-hidden p-3 text-right">
              <h1 className="text-4xl font-bold ">Upcoming Events.</h1>
              <hr className="my-6 h-1 w-48 rounded-md bg-white text-right" />
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>
          <div className="relative pt-16">
            <div className="mx-auto flex w-fit overflow-x-scroll rounded-md bg-zinc-800/30 scrollbar-default">
              <div className="box relative m-3 h-[300px] w-[300px] rounded-md overflow-hidden bg-zinc-600">
                <Image src={club1} alt="Club 1" className="h-[300px] w-[300px] object-cover" />
                <div className="absolute bottom-0 w-full pb-3 text-center text-4xl font-bold">
                  Disco Night
                </div>
              </div>
              <div className="box relative m-3 h-[300px] w-[300px] rounded-md bg-zinc-600">
              <Image src={club2} alt="Club 1" className="h-[300px] w-[300px] object-cover" />
                <div className="absolute bottom-0 w-full pb-3 text-center text-4xl font-bold">
                  DJ Night
                </div>
              </div>
              <div className="box relative m-3 h-[300px] w-[300px] rounded-md bg-zinc-600">
              <Image src={club3} alt="Club 1" className="h-[300px] w-[300px] object-cover" />
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
        <div className="grid grid-cols-2 gap-x-10 gap-y-4">
          <BookingCardLeft />
          <BookingCardRight />
          <BookingCardLeft />
          <BookingCardRight />
          <BookingCardLeft />
          <BookingCardRight />
        </div>
      </div>
      <div className=" relative min-h-screen space-y-40 bg-bDesign bg-auto bg-left-top bg-no-repeat">
        <div className="container my-24 flex items-center justify-center gap-10">
          <div className="flex-grow text-left text-7xl font-bold capitalize">
            <div className="mx-auto mb-4 w-full max-w-md">
              We help you to find best
            </div>
            <div className="mx-auto h-1.5 w-32 translate-x-full rounded-md bg-white"></div>
          </div>
          <div className=" relative flex flex-grow items-end justify-start">
            <div className="flex aspect-[9/16] h-[525px] w-[350px] items-start justify-start bg-gray-400">
            <Image className="aspect-[9/16] h-[525px] w-[350px] object-cover" src={club5} alt="Club" />
            </div>
            <div className="absolute left-48 top-20 flex aspect-[9/16] h-[525px] w-[350px] items-end justify-end bg-gray-400">
              <Image className="aspect-[9/16] h-[525px] w-[350px] object-cover" src={club2} alt="Club" />
            </div>
          </div>
        </div>
        <div className="container mx-auto my-24 flex items-center justify-center">
          <div className="relative w-full max-w-xs space-y-14">
            <div className="w-full text-6xl font-semibold">
              <div className="mb-4">Light Your Night</div>
              <div className="ml-auto h-1 w-28 rounded-md bg-white"></div>
            </div>
            <div className="text-md tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div>
              <Button variant={"secondary"} className="space-x-2">
                <span>Get notify</span>
                <FaArrowRightLong />
              </Button>
            </div>
          </div>

          <div className="mx-auto w-full flex-grow">
            <div className="grid grid-cols-2 place-items-start content-center items-center gap-10">
              <div className="h-[350px] w-[350px] place-self-end bg-zinc-800 shadow-custom">
              <Image className="h-[350px] w-[350px] object-cover" src={club4} alt="Club" />
              </div>
              <div className="h-[350px] w-[350px] bg-zinc-800 shadow-custom">
              <Image className="h-[350px] w-[350px] object-cover" src={club3} alt="Club" />
              </div>
              <div className="h-[350px] w-[350px] place-self-end bg-zinc-800 shadow-custom">
              <Image className="h-[350px] w-[350px] object-cover" src={club2} alt="Club" />
              </div>
              <div className="h-[350px] w-[350px] bg-zinc-800 shadow-custom">
              <Image className="h-[350px] w-[350px] object-cover" src={club1} alt="Club" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
