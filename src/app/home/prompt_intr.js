"use client";
import '../globals.css';
import { BiSolidSend } from 'react-icons/bi';

import React, { useState } from 'react';

export default function Prompt_Intro() {
  const [input_prompt, set_input_prompt] = useState('');

  const handle_input_prompt = (event) => {
    set_input_prompt(event.target.value);
    console.log(input_prompt);
  }

  return (
    <div className='flex flex-col gap-4 text-5xl text-white text-center typographica mt-8'>
      <h1 className='md:text-6xl text-5xl'>Generate Anything in Seconds</h1>
      <form className='flex md:flex-row flex-col items-center justify-center mt-12 gap-4'>
      <div className="px-2   relative inline-flex  group md:w-2/3 w-full focus:scale-105 ">
        <div
            className={`absolute transitiona-all duration-1000 opacity-10 -inset-px bg-white/30 rounded-xl blur-xl ${input_prompt ? 'opacity-100  duration-1000 animate-tilt':''}`}>
        </div>
        <input
          type="text"
          value={input_prompt}
          className="relative inline-flex transition-all duration-1000 rounded-xl shadow-xl w-full p-4 h-12 poppins-regular text-lg focus:outline-none  bg-white/30 "
          onChange={handle_input_prompt}
        />
    </div>


    <div className="px-2   relative inline-flex  group">
        <div
            className={`absolute transitiona-all duration-1000 opacity-10 -inset-px bg-blue-500  rounded-xl blur-xl ${input_prompt ? 'opacity-100  duration-1000 animate-tilt':''}`}>
        </div>
        <button
            className={`relative  inline-flex items-center justify-center px-8 py-4 text-lg  text-white transition-all duration-1000 bg-gradient-to-r from-cyan-500 to-blue-500  rounded-xl  ${input_prompt ? 'opacity-100  ':'opacity-10'}`}
        >Send
              <BiSolidSend size={22} />
        </button>
    </div>


      </form>
    </div>
  );
}
