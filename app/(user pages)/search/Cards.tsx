"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Club } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const TrendingPlaceCard = ({ club }: { club?: Club }) => {
  console.log("card => ", club);
  return (
    <Link href={`/clubs/${club?.id}`} className=" max-w-sm">
      <div className="pb-4">
        <AspectRatio ratio={16 / 9}>
          <Skeleton className="aspect-[16/9] h-full w-full rounded-xl" />
        </AspectRatio>
      </div>
      <div>
        <div className="mb-2 text-3xl font-semibold">
          {club?.name ?? "Title"}
        </div>
        <div className="flex gap-5">
          <div>
            {club?.description ??
              "Description goes here whatever it is, Description goes here whatever it is...."}
          </div>
          <div>
            <Button variant={"destructive"}>50% Off</Button>
          </div>
        </div>
      </div>
    </Link>
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
    <div className="max-w-[110px]">
      <Image
        src={image}
        alt={image}
        height={100}
        width={100}
        className="mb-2 rounded-full"
      />
      {name ? (
        <div className="truncate">{name}</div>
      ) : (
        <Skeleton className={"h-5 w-full rounded-full"}></Skeleton>
      )}
    </div>
  );
};

const RelevantSearches = ({ clubs = [] }: { clubs: Club[] }) => {
  const searchParams = useSearchParams();
  let data = clubs;

  // if (searchParams.get("alcohol") === "true") {
  //   console.log(searchParams.get("alcohol"));
  //   data = data.filter((club) => club.alcohol);
  // }

  if (searchParams.get("q")) {
    data = data.filter((club) =>
      club.name
        .toLowerCase()
        .includes(searchParams.get("q") ?? "".toString()?.toLowerCase()),
    );
  }

  if (searchParams.get("q")) {
    data = data.filter((club) =>
      club.name
        .toLowerCase()
        .includes(searchParams.get("q") ?? "".toString()?.toLowerCase()),
    );
  }

  if (searchParams.get("open") === "true") {
    console.log("implement logic for filterting out open clubz");
    // Implement logic for filtering out open clubz
  }

  if (searchParams.get("rating") === "4-plus") {
    console.log(
      "Implement logic for filtering out clubs with rating 4 and above",
    );
    // Implement logic for filtering out clubz with rating 4 and above.
  }

  if (searchParams.get("people")) {
    // Implement logic for number of people that the user is searching the ticket for, and filtering clubz with that many tickets availabale to sell.
  }

  if (searchParams.get("price")) {
    // Implement logic for clubz with price that is less than or equal to the original club size.
  }

  return (
    <div className="mb-20">
      <div className="text-3xl font-bold ">Relavant Searches</div>
      <div className="flex flex-wrap justify-center gap-10 py-6">
        {data.length > 0 ? (
          data.slice(0, 10).map((club) => {
            return <TrendingPlaceCard key={club.id} club={club} />;
          })
        ) : (
          <span className="text-xl font-semibold">No Results found :(</span>
        )}
      </div>
    </div>
  );
};

export { PopularSearchCard, TrendingPlaceCard, RelevantSearches };
