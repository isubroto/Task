import React from 'react'
import HeroCard from './heroCard'
import heroImage from '../res/hero_img.svg'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 justify-center items-center mt-[6.25rem]">
        <HeroCard />
        <Image
          src={heroImage}
          alt="hero"
          width={570}
          height={650}  
        />
    </div>
  )
}

export default Hero