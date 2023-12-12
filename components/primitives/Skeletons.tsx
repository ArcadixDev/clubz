import React from "react";
import { Skeleton } from "../ui/skeleton";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";

const TrendingPlaceSkeletion = () => {
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

const PopularSearchSkeleton = () => {
  return (
    <div className="text-center">
      <div className="mb-2">
        <Skeleton className="aspect-square h-24 rounded-full" />
      </div>
      <div>
        <Skeleton className={"h-5 w-full rounded-full"}></Skeleton>
      </div>
    </div>
  );
};
export { PopularSearchSkeleton, TrendingPlaceSkeletion };
