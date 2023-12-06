import { Badge } from "@/components/ui/badge";
import { StarFilledIcon } from "@radix-ui/react-icons";
import React from "react";

const Overview = () => {
  return (
    <div className="p-4">
      <div className="headerSection px-3">
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
      </div>
    </div>
  );
};

const Photos = () => {
  return <div className="p-4">This is Photos Component</div>;
};

const About = () => {
  return <div className="p-4">This is About Component</div>;
};

const Review = () => {
  return <div className="p-4">This is Review Component</div>;
};

export { Overview, Photos, About, Review };
