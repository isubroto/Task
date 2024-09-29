import Logo from "./logo"
import NavMenu from "./navMenu"


const Nav = () => {
    return (
        <div className="w-full h-32 flex justify-between items-end"><Logo /> <NavMenu />
            <div>
                <button className="text-white py-[0.9375rem] px-[2.25rem] bg-[#3B52CF] text-[1.0625rem] rounded-[.75rem]">
                    Contact Us
                </button>
            </div>
        </div>
    )
}

export default Nav