import React, { ComponentProps } from "react";
import { Button } from "../ui/button";
import club3 from "../../public/assets/club3.jpg";
import club4 from "../../public/assets/club4.jpg";
import Image from "next/image";

const BookingCardRight = () => {
  return (
    <div className="flex md:w-[500px] space-x-8 justify-self-start rounded-xl border border-white bg-zinc-900/70 p-4 shadow-custom">
      <div className="mx-3 aspect-square h-[125px] w-[125px] rounded-full  bg-red-600">
        <Image className="h-[125px] w-[125px] object-cover rounded-full" alt="Club3" src={club3}/>
      </div>
      <div className="space-y-4">
        <div className="text-4xl font-semibold">Title</div>
        <div>
          Your confirmatin recipt will be mailed to you within the next 5 to 10
          minutes
        </div>
        <div className=" py-3">
          <Button variant={"destructive"}>Book Now</Button>
        </div>
      </div>
    </div>
  );
};

const BookingCardLeft = () => {
  return (
    <div className="flex md:w-[500px] space-x-11 justify-self-end rounded-xl border border-white bg-zinc-900/70 p-4 shadow-custom">
      <div className="space-y-4 text-right">
        <div className="text-4xl font-semibold">Title</div>
        <div>
          Your confirmatin recipt will be mailed to you within the next 5 to 10
          minutes
        </div>
        <div className=" py-3">
          <Button variant={"destructive"}>Book Now</Button>
        </div>
      </div>
      <div className="mx-3 aspect-square h-[125px] w-[125px] rounded-full bg-red-600">
      <Image className="h-[125px] w-[125px] object-cover rounded-full" alt="Club3" src={club4}/>
      </div>
    </div>
  );
};

export { BookingCardLeft, BookingCardRight };
