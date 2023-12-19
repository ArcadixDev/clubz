import {
  IoIosArrowRoundBack,
  IoIosNotificationsOutline,
  IoIosArrowRoundDown,
} from "react-icons/io";
import { Checkbox } from "@/components/ui/checkbox";

import Link from "next/link";

export default function notifications() {
  return (
    <div className="mx-24 mt-16 flex flex-col">
      <Link href={""} className="flex items-center gap-x-3 text-2xl">
        {" "}
        <IoIosArrowRoundBack /> Notifications <IoIosNotificationsOutline />{" "}
      </Link>
      <span className="ml-auto flex items-center gap-x-3 text-xl">
        Recent <IoIosArrowRoundDown className="h-6 w-6" />
      </span>
      <hr className="my-5" />

      <div className="flex gap-y-5 min-h-min flex-col rounded-lg bg-muted bg-opacity-40 p-10">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
            exercitationem!
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
            exercitationem!
          </label>
        </div>
      </div>

      <div className="flex gap-y-5 min-h-min flex-col rounded-lg bg-muted bg-opacity-40 p-10 mt-10">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
            exercitationem!
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
            exercitationem!
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
            exercitationem!
          </label>
        </div>
      </div>
    </div>
  );
}
