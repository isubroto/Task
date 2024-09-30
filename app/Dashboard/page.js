import Notification from "../components/dashboard/notificationbtn";
import Search from "../components/dashboard/searchbar";
import User from "../components/dashboard/user";
import alerm from '../res/alerm.svg'
import message from '../res/message.svg'
export default function Dashboard(){
    return (
        <div className="w-full h-full flex justify-center items-center px-[3.25rem] py-10">
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
        </div>
    )
}