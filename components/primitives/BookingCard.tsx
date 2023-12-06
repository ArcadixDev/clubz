import React, { ComponentProps } from "react";
import { Button } from "../ui/button";

const BookingCardRight = () => {
  return (
    <div className="bg-secondaryCard flex w-[500px] space-x-8 justify-self-start rounded-xl border border-white p-5 shadow-custom">
      <div className="mx-3 aspect-square h-[150px] w-[150px] rounded-full bg-red-600"></div>
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
    <div className="bg-secondaryCard flex w-[500px] space-x-11 justify-self-end rounded-xl border border-white p-5 shadow-custom">
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
      <div className="mx-3 aspect-square h-[150px] w-[150px] rounded-full bg-red-600"></div>
    </div>
  );
};

export { BookingCardLeft, BookingCardRight };
