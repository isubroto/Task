import Image from 'next/image'
const Notification = ({icon,number}) => {
  return (
      <div className="relative w-12 h-12 rounded-[.9375rem] bg-[#00B0741A] flex items-center justify-center">
        <Image src={icon} alt="alerm" className=""/>
        <div className="absolute top-0 right-0 w-[1.1875rem] h-[1.1875rem] text-[.75rem] rounded-full bg-[#FF5B5B] flex items-center justify-center border-2 border-[#F3F2F7] text-white p-2">{number}</div>

    </div>
  )
}

export default Notification