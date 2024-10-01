"use client"
import { doLogout } from "@/app/actions"
import signout from '@/app/res/signout.svg'
import Image from "next/image"
const Logout = () => {
  return (
      <button className="absolute left-0 shadow-[0px_0px_30px_3px_rgba(0,0,0,0.75);] w-full p-4 gap-4 justify-center items-center hidden group-hover:flex rounded-md" onClick={ () => doLogout() }>
          <Image src={ signout } alt="signout" width={ 20 } height={ 20 } /> <span>Sign Out</span>
      </button>
  )
}

export default Logout