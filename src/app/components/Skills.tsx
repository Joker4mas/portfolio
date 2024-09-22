"use client";
import Image from "next/image";
import JsLogo from "@/app/public/js.svg";
import NextLogo from "@/app/public/nextjs.svg";
import ReactLogo from "@/app/public/react.svg";
import TailwindLogo from "@/app/public/tailwind.svg";
import VueLogo from "@/app/public/vue.svg";
import NodeLogo from "@/app/public/nodejs.svg";

function Skills() {
  return (
    <div className=" mb-12 p-4 items-center text-center bg-slate-700">
      <h1 className="my-8 font-bold  text-3xl">Stacks</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 text-gray-400 items-center h-screen">
        
          <div className="flex flex-col  text-center items-center mx-auto p-4 my-4 rounded-md shadow-lg bg-base-300">
            <h3 className="my-4 font-bold">React</h3>
            <Image src={ReactLogo} alt="react-svg" width={100} height={100} />
          </div>
        
          <div className="flex flex-col  text-center bg-base-50  items-center mx-auto p-4 my-4 rounded-lg shadow-md">
            <h3 className="my-4 font-bold">Nextjs</h3>
            <Image src={NextLogo} alt="tailwindCss" width={100} height={100} 
            />
          </div>
          <div className="flex flex-col  text-center items-center mx-auto p-4 my-4 rounded-md shadow-lg bg-base-300">
            <h3 className="my-4 font-bold">Vue</h3>
            <Image src={VueLogo} alt="tailwindCss" width={100} height={100} />
          </div>
         
          <div className="flex flex-col  text-center items-center mx-auto p-4 my-4 rounded-md shadow-lg bg-base-300 ">
            <h3 className="my-4 font-bold">Node.js</h3> 
         <Image src={NodeLogo} alt="tailwindCss" width={100} height={100} />
          </div>

          <div className="flex flex-col   text-center items-center mx-auto p-4 my-4 rounded-md shadow-lg ">
            <h3 className="my-4 font-bold">Tailwind CSS</h3>
          <div>
          <Image
              src={TailwindLogo}
              alt="tailwindCss"
              width={100}
              height={100}
            //   className="bg-slate-300"
            />
          </div>
          </div>

          <div className="flex flex-col  text-center items-center mx-auto p-4 my-4 rounded-md shadow-lg bg-base-300">
            <h3 className="my-4 font-bold">JavaScript</h3>
            <Image src={JsLogo} alt="tailwindCss" width={100} height={100} />
          </div>
      </div>
    </div>
  );
}

export default Skills;
