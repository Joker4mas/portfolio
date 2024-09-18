"use client";

import Image from "next/image";
import SamuelPicture from "@/app/public/samuelx.png";
// import { FaReact } from "react-icons/fa";
function page() {
  return (
      <div className=" grid grid-cols-1 justify-between md:grid-cols-2 gap-8 mb-12 p-4">
      <div className="p-2 items-center text-center  md:p-8 md:l-24">
        <h1 className="text-3xl font-bold text-center md:text-start ">Hello 👋, <br />I’m Samuel Ogbaje </h1>
      <p className="text-xl text-center my-4 md:text-start leading-8">
        I’m a software engineer, currently working remotely. I’m always looking for new opportunities to learn and grow.
      </p> 
     <div className=" text-center md:text-start">
      <button className="p-4 bg-green-800 rounded-md text-gray-200 hover:text-white my-4"> <a href="/contact">Let’s connect 😉 </a></button>
     </div>
      </div>

      <div className=" py-4 mx-auto  items-center md:mx-0 md:ml-24">
      <div className="relative w-80 h-80  rounded-full bg-gradient-to-b from-teal-600 overflow-hidden text-center items-center md:ml-40 ">
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
