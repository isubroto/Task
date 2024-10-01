import React from 'react'
import Image from 'next/image'
import up from '../../res/up.svg'
import down from '../../res/down.svg'
const Cart = ({logo,number,description,percent,increase}) => {
  return (
      <div className="shadow-[0px_4px_15px_0px_#0000000A] rounded-xl flex justify-center items-center gap-3 py-4 px-8 ">
          <div className="flex justify-center items-center h-[5.3125rem] w-[5.3125rem] rounded-full bg-[#00B07426]">
              <Image src={ logo } alt="order icon" width={ 58.67 } height={ 43.23 } />
          </div>
          <div>
              <h1 className="text-[2.875rem] font-bold text-[#464255]">
                  { number }
            </h1>
              <p className="text-[#464255]">
                  { description }
            </p>
              <p className="text-[#A3A3A3] text-xs flex items-center gap-1">
                  <span className={ `w-4 h-4 ${increase ? 'bg-[#2ED6A326]' :'bg-[#FF5B5B26]'} rounded-full flex justify-center items-center`}>
                      <Image src={ increase?up:down } alt="up arrow" width={ 10 } height={ 10 } />
                  </span> { percent }% (30 days)
            </p>
          </div>
      </div>
  )
}

export default Cart