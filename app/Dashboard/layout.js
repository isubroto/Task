import Sidebar from "../components/dashboard/side-menu";

export default function Layout({ children }) {
    return (

        <div className="w-full h-full flex">
            <Sidebar />
            <div className="w-full h-full">
                { children }
            </div>
        </div>
    );
}