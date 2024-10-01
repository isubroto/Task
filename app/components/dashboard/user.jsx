import Image from "next/image"
import profile from '../../res/profilepicture.jpeg'
const User = ({user}) => {
  return (
    <div className="w-full h-full flex justify-center items-center cursor-pointer !font-barlow"><span className="font-semibold text-[#464255]">{ user?.name}</span><Image src={ user?.image } alt={ user?.name } className="w-14 h-14 mx-auto object-cover rounded-full border-2 border-[#FFFFFF]" width={ 56 } height={ 56 }/></div>
  )
}

export default User