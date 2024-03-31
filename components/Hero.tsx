import React from 'react'
import CustomButton from './CustomButton'

const Hero = () => {
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x"> 
            <h1 className= "hero__title">
                Take your climbing to the next level
            </h1>

            <p className='hero__subtitle'>
                streamlining your climbing experience
            </p>

            <CustomButton>
                
            </CustomButton>
        </div>
    </div>
  )
}

export default Hero