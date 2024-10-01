import Cart from "../components/dashboard/cart";
import Notification from "../components/dashboard/notificationbtn";
import Search from "../components/dashboard/searchbar";
import User from "../components/dashboard/user";
import alerm from '../res/alerm.svg'
import message from '../res/message.svg'
import order from '../res/totalOrder_icon.svg'
import revenue from '../res/revenue_icon.svg'
import delevered from '../res/delivered_icon.svg'
import cancled from '../res/order_icon.svg'

export default function Dashboard(){
    return (
        <div className="w-full h-full flex flex-col justify-center items-center px-[3.25rem] py-10 gap-10 !font-barlow">
            <div className="w-full h-16 flex justify-center items-center">
                <div className="w-5/6 flex justify-center items-center"><Search /></div>
                <div className="w-1/6 flex justify-center items-center gap-6" >
                    <Notification icon={ alerm } number={21}/>
                    <Notification icon={ message } number={53}/>

                </div>
                <div className="w-1/6">
                <User />
                </div>
            </div>
            <div className="w-full flex flex-col">
                <h1 className="font-semibold text-[2rem] text-[#464255]">Good Morning!</h1>
                <h2 className=" text-[1.125rem] text-[#A3A3A3]">Hi, Sara. Welcome back!</h2>
            </div>
            <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center items-center gap-2">
                <Cart logo={ order } number={ 75 } description={ "Total Orders"} percent={4} increase={true} />
                <Cart logo={ delevered } number={ 357 } description={ "Total Delivered" } percent={ 4 } increase={ true } />
                <Cart logo={ cancled } number={ 65 } description={ "Total Canceled" } percent={ 425 } increase={ false } />
                <Cart logo={ revenue } number={ "$128" } description={ "Total Revenue" } percent={ 12 } increase={ false } />
            </div>
        </div>
    )
}