import cover from "../../../../public/assets/club3.jpg";
import profile from "../../../../public/assets/club1.jpg";
import Image from "next/image";
import EditForm from "./edit-form";
export default function editClub() {
  return (
    <div className="relative mx-10">
      <div className="h-56 overflow-hidden">
        <Image src={cover} alt="Cover Image" />
      </div>
      
      <Image
        className="absolute top-36 left-5 z-50 w-36 h-36 rounded-full"
        src={profile}
        alt="Profile Picture"
      />
      <span className="absolute top-48 left-44 z-50 text-xl font-bold">
        Club Owner Name
      </span>

      <span className="absolute top-56 left-44 text-xl font-bold underline">
        Club Name
      </span>

      <div className="w-full bg-muted min-h-screen pt-24 pb-20 px-10">
        <h1 className="text-2xl font-bold">Edit Club Details</h1>
        <EditForm />
      </div>
    </div>
  );
}
