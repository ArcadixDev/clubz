import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import React from "react";
import img from "@/public/assets/section1Image.png";
import map from "@/public/assets/map.png";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarIcon, ClockIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Overview, Photos } from "./tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const signupPageMetadata: Metadata = {
  metadataBase: new URL("https://clubz.tech"),
  title: {
    default: "Clubz - Sign Up",
    template: "%s | Clubz - Sign Up",
  },
  description:
    "Sign up for Clubz and unlock a world of exclusive nightlife experiences. Join now and get access to the hottest parties and club events.",
  openGraph: {
    title: "Clubz - Sign Up",
    description:
      "Join Clubz and explore exclusive nightlife experiences. Sign up now for access to the hottest parties and club events.",
    url: "https://clubz.tech/signup",
    siteName: "Clubz",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://clubz.tech/signup-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clubz Sign Up",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@Clubz",
    title: "Clubz - Sign Up",
    description:
      "Join Clubz and explore exclusive nightlife experiences. Sign up now for access to the hottest parties and club events.",
    images: [
      {
        url: "https://clubz.tech/signup-twitter-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clubz Sign Up",
      },
    ],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};


const page = () => {
  redirect("/search");
  // return (
  //   <div className="w-full flex-grow py-20">
  //     <div className="container mx-auto ">
  //       <div className="mb-10 grid w-full grid-cols-3 gap-6">
  //         <div className="col-span-2 w-full">
  //           <AspectRatio ratio={16 / 9}>
  //             <Image
  //               src={img}
  //               alt="Image"
  //               className="rounded-xl object-cover"
  //               fill
  //             />
  //           </AspectRatio>
  //           <div className="w-full pt-10">
  //             <Tabs
  //               defaultValue="overview"
  //               className="w-full rounded-xl bg-secondary"
  //             >
  //               <TabsList className="flex items-center justify-between">
  //                 <TabsTrigger
  //                   defaultChecked
  //                   value="overview"
  //                   className="flex-grow data-[state=active]:bg-transparent data-[state=active]:shadow-none"
  //                 >
  //                   Overview
  //                 </TabsTrigger>
  //                 <TabsTrigger
  //                   value="photos"
  //                   className="flex-grow data-[state=active]:bg-transparent data-[state=active]:shadow-none"
  //                 >
  //                   Photos
  //                 </TabsTrigger>
  //               </TabsList>
  //               <hr className="h-0.5 bg-white text-white" />
  //               <TabsContent value="overview">
  //                 <Overview />
  //               </TabsContent>
  //               <TabsContent value="photos">
  //                 <Photos />
  //               </TabsContent>
  //             </Tabs>
  //           </div>
  //         </div>
  //         <div className=" space-y-10">
  //           <Card className="rounded bg-gradient-to-b from-background to-red-950">
  //             <CardHeader>
  //               <CardTitle>Make Your Reservations</CardTitle>
  //             </CardHeader>
  //             <CardContent>
  //               <hr />
  //               <div>
  //                 <div>Party size</div>
  //                 <div>2 people</div>
  //               </div>
  //               <hr />
  //               <div>
  //                 <div className="flex space-x-3">
  //                   <CalendarIcon />
  //                   <span>Date</span>
  //                 </div>
  //                 <div>12 Dec</div>
  //               </div>
  //               <hr />
  //               <div>
  //                 <div className="flex space-x-3">
  //                   <ClockIcon />
  //                   <span>Time</span>
  //                 </div>
  //                 <div>18:00 to 22:00</div>
  //               </div>
  //             </CardContent>
  //             <CardFooter>
  //               <div>
  //                 <Button variant={"default"}>Book Now</Button>
  //               </div>
  //             </CardFooter>
  //           </Card>
  //           <div>
  //             <div className="pb-6 text-3xl font-semibold">Direction</div>
  //             <AspectRatio ratio={16 / 9}>
  //               <Image
  //                 src={map}
  //                 alt="Image"
  //                 className="rounded-md object-cover"
  //                 fill
  //               />
  //             </AspectRatio>
  //           </div>
  //         </div>
  //       </div>
  //       {/* // similar section  */}
  //       <div className=" mb-10 space-y-4">
  //         <div className="text-xl font-semibold text-secondary-foreground">
  //           Similar to this
  //         </div>
  //         <div className="flex items-center justify-between">
  //           <div className="w-[400px] space-y-3">
  //             <div className=" w-full">
  //               <AspectRatio ratio={3 / 2}>
  //                 <Image
  //                   src={img}
  //                   alt="Image"
  //                   className="rounded-xl object-cover"
  //                   fill
  //                 />
  //               </AspectRatio>
  //             </div>
  //             <div className="p-1">
  //               <div>Title</div>
  //               <div className="flex items-start space-x-2">
  //                 <div>
  //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  //                 </div>
  //                 <Button variant={"destructive"}>50% off</Button>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="w-[400px] space-y-3">
  //             <div className=" w-full">
  //               <AspectRatio ratio={3 / 2}>
  //                 <Image
  //                   src={img}
  //                   alt="Image"
  //                   className="rounded-xl object-cover"
  //                   fill
  //                 />
  //               </AspectRatio>
  //             </div>
  //             <div className="p-1">
  //               <div>Title</div>
  //               <div className="flex items-start space-x-2">
  //                 <div>
  //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  //                 </div>
  //                 <Button variant={"destructive"}>50% off</Button>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="w-[400px] space-y-3">
  //             <div className=" w-full">
  //               <AspectRatio ratio={3 / 2}>
  //                 <Image
  //                   src={img}
  //                   alt="Image"
  //                   className="rounded-xl object-cover"
  //                   fill
  //                 />
  //               </AspectRatio>
  //             </div>
  //             <div className="p-1">
  //               <div>Title</div>
  //               <div className="flex items-start space-x-2">
  //                 <div>
  //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  //                 </div>
  //                 <Button variant={"destructive"}>50% off</Button>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       {/* rate and review section  */}
  //       <div className="p-5">
  //         <div className="mb-10 flex items-start justify-between">
  //           <div>
  //             <div className="text-2xl font-semibold capitalize text-secondary-foreground">
  //               Rate & Review
  //             </div>
  //             <div className="mt-10 flex items-start justify-center space-x-10">
  //               <div>
  //                 <Badge
  //                   variant={"outline"}
  //                   className="flex items-center space-x-2 rounded-lg border border-white text-lg"
  //                 >
  //                   <div>4.5</div>
  //                   <StarFilledIcon className="h-6 w-6 text-yellow-500" />
  //                 </Badge>
  //                 <div className="text-center"> 212 votes </div>
  //               </div>
  //               <div className="w-[200px]">
  //                 <div className="flex w-full items-center space-x-5">
  //                   <span>5</span>
  //                   <Progress value={75} className="text-green-500" />
  //                 </div>
  //                 <div className="flex w-full items-center space-x-5">
  //                   <span>5</span>
  //                   <Progress value={60} />
  //                 </div>
  //                 <div className="flex w-full items-center space-x-5">
  //                   <span>5</span>
  //                   <Progress value={40} />
  //                 </div>
  //                 <div className="flex w-full items-center space-x-5">
  //                   <span>5</span>
  //                   <Progress value={22} />
  //                 </div>
  //                 <div className="flex w-full items-center space-x-5">
  //                   <span>5</span>
  //                   <Progress value={10} />
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div>Spinner goes here...</div>
  //         </div>
  //         <div className="mb-10 space-y-4">
  //           <div className="text-2xl font-semibold capitalize text-secondary-foreground">
  //             Rate this Place
  //           </div>
  //           <div className="flex items-center space-x-5">
  //             <StarFilledIcon />
  //             <StarFilledIcon />
  //             <StarFilledIcon />
  //             <StarFilledIcon />
  //             <StarFilledIcon />
  //           </div>
  //         </div>
  //         <div className=" mb-10 space-y-4">
  //           <div className="text-2xl font-semibold capitalize text-secondary-foreground">
  //             FAQs
  //           </div>
  //           <div>
  //             <Accordion type="single" collapsible>
  //               <AccordionItem value="item-1">
  //                 <AccordionTrigger>Is it accessible?</AccordionTrigger>
  //                 <AccordionContent>
  //                   Yes. It adheres to the WAI-ARIA design pattern.
  //                 </AccordionContent>
  //               </AccordionItem>
  //               <AccordionItem value="item-2">
  //                 <AccordionTrigger>Is it accessible?</AccordionTrigger>
  //                 <AccordionContent>
  //                   Yes. It adheres to the WAI-ARIA design pattern.
  //                 </AccordionContent>
  //               </AccordionItem>
  //               <AccordionItem value="item-3">
  //                 <AccordionTrigger>Is it accessible?</AccordionTrigger>
  //                 <AccordionContent>
  //                   Yes. It adheres to the WAI-ARIA design pattern.
  //                 </AccordionContent>
  //               </AccordionItem>
  //               <AccordionItem value="item-4">
  //                 <AccordionTrigger>Is it accessible?</AccordionTrigger>
  //                 <AccordionContent>
  //                   Yes. It adheres to the WAI-ARIA design pattern.
  //                 </AccordionContent>
  //               </AccordionItem>
  //             </Accordion>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default page;
