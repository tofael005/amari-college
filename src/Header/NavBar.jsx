import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="bg-orange-300">
           <div className="max-w-[1240px] mx-auto flex justify-between items-center p-4">
            <div>
                <h1>LOGO</h1>
            </div>
            

            <ul className="flex items-center gap-6">
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
                    <NavLink to="/myCollege">My College</NavLink>
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