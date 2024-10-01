import Image from "next/image"
import profile from '../../res/profilepicture.jpeg'
const User = () => {
  return (
    <div className="w-full h-full flex justify-center items-center cursor-pointer !font-barlow"><span className="font-semibold text-[#464255]">Sara Hike</span><Image src={ profile } alt="profile picture" className="w-14 h-14 mx-auto object-cover rounded-full border-2 border-[#FFFFFF]" /></div>
  )
}

export default User