"use client";

import Image from "next/image";
import SamuelPicture from "@/app/public/samuelx.png";
// import { FaReact } from "react-icons/fa";
function page() {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-1 justify-between md:grid-cols-2 gap-4 md:gap ">
      <div className=" items-center text-center my-auto">
        <h1 className="text-3xl font-bold text-center md:text-start">Hello 👋, <br />I’m Samuel Ogbaje </h1>
      <p className="text-xl text-center my-4 md:text-start leading-8">
        I’m a software engineer, currently working remotely. I’m always looking for new opportunities to learn and grow.
      </p> 
     <div className=" text-center md:text-start">
      <button className="p-4 bg-green-800 rounded-md text-gray-200 hover:text-white my-4"> <a href="/contact">Let's connect 😉 </a></button>
     </div>
      </div>

      <div className="relative w-80 h-80  rounded-full bg-gradient-to-b from-teal-600 overflow-hidden mx-auto">
        <Image
          src={SamuelPicture}
          alt="Samuel's Snapchat profile picture"
          width={300}
          height={300}    
        />
      </div>
      </div>

    </div>
  );
}

export default page;
