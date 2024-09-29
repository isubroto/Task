import React from 'react'

const NavMenu = () => {
  return (
    <ul className="hidden md:flex h-[3.875rem] items-center justify-center !gap-[3.75rem]">
          <li className="flex justify-center items-center text-[1.0625rem] text-[#3B52CF]">Home</li>
        <li className="flex justify-center items-center text-[1.0625rem]">Projects</li>
        <li className="flex justify-center items-center text-[1.0625rem]">Services</li>
    </ul>
  )
}

export default NavMenu