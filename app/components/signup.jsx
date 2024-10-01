"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import googlesymbol from '../res/google_symbol.svg'
import {doSocialLogin} from '../actions/auth'


const SignUp = () => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("experimentalUser")) {
      router.push('/Dashboard');
    }
  }, [ router ]);
  return (
    <div className="w-10/12 h-full flex flex-col gap-8 justify-center items-center">
        <div className="flex flex-col gap-2 justify-center w-full">
              <h1 className="text-[2.125rem] font-bold text-[#21211D]">Join the green movement</h1>
              <p className="text-[#A7AA9D] text-xl">Sign up for free</p>
        </div>
          <button className="border border-[#DBDECF] rounded-xl flex justify-center items-center gap-3 py-4 px-6 w-full font-semibold text-[#21211D]" onclick={()=>doSocialLogin("")}><Image src={ googlesymbol } alt="google symbol" width={ 24 } height={ 24 } /> Continue with Google</button>
          <div class="flex items-center w-full text-center">
              <hr class="flex-grow border-t-2 border-[#DBDECF]" />
              <span class="px-4 text-[#A7AA9D]">or</span>
              <hr class="flex-grow border-t-2 border-[#DBDECF]" />
          </div>
          <div className="w-full flex flex-col gap-[.625rem]">
              <label htmlFor="email" className="font-semibold">Email</label>
              <input type="text" id="email" className="w-full border border-[#A7AA9D] rounded-xl p-4" placeholder="brian@example.com"/>
          </div>
          <button className="bg-[#719331] text-white rounded-xl flex justify-center items-center gap-3 py-4 px-6 w-full font-semibold "> Continue with email</button>
          <p className="text-[.875rem] text-[#A9A9A9]">By clicking “Continue with Google / email” you agree to our User Terms of Services and Privacy Policy</p>
    </div>
  )
}

export default SignUp