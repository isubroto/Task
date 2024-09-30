import Image from 'next/image'
import dashbordicon from '../../res/dashbord.svg'
import orderList from '../../res/order.svg'
import analytics from '../../res/analitycs.svg'
import foods from '../../res/foods.svg'
import calendars from '../../res/calender.svg'
import chart from '../../res/chat.svg'
import wallet from '../../res/wallet.svg'
const Sidebar = () => {
  return (
    <div className="w-1/5 h-full flex flex-col gap-8 justify-center items-center">
      <div className="font-bold text-5xl text-[#333333] px-[3.25rem] py-10">
        Foody<span className="text-[#00B074]" style={ { fontFamily: "Poppins" } }>.</span>
      </div>
      <ul className="flex flex-col gap-2">
        <li className="flex border-l-4 border-l-[#00B074] pl-6">
          <div className="flex gap-6 items-center bg-[#00B07426] py-0.5 pl-8 h-[3.375rem] w-[15.4375rem]">
            <Image src={ dashbordicon } alt="dashboard icon" width={ 20 } height={ 20 } /><span className="text-[#00B074] font-bold">Dashboard</span>
          </div>
        </li>
        <li className="flex border-l-4 border-l-transparent pl-6">
          <div className="flex gap-6 items-center bg-transparent py-0.5 pl-8 h-[3.375rem] w-[15.4375rem]">
            <Image src={ orderList } alt="dashboard icon" width={ 20 } height={ 20 } /><span className="text-[#464255] font-bold">Order List</span>
          </div>
        </li>
        <li className="flex border-l-4 border-l-transparent pl-6">
          <div className="flex gap-6 items-center bg-transparent py-0.5 pl-8 h-[3.375rem] w-[15.4375rem]">
            <Image src={ analytics } alt="dashboard icon" width={ 20 } height={ 20 } /><span className="text-[#464255] font-bold">Analytics</span>
          </div>
        </li>
        <li className="flex border-l-4 border-l-transparent pl-6">
          <div className="flex gap-6 items-center bg-transparent py-0.5 pl-8 h-[3.375rem] w-[15.4375rem]">
            <Image src={ foods } alt="dashboard icon" width={ 20 } height={ 20 } /><span className="text-[#464255] font-bold">Foods</span>
          </div>
        </li>
        <li className="flex border-l-4 border-l-transparent pl-6">
          <div className="flex gap-6 items-center bg-transparent py-0.5 pl-8 h-[3.375rem] w-[15.4375rem]">
            <Image src={ calendars } alt="dashboard icon" width={ 20 } height={ 20 } /><span className="text-[#464255] font-bold">Calendar</span>
          </div>
        </li>
        <li className="flex border-l-4 border-l-transparent pl-6">
          <div className="flex gap-6 items-center bg-transparent py-0.5 pl-8 h-[3.375rem] w-[15.4375rem]">
            <Image src={ chart } alt="dashboard icon" width={ 20 } height={ 20 } /><span className="text-[#464255] font-bold">Chat</span>
          </div>
        </li>
        <li className="flex border-l-4 border-l-transparent pl-6">
          <div className="flex gap-6 items-center bg-transparent py-0.5 pl-8 h-[3.375rem] w-[15.4375rem]">
            <Image src={ wallet } alt="dashboard icon" width={ 20 } height={ 20 } /><span className="text-[#464255] font-bold">Wallet</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar