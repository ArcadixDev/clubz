import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { MdLocationPin } from "react-icons/md";

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

const PopularSearchCard = () => {
  return (
    <div className="text-center">
      <div className="mb-2">
        <Skeleton className="aspect-square h-24 rounded-full" />
      </div>
      <div>
        <div>Club Name</div>
      </div>
    </div>
  );
};

const page = () => {
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
        <div className="relative flex items-center">
          <Input
            placeholder="Search for places, cuisines and more"
            className=" rounded-full bg-zinc-700/10 py-5 pl-12 pr-7 capitalize"
          />
          <div className={`pointer-events-none absolute left-0 ml-4`}>
            <MdLocationPin className={`h-5 w-5`} />
          </div>
        </div>
      </div>
      <div className="mb-20">
        <div className="text-3xl font-bold ">Popular searches....</div>
        <div className="mx-auto flex w-full flex-wrap justify-center gap-10 p-5">
          <PopularSearchCard />
          <PopularSearchCard />
          <PopularSearchCard />
          <PopularSearchCard />
          <PopularSearchCard />
          <PopularSearchCard />
          <PopularSearchCard />
          <PopularSearchCard />
          <PopularSearchCard />
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
