"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { Suspense } from "react";

const TrendingPlaceCard = () => {
  return (
    <div>
      <div className="pb-4">
        <AspectRatio ratio={16 / 9}>
          <Skeleton className="aspect-[16/9] h-full w-full rounded-md" />
        </AspectRatio>
      </div>
      <div>
        <div className="mb-2 text-3xl font-semibold">Title</div>
        <div className="flex gap-5">
          <div>
            Description goes here whatever it is, Description goes here whatever
            it is....
          </div>
          <div>
            <Button variant={"destructive"}>50% Off</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PopularSearchCard = ({
  image,
  name,
}: {
  image: string;
  name?: string;
}) => {
  return (
    <div className="text-center">
      <div className="mb-2">
        {/* <Suspense
          fallback={<Skeleton className="aspect-square h-24 rounded-full" />}
        > */}
        <Image
          src={image}
          alt={image}
          height={100}
          width={100}
          className="rounded-full"
        />
        {/* </Suspense> */}
        {/* {image ? (
		  ) : (
			
		  )} */}
      </div>
      <div>
        {name ? (
          <div>{name}</div>
        ) : (
          <Skeleton className={"h-5 w-full rounded-full"}></Skeleton>
        )}
      </div>
    </div>
  );
};
export { PopularSearchCard, TrendingPlaceCard };
