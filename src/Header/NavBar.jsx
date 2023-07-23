import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from "../assets/logo.png"

const NavBar = () => {
    const [toggle, setToggle] = useState()
    return (
        <div className="shadow-md">
            <div className="max-w-[1240px] mx-auto flex justify-between items-center p-4">
                <div className="flex items-center gap-2">
                    <Link to="/"> <img className="w-16" src={logo} alt="" /></Link>
                    <Link to="/"><h1 className="text-2xl font-semibold">Amari <span className="text-[#05b6d1]">College</span></h1></Link>
                </div>

                <span className='md:hidden'>
                    {
                        toggle ? <AiOutlineClose className='text-2xl' onClick={() => setToggle(!toggle)} /> : <GiHamburgerMenu className="text-2xl" onClick={() => setToggle(!toggle)} />
                    }
                </span>
               

                <ul className={`flex items-center duration-300 flex-col py-5 md:p-0 text-white md:text-gray-900 bg-opacity-90 top-14 bg-black md:bg-transparent w-full text-center md:w-auto md:flex-row gap-3 absolute md:static z-50 ${toggle ? "left-0" : "-left-full"}`}>
                    <li className="hover:bg-[#05b6d1] duration-300 px-3 py-2 rounded-md hover:text-white font-semibold">
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                    </li>
                    <li className="hover:bg-[#05b6d1] duration-300 px-3 py-2 rounded-md hover:text-white font-semibold">
                        <NavLink to="/college" className={({ isActive }) => isActive ? "active" : ""}>College</NavLink>
                    </li>
                    <li className="hover:bg-[#05b6d1] duration-300 px-3 py-2 rounded-md hover:text-white font-semibold">
                        <NavLink to="/admission" className={({ isActive }) => isActive ? "active" : ""}>Admission</NavLink>
                    </li>
                    <li className="hover:bg-[#05b6d1] duration-300 px-3 py-2 rounded-md hover:text-white font-semibold">
                        <NavLink to="/myCollege" className={({ isActive }) => isActive ? "active:" : ""}>My-College</NavLink>
                    </li>
                    <li className="hover:bg-[#05b6d1] duration-300 px-3 py-2 rounded-md hover:text-white font-semibold">
                        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>Blog</NavLink>
                    </li>
                    

                    <li>{
                         <button  className="bg-[#05b6d1] rounded px-6 py-2 hover:bg-[#0b96ac] duration-300 text-white font-semibold"><Link to="/login">LogIn</Link></button>
                    }
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;