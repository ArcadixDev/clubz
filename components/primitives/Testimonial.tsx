import Image from "next/image"
import club1 from "../../public/assets/club1.jpg"
import { Button } from "../ui/button"
import { StarFilledIcon } from "@radix-ui/react-icons"

export default function Testimonial() {
  return (
    <div className="flex w-5/6 border borde-white">
      <Image className="w-1/3" src={club1} alt="Testimonial Image" />
      <div className="flex flex-col py-10 pl-10 pr-20">
        <h1 className="text-3xl">I like my money where i can see it : Hanging in my wallet</h1>
        <div className="flex items-center gap-x-3 mt-5">
            <span className="w-3/4 h-[1px] bg-white"></span>
            <span className="text-2xl italic">Tinku</span>
        </div>
        <p className="text-xl mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus beatae quos totam. Ipsam veritatis, corporis libero quisquam minima, ad nihil facere quia in accusamus, iste sit impedit! Saepe consequuntur dolore ipsa tempora.
        </p>
        <div className="flex gap-x-10 items-center mt-5">
            <Button>View Gallery</Button> 
            <div className="flex gap-x-2">
            <StarFilledIcon className="h-6 w-6 text-yellow-500" />
            <StarFilledIcon className="h-6 w-6 text-yellow-500" />
            <StarFilledIcon className="h-6 w-6 text-yellow-500" />
            <StarFilledIcon className="h-6 w-6 text-yellow-500" />
            <StarFilledIcon className="h-6 w-6" />
            </div>
        </div>
      </div>
    </div>
  )
}
