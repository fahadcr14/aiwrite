"use client" // 👈 use it here

import "../globals.css";
import ChatWidget from "./components/chatwidget"
import { BiSolidSend } from "react-icons/bi";
import {AiOutlineYoutube} from "react-icons/ai"
import { PiFacebookLogo } from "react-icons/pi";
import { TbBrandGooglePodcasts } from "react-icons/tb";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

export default function ToolsWdiget() {
  const [activetool, setToolActive] = useState("");

  const handle_tool_prompt = (toolname) => {
    setToolActive(toolname)
    navigateToYouTubeVideoDesc(toolname)
    console.log(" ");
  }
  const router = useRouter();

  // Define your function that should trigger the navigation
  const navigateToYouTubeVideoDesc = (toolname) => {
    router.push(`/tools/${toolname}`);
  };

  return (
    <>
    {!activetool ? (
    <div className="flex flex-col gap-4 text-5xl text-white text-center typographica  mt-8 ">
      <h1>Ai Powered GPT-4 Plus Tool</h1>
      <div className="w-full flex flex-row grid md:grid-cols-3 p-8 gap-12 overflow--hidden">
      <div className="  relative inline-flex    hover:scale-105 duration-1000 ">
        <div
            className={`absolute transitiona-all duration-1000 opacity-100 -inset-px bg-sky-400 rounded-xl blur-xl bg-opacity-50 bg-opacity-50   duration-1000 animate-tilt`}>
        </div>
        <ul className="relative inline-flex shadow-xl  cursor-default bg-neutral-900 p-4 rounded-xl bg-opacity-100 flex flex-col items-center justify-center ">
        <AiOutlineYoutube size={64}/>
        <h1 className="mb-1 bg-gradient-to-r from-cyan-200 to-blue-500 bg-clip-text text-xl text-transparent poppins-bold ">
        Generate Youtube Video Ideas
      </h1>        
      <p className="text-sm poppins-regular opacity-80">Boost your YouTube channel with our easy-to-use video idea generator. Get more views and subscribers by creating engaging and trending videos.</p>
      <div className="hover:opacity-40 hover:scale-105 mt-4 cursor-pointer ml-4 flex w-24 p-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-lg rounded-xl">
              <button className="flex flex-row items-center justify-center w-full"
              onClick={()=>{handle_tool_prompt("Generate Youtube Video Ideas")}}
              >Start
                <BiSolidSend size={22} />
              
              </button>
      </div>
      </ul>
      </div>
      <div className="   relative inline-flex  group  hover:scale-105 duration-1000 ">
        <div
            className={`absolute transitiona-all duration-1000 opacity-100 -inset-px bg-sky-400 rounded-xl blur-xl bg-opacity-50 bg-opacity-50   duration-1000 animate-tilt`}>
        </div>
        <ul className="relative shadow-xl  cursor-default bg-neutral-900 p-4 rounded-xl bg-opacity-100 flex flex-col items-center justify-center ">
        <AiOutlineYoutube size={64}/>
        <h1 className="mb-1 bg-gradient-to-r from-cyan-200 to-blue-500 bg-clip-text text-xl text-transparent poppins-bold ">
        Generate Youtube Video Description
      </h1>        
      <p className="text-sm poppins-regular opacity-80">Maximize your video"s search ranking potential with our powerful tool for crafting optimized video descriptions.</p>
      <div className="hover:opacity-40 hover:scale-105 mt-4 cursor-pointer ml-4 flex w-24 p-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-lg rounded-xl">
      <button className="flex flex-row items-center justify-center w-full"
              onClick={()=>{handle_tool_prompt("Generate Youtube Video Description")}}
              >Start
                <BiSolidSend size={22} />
              
              </button>
      </div>
      </ul>
      </div>
      <div className="   relative inline-flex  group  hover:scale-105 duration-1000 ">
        <div
            className={`absolute transitiona-all duration-1000 opacity-100 -inset-px bg-sky-400 rounded-xl blur-xl bg-opacity-50 bg-opacity-50  duration-1000 animate-tilt`}>
        </div>
        <ul className="relative shadow-xl  cursor-default bg-neutral-900 p-4 rounded-xl bg-opacity-100 flex flex-col items-center justify-center ">
        <PiFacebookLogo size={64}/>
        <h1 className="mb-1 bg-gradient-to-r from-cyan-200 to-blue-500 bg-clip-text text-xl text-transparent poppins-bold ">
        Generate Facebook Video Description
      </h1>        
      <p className="text-sm poppins-regular opacity-80">
      Unlock the potential of your Facebook video with our cutting-edge description generator. Craft engaging and enticing descriptions to captivate your audience.
              </p>
      <div className="hover:opacity-40 hover:scale-105 mt-4 cursor-pointer ml-4 flex w-24 p-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-lg rounded-xl">
      <button className="flex flex-row items-center justify-center w-full"
              onClick={()=>{handle_tool_prompt("Generate Facebook Video Description")}}
              >Start
                <BiSolidSend size={22} />
              
              </button>
      </div>
      </ul>
      </div>
      <div className="   relative inline-flex  group  hover:scale-105 duration-1000 ">
        <div
            className={`absolute transitiona-all duration-1000 opacity-100 -inset-px bg-sky-400 rounded-xl blur-xl bg-opacity-50 bg-opacity-50  duration-1000 animate-tilt`}>
        </div>
        <ul className="relative shadow-xl  cursor-default bg-neutral-900 p-4 rounded-xl bg-opacity-100 flex flex-col items-center justify-center ">
        <TbBrandGooglePodcasts size={64}/>
        <h1 className="mb-1 bg-gradient-to-r from-cyan-200 to-blue-500 bg-clip-text text-xl text-transparent poppins-bold ">
        Ai Podcast Script
      </h1>        
      <p className="text-sm poppins-regular opacity-80">
      Introducing our AI-powered podcast script tool. Simplify your content creation process, generate engaging podcast scripts effortlessly, and keep your audience captivated with cutting-edge AI technology.              </p>
      <div className="hover:opacity-40 hover:scale-105 mt-4 cursor-pointer ml-4 flex w-24 p-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-lg rounded-xl">
      <button className="flex flex-row items-center justify-center w-full"
              onClick={()=>{handle_tool_prompt("Ai Podcast Script")}}
              >Start
                <BiSolidSend size={22} />
              
              </button>
      </div>
      </ul>
      </div>

      </div>
    </div>):(
      <ChatWidget/>
    ) }
    </>
  )
}
