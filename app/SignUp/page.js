import SignUp from '../components/signup'
import Image from 'next/image'
import loginImage from '../res/DrawKit Vector Illustration Ecology & Environment (3) 1.png'
import { auth } from '../actions/auth';
import { redirect } from "next/navigation";
export const metadata = {
  title: "Sing Up",
  description: "App Task",

};
export default async function page () {
  const session = await auth();
  if (session?.user) {
    redirect("/Dashboard")
  }
  return (
      <div className="w-full md:w-[76.18056%] h-screen overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center justify-center mx-auto shadow-lg ">
        <SignUp />
          <div className="w-full h-full flex justify-center items-center relative bg-[#FFF1E8]">
              <Image src={ loginImage } alt="login image" className="hidden md:block  w-screen h-screen" />
         </div>
    </div>
  )
}
