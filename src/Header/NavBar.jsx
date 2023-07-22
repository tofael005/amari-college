import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = () => {
    const [toggle, setToggle] = useState()
    return (
        <div className="bg-[#05b6d1]">
           <div className="max-w-[1240px] mx-auto flex justify-between items-center p-4">
            <div>
                <h1>LOGO</h1>
            </div>
            
            <span className='md:hidden'>
                {
                    toggle ? <AiOutlineClose className='text-2xl' onClick={() => setToggle(!toggle)} /> :  <GiHamburgerMenu className="text-2xl" onClick={() => setToggle(!toggle)} />
                }
            </span>

            <ul className={`flex items-center duration-300 flex-col py-5 md:p-0 text-white md:text-gray-900 bg-opacity-90 top-14 bg-black md:bg-transparent w-full text-center md:w-auto md:flex-row gap-6 absolute md:static z-50 ${toggle ? "left-0" : "-left-full"}`}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/college">College</NavLink>
                </li>
                <li>
                    <NavLink to="/admission">Admission</NavLink>
                </li>
                <li>
                    <NavLink to="/myCollege">My-College</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About Us</NavLink>
                </li>
            </ul>
           </div>
        </div>
    );
};

export default NavBar;