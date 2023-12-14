"use client";

import { createUrl } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Badge } from "@/components/ui/badge";

const SortAndFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlParams = new URLSearchParams(searchParams.toString());
  const [alcohol, setAlcohol] = useState<string>(
    searchParams.get("alcohol") === "true" ? "alcohol" : "noAlcohol",
  );
  const [people, setPeople] = useState<string>(
    searchParams.get("people") ?? "",
  );

  console.log(
    "state alcohol => ",
    alcohol,
    typeof searchParams.get("alcohol"),
    searchParams.get("alcohol") === "true",
  );
  const [price, setPrice] = useState<string>(searchParams.get("price") ?? "");
  //   console.log("values => ", { price, people, type });
  const toggelAlcohol = (value: string) => {
    // if(value === 'alcohol'){

    // }
    console.log("value => ", value);
    if (value === "alcohol") {
      urlParams.set("alcohol", "true");
    } else {
      urlParams.set("alcohol", "false");
    }
    router.push(createUrl("/search", urlParams));
  };

  const toggleFilters = (values: string[]) => {
    console.log("values => ", values);
    if (values.includes("open")) {
      urlParams.set("isOpen", "true");
    } else urlParams.delete("isOpen");

    if (values.includes("rating")) {
      urlParams.set("rating", "4-above");
    } else urlParams.delete("rating");

    router.push(createUrl("/search", urlParams));
  };
  return (
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
      </div>
      <div className="flex flex-grow justify-end space-x-5">
        <ToggleGroup
          type="single"
          variant={"outline"}
          className="space-x-5 hover:bg-none data-[state=on]:bg-none"
          defaultValue={alcohol}
          onValueChange={toggelAlcohol}
        >
          <ToggleGroupItem
            value="alcohol"
            aria-label="Toggle Alcohol"
            className="hover:bg-transparent"
          >
            <span>Alcohol</span>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="noAlcohol"
            aria-label="Toggle noAlcohol"
            className="hover:bg-transparent"
          >
            <span>No Alcohol</span>
          </ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup
          type="multiple"
          onValueChange={toggleFilters}
          variant={"outline"}
          className="space-x-5 hover:bg-none data-[state=on]:bg-none"
        >
          <ToggleGroupItem
            value="open"
            aria-label="Toggle open"
            className="hover:bg-transparent"
          >
            <span>Open</span>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="rating"
            aria-label="Toggle rating"
            className="hover:bg-transparent"
          >
            <span>Rating 4+</span>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
};

export default SortAndFilters;
