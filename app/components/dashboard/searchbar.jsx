import React from 'react'
import searchimg from '../../res/search.svg'

import Image from 'next/image'
const Search = () => {
  return (
      <div className="h-6 w-full relative border border-[#EBEBEB]">
          <input type="text" className="w-full h-full pr-6 bg-transparent border-none outline-none text-[#969BA0]" placeholder="Search here" />
          <Image src={ searchimg } alt="search icon" className="absolute right-2 top-1/2 -translate-y-1/2" />
    </div>
  )
}

export default Search