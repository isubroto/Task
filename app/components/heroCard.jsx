import React from 'react'

const HeroCard = () => {
  return (
    <div className="flex flex-col gap-8 justify-center w-[33.125rem]">
          <h1 className="text-6xl font-bold ">Empower Your Business With Stunning Design!</h1>
          <p className="text-xl text-[#6B708D] w-[27.1875rem]">Lumaracode is a digital design and development studio. We design and develop astonishing websites and mobile apps.</p>
          <div className="flex gap-10 items-center">
              <button className="text-white py-[0.9375rem] text-[1.0625rem] px-[2.25rem] bg-[#3B52CF] rounded-[.75rem]" >Get in touch</button>
              <span className="text-[#6B708D] text-[1.0625rem] cursor-pointer">See our work</span>
          </div>
    </div>
  )
}

export default HeroCard