"use client";

import { createUrl } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  useCallback,
  useState,
} from "react";
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
import { Input } from "@/components/ui/input";
import { MdLocationPin } from "react-icons/md";

const SortAndFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlParams = new URLSearchParams(searchParams.toString());
  const [input, setInput] = useState<string>(searchParams.get("q") ?? "");
  const [people, setPeople] = useState<string>(
    searchParams.get("people") ?? "",
  );

  const [price, setPrice] = useState<string>(searchParams.get("price") ?? "");
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    urlParams.set("q", e.target.value);
    // console.log("value to be added to the q params", input);
    router.push(createUrl("/search", urlParams));
  };

  const handleSearch = () => {
    // urlParams.set("q", input);
    console.log("value to be added to the q params", input);
    // router.push(createUrl("/search", urlParams));
  };

  return (
    <div className="mb-20 space-y-10 px-5">
      <div className="jusity-between flex items-center space-x-3">
        <div className="relative flex flex-grow items-center">
          <Input
            value={input}
            onChange={handleChange}
            placeholder="Search for places, cuisines and more"
            className=" rounded-full bg-zinc-700/10 py-5 pl-12 pr-7 capitalize"
          />
          <div className={`pointer-events-none absolute left-0 ml-4`}>
            <MdLocationPin className={`h-5 w-5`} />
          </div>
        </div>
        <div>
          <Button
            className="searchButton capitalize"
            variant={"ghost"}
            onClick={handleSearch}
          >
            search
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between space-x-6">
        <div>
          <Popover>
            <PopoverTrigger>Sort</PopoverTrigger>
            <PopoverContent sideOffset={10} align={`start`} className="w-fit">
              <RadioGroup defaultValue="comfortable" className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="relevancelh" id="rlh" />
                  <Label htmlFor="rlh">Relavance: Low to High</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="relevancehl" id="rhl" />
                  <Label htmlFor="rhl">Relavance: High to Low</Label>
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
    </div>
  );
};

export default SortAndFilters;
