import React from 'react'
import cover from "../../../../public/assets/club3.jpg";
import profileImg from "../../../../public/assets/club1.jpg";
import Image from "next/image";
import EditForm from './edit-form';
export default function profile() {
  return (
    <div className="relative mx-24">
      <div className="h-56 overflow-hidden">
        <Image src={cover} alt="Cover Image" />
      </div>
      
      <div className="w-full bg-gray-700 min-h-min py-20 px-10">
        
        <EditForm/>
      </div>
    </div>
  )
}
