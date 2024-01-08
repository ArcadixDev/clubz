import { Badge } from "@/components/ui/badge";
import { StarFilledIcon } from "@radix-ui/react-icons";
import photoImage from "@/public/assets/section1Image0.png";
import Image from "next/image";

const Overview = (props:{name: string, description: string, rating: number}) => {
  let { name, description, rating } = props;
  const stars = [];
  rating > 5 ? rating = rating % 5 : rating;
  for (let i = 0; i < rating; i++) {
    stars.push(<StarFilledIcon className="h-6 w-6 text-yellow-500" />);
  }
  return (
    <div className="flex flex-col gap-y-6 p-4 font-serif">
      {/* <div className="headerSection px-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-4xl font-semibold">Title</div>
            <div className="mt-4 text-sm text-secondary-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <Badge
            variant={"outline"}
            className="flex items-center space-x-2 rounded-lg border border-white text-lg"
          >
            <div>4.5</div>
            <StarFilledIcon className="h-6 w-6 text-yellow-500" />
          </Badge>
        </div>
        <div className="flex h-96 items-center">
          <span>More content goes here....</span>
        </div>
      </div> */}
      <div className="flex flex-col">
        <h1 className="mb-3 text-3xl">Overview</h1>
        
        <p>
          {name}{" "}{description}
        </p>
      </div>
      <div>
        <h1 className="mb-3 text-3xl">Opening Hours</h1>
        <div className="flex flex-col gap-y-3 border-y border-dotted py-2">
          <span>Mon - Thu 10:00 - 22:00</span>
          <span className="border-y border-dotted py-2">
            Fri - Sat 10:00 - 23:00
          </span>
          <span>Sun Closed</span>
        </div>
      </div>
      <div>
        <h1 className="mb-3 text-3xl">Rating</h1>
        <div className="flex gap-x-2">
          {stars}
        </div>
      </div>
    </div>
  );
};

const Photos = () => {
  return (
    <div className="p-4">
      <h1 className="mb-3 text-3xl">Photos</h1>
      <div className="flex justify-between">
        <Image
          className="aspect-square h-20 w-20 md:h-60 md:w-60 rounded-full"
          height={200}
          width={200}
          src={photoImage}
          alt="image alternative for photos"
        />
        <Image
          className="aspect-square h-20 w-20 md:h-60 md:w-60 rounded-full"
          height={200}
          width={200}
          src={photoImage}
          alt="image alternative for photos"
        />
        <Image
          className="aspect-square h-20 w-20 md:h-60 md:w-60 rounded-full"
          height={200}
          width={200}
          src={photoImage}
          alt="image alternative for photos"
        />
      </div>
      <div className="my-5 h-[2px] w-full bg-white"></div>

      <div className="flex gap-x-2">
        <div className="grid grid-cols-2 gap-x-3">
          <Image
            className="roudned-md"
            height={500}
            width={1000}
            src={photoImage}
            alt="image alternative for photos"
          />
          <Image
            className="roudned-md"
            height={500}
            width={1000}
            src={photoImage}
            alt="image alternative for photos"
          />
        </div>
      </div>
    </div>
  );
};

export { Overview, Photos };
