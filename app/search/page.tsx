import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { MdLocationPin } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { apiEndpoint } from "@/lib/utils";
import { Suspense } from "react";
import { PopularSearchCard, TrendingPlaceCard } from "./Cards";
import {
  PopularSearchSkeleton,
  TrendingPlaceSkeletion,
} from "@/components/primitives/Skeletons";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const getData = async () => {
  const res = await fetch(`https://${process.env.API_KEY}.mockapi.io/clubz`, {
    method: "GET",
    headers: { "content-type": "application/json" },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  console.log(res);
  return res.json() ?? [];
};

const page = async () => {
  const data = await getData();

  return (
    <div className="container mx-auto flex-grow py-20">
      {/* <Navigation /> */}
      <div className="mb-20 space-y-10 px-5">
        <div className="flex items-center justify-between py-4">
          <div>Home / About / Contact</div>
          <div>
            <Badge variant={"secondary"} className="rounded-lg px-3 py-1.5">
              Name
            </Badge>
          </div>
        </div>
        <div className="jusity-between flex items-center space-x-3">
          <div className="relative flex flex-grow items-center">
            <Input
              placeholder="Search for places, cuisines and more"
              className=" rounded-full bg-zinc-700/10 py-5 pl-12 pr-7 capitalize"
            />
            <div className={`pointer-events-none absolute left-0 ml-4`}>
              <MdLocationPin className={`h-5 w-5`} />
            </div>
          </div>
          <div>
            <Button className="searchButton capitalize" variant={"ghost"}>
              search
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between space-x-6">
          <div>
            <Popover>
              <PopoverTrigger>
                <Button variant={"outline"}>Sort</Button>
              </PopoverTrigger>
              <PopoverContent sideOffset={10} align={`start`} className="w-fit">
                <RadioGroup defaultValue="comfortable" className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1">Relavance: Low to High</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1">Relavance: Low to High</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pricelh" id="plh" />
                    <Label htmlFor="plh">Price: Low to High</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pricehl" id="phl" />
                    <Label htmlFor="phl">Price: High to Low</Label>
                  </div>
                </RadioGroup>
              </PopoverContent>
            </Popover>

            {/* <DropdownMenu>
              <DropdownMenuTrigger className="focus-visible:ring-0">
                <Button variant={"outline"}>Sort</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
          </div>
          <div className="flex-grow bg-white">contents</div>
          <div>filter</div>
        </div>
      </div>
      <div className="mb-20">
        <div className="text-3xl font-bold ">Relavant Searches</div>
        <div className="flex flex-wrap justify-center gap-10 py-6">
          {data.slice(0, 10).map((club) => {
            return <TrendingPlaceCard key={club.id} />;
          })}
        </div>
      </div>

      <div className="mb-20">
        <div className="text-3xl font-bold ">Popular searches....</div>
        <div className="mx-auto flex w-full flex-wrap justify-center gap-10 px-2 py-6">
          {data.slice(0, 10).map((club) => {
            return (
              <PopularSearchCard
                key={club.id}
                image={club.avatar}
                name={club.name}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-20">
        <div className="text-3xl font-bold ">Trending Places</div>
        <div className=" mt-5 flex gap-10">
          <TrendingPlaceCard />
          <TrendingPlaceCard />
          <TrendingPlaceCard />
        </div>
      </div>
    </div>
  );
};

export default page;
