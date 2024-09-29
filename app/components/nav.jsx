import Link from "next/link"
import Logo from "./logo"
import NavMenu from "./navMenu"


const Nav = () => {
    return (
        <div className="w-full h-32 flex justify-between items-end"><Logo /> <NavMenu />
            <div className="flex gap-5">
                <button className="text-white py-[0.9375rem] px-[2.25rem] bg-[#3B52CF] hover:bg-[#3c59fd] text-[1.0625rem] rounded-[.75rem]">
                    Contact Us
                </button>
                <Link href="/SignUp" className="py-[0.9375rem] px-[2.25rem] border border-[#3B52CF] text-[#3B52CF] hover:bg-[#3B52CF] hover:text-white text-[1.0625rem] rounded-[.75rem]">
                    Sign Up
                </Link>
                
            </div>
        </div>
    )
}

export default Nav