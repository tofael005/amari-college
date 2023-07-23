import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import { BsFacebook, BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs';


const Footer = () => {
    return (
        <div className="w-full bg-[#ebfcff] mt-32">
            <div className='max-w-[1240px] mx-auto px-3 text-gray-600'>
                <section className="grid md:grid-cols-3 gap-8 mb-10 px-6">
                    <div className="mt-5">
                        <div className="flex items-center gap-2">
                            <img className="w-20 h-20" src={logo} alt="" />
                            <h1 className="text-3xl font-semibold mb-2">Amari<span className="text-[#05b6d1]">College</span></h1>
                        </div>
                        <p>Geppetto’s. A child’s fantasy.</p>
                        <p>American Speciality Toy Retailing <br /> Association Leading the way through play</p>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-3xl mt-3 mb-2">About Us</h1>
                        <p><Link to="/">Home</Link></p>
                        <p className="my-2"><Link to="/about">Blog</Link></p>
                        <p><Link to="/register">Join Now</Link></p>
                        <p className="my-2"><Link to="/login">Login</Link></p>
                    </div>
                    <div className="mt-5">
                        <p className="text-3xl my-3">Contact Us</p>
                        <p>College address: 22/2 Gulshan, Dhaka</p>
                        <p className="my-2">Cell: +880 1966 40 67 95</p>
                        <div className="md:w-full">
                            <input className="p-3 rounded border-bg-[#05b6d1] border" type="email" name="email" placeholder="Email" />
                            <button className="bg-[#05b6d1] ml-2 p-3 rounded text-white">Submit</button>
                        </div>
                    </div>
                </section>
                <div className=" border-1">
                    <hr />
                </div>
                <div className="text-center mt-10">
                    <div className="flex gap-3 text-xl justify-center">
                        <div className='text-blue-500 cursor-pointer'>
                            <Link><BsFacebook /></Link>
                        </div>
                        <div className='text-blue-400 cursor-pointer'>
                            <Link><BsLinkedin /></Link>
                        </div>
                        <div className='text-sky-500 cursor-pointer'>
                            <Link><BsTwitter /></Link>
                        </div>
                        <div className="text-red-500 cursor-pointer">
                            <Link><BsInstagram /></Link>
                        </div>
                    </div>
                    <h1 className="p-6">&copy;copyright 2023 All rights reserved by Amari<span className="text-[#05b6d1] font-extrabold">College</span></h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;