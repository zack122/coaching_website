"use client";

import React from 'react';
import CustomButton from './CustomButton';
import Image from 'next/image';

const Hero = () => {
  
  const handleScroll = () => {
    // Handle scroll function
  }

  return (
    <div className="hero flex flex-col xl:flex-row gap-5 relative max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36 px-6 sm:px-16"> 
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
          Take your climbing to the next level
        </h1>
        <p className="text-[27px] text-black-100 font-light mt-5">
          streamlining your climbing experience
        </p>

        <CustomButton
          title="Get Started"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] h-auto xl:h-full z-0">
          <Image
            src="/hero2.png"
            alt="hero"
            fill
            className="object-contain rounded-lg"
          />
        </div>
        <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-auto"/>
      </div>
    </div>
  );
}

export default Hero;

