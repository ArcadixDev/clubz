import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdLocationPin } from "react-icons/md";
import { PopularSearchCard, RelevantSearches } from "./Cards";
import SortAndFilters from "./sorting-and-filters";
import { Club } from "@prisma/client";
import { clubs } from "@/data/data";

const getData = async () => {
  //   const res = await fetch(`https://${process.env.API_KEY}.mockapi.io/club`, {
  //     method: "GET",
  //     headers: { "content-type": "application/json" },
  //   });
  //   if (!res.ok) {
  //     // This will activate the closest `error.js` Error Boundary
  //     throw new Error("Failed to fetch data");
  //   }

  //   console.log(res);
  //   return res.json() ?? [];
  return clubs || [];
};

type Data = Club & { image: string };

const page = async () => {
  const data: any[] = await getData();

  return (
    <div className="container mx-auto flex-grow py-20">
      {/* <Navigation /> */}
      <SortAndFilters />
      <RelevantSearches clubs={data} />
      {/* <div className="mb-20">
        <div className="text-3xl font-bold ">Relavant Searches</div>
        <div className="flex flex-wrap justify-center gap-10 py-6">
          {data.slice(0, 10).map((club) => {
            return <TrendingPlaceCard key={club.id} club={club} />;
          })}
        </div>
      </div> */}

      <div className="mb-20">
        <div className="text-3xl font-bold ">Popular searches....</div>
        <div className="mx-auto flex w-full flex-wrap justify-center gap-10 px-2 py-6">
          {data.slice(0, 10).map((club) => {
            return (
              <PopularSearchCard
                key={club.id}
                image={club.image}
                name={club.name}
              />
            );
          })}
        </div>
      </div>
      {/* <div className="mb-20">
        <div className="text-3xl font-bold ">Trending Places</div>
        <div className=" mt-5 flex gap-10">
          <TrendingPlaceCard />
          <TrendingPlaceCard />
          <TrendingPlaceCard />
        </div>
      </div> */}
    </div>
  );
};

export default page;
