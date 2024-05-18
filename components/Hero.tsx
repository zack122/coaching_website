"use client";

import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image';

const Hero = () => {
  
  const handleScroll = () => {
  }
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x"> 
            <h1 className= "hero__title">
                Take your climbing to the next level
            </h1>
            <p className='hero__subtitle'>
                streamlining your climbing experience
            </p>

            <CustomButton
               title = "Get Started"
               containerStyles = "bg-primary-blue text-white rounded-full mt-10" 
               handleClick = {handleScroll}
               />
               
               </div>
               <div className="hero__image-containter">
                <div className="hero__image">
                  <Image src = "/hero2.png" alt="hero" fill className="object-contain"/>
                  <div className="hero__image-overlay"/>
            </div>
        </div>
    </div>
  )
}

export default Hero