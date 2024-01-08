import Image from "next/image";
import React from "react";
import img from "@/public/assets/section1Image.png";
// import map from "@/public/assets/map.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import  Map  from "@/components/primitives/Map";
import { Overview, Photos } from "../tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


import Link from "next/link";
import { useSession } from "next-auth/react";
import BookingForm from "./booking-form";
import { auth } from "@/app/auth";
import { Session } from "next-auth/types";
import { clubs as res } from "@/data/data";

export default async function page({ params }: { params: { clubId: string } }) {
  //   const [date, setDate] = React.useState<Date | undefined>(new Date());
  const session = await auth();
  const { name, email } = session?.user || { user: "", email: "" };

  //   const data = await fetch(
  //     `https://6575172cb2fbb8f6509ce2fa.mockapi.io/club?slug=${params.clubId}`,
  //     // `https://657ae4e9394ca9e4af12fbb2.mockapi.io/clubz?slug=${params.clubId}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     },
  //   );
  //   const res = await data.json();
  

  return (
    <div className="w-full flex-grow py-20">
      <div className="container mx-auto ">
        <div className="mb-10 grid w-full grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 w-full">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={img}
                alt="Image"
                className="rounded-xl object-cover"
                fill
              />
            </AspectRatio>
            <div className="mb-10 w-full pt-10">
              <Tabs
                defaultValue="overview"
                className="w-full rounded-xl bg-secondary"
              >
                <TabsList className="flex items-center justify-between">
                  <TabsTrigger
                    defaultChecked
                    value="overview"
                    className="flex-grow data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="photos"
                    className="flex-grow data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    Photos
                  </TabsTrigger>
                </TabsList>
                <hr className="h-0.5 bg-white text-white" />
                <TabsContent value="overview">
                  <Overview
                    name={res[0].name}
                    description={res[0].description}
                    rating={res[0].rating}
                  />
                </TabsContent>
                <TabsContent value="photos">
                  <Photos />
                </TabsContent>
              </Tabs>
            </div>
            <div className="hidden md:block mb-10 space-y-4">
              <div className="text-2xl font-semibold capitalize text-secondary-foreground">
                FAQs
              </div>
              <div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          {/* Right Pane  */}
          <div>
            {/* Booking and Contact Section */}
            <h1 className="mb-10 font-serif text-center md:text-left text-2xl md:text-4xl text-red-500">
              <span className="font-bold">Bookings</span> & Contact
            </h1>
            <BookingForm clubId={params.clubId} name={name} email={email} tickets={res[0].ticket} />

            {/* Contact Info */}
            <div>
              <h1 className="m-10 text-center font-serif text-3xl text-red-500">
                Contact Info
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-x-5">
              <div className="mb-10 flex justify-between flex-col gap-y-3">
                <div>
                  <h2>Phone</h2>
                  <Link
                    href={"tel:"}
                    className="font-thin underline underline-offset-4"
                  >
                    {res[0].phone}
                  </Link>
                </div>

                <div>
                  <h2>Email</h2>
                  <Link
                    href={"mailto:"}
                    className=" underline underline-offset-4"
                  >
                    {"mail@google.com"}
                  </Link>
                </div>
              </div>
              <div className="w-full h-auto md:w-[450px] md:h-[250px]">
                <Map position={[22.518,88.3832]}/>
              </div>
              </div>
              <div className="mb-10 space-y-4 md:hidden mt-10">
              <div className="text-2xl text-center font-semibold capitalize text-secondary-foreground">
                FAQs
              </div>
              <div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
