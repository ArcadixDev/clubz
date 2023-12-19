import React from "react";
import clubEvent from "../../../public/assets/club-event.svg";
import drunkenDaddy from "../../../public/assets/drunken-daddy.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Testimonial from "@/components/primitives/Testimonial";

const page = () => {
  return (
    <div className="flex-grow">
      <div className="relative min-h-screen w-full bg-waves bg-cover bg-bottom bg-no-repeat">
        {/* <Image src={bgImage} alt={"background image"} /> */}
        {/* <Navigation /> */}

        <div className="px-32 pt-52">
          <div className="mb-56 flex w-full flex-col items-center justify-center">
            <h1 className="text-4xl tracking-tighter">Clubz</h1>
            <h2 className="mb-3 text-center text-7xl">
              Elevate your night life
            </h2>
            <p className="mb-5 text-center text-xl">
              Access the hottest clubs and events effortlessly with Your ClubZ
              App
            </p>
            <Button className="bg-red-500 text-white">Add your Club</Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-xl capitalize text-red-500">
          Events by other clubs
        </span>
        <h1 className="text-6xl uppercase">New Events</h1>
        <Image className="mt-24" alt="Events" src={clubEvent} />
        <Image className="mt-24" alt="Drunked Daddy Event" src={drunkenDaddy} />
      </div>
      <div className="flex flex-col items-center mt-24">
        <span className="text-xl uppercase text-red-500">
          reviews
        </span>
        <h1 className="text-6xl uppercase mb-10">Testimonials</h1>
        <div className="flex flex-col gap-y-10 items-center">
        <Testimonial />
        <Testimonial />
        </div>
      </div>
    </div>
  );
};

export default page;
