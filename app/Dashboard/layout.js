
import Sidebar from "../components/dashboard/side-menu";

export const metadata = {
    title: "Dashboard",
    description: "App Task",

};

export default function Layout({ children }) {
    
    return (

        <div className="w-full h-full flex !font-barlow">
            <Sidebar />
            <div className="w-full h-full">
                { children }
            </div>
        </div>
    );
}