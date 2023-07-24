import React from 'react';
import image1 from "../assets/college1.jpg"
import image2 from "../assets/college2.jpg"
import image3 from "../assets/college3.webp"
import { Link } from 'react-router-dom';

const HomeCollege = () => {
    return (
        <div className="max-w-[1240px] mx-auto mb-14">
            <h1 className="text-center text-3xl font-bold mb-5 text-[#05b6d1]">--- College ---</h1>
            <div className="grid md:grid-cols-3">
                <div className="border p-4 rounded-md shadow-md">
                    <img className="w-full h-[300px] rounded-md" src={image1} alt="" />
                    <div className="mt-4">
                        <h1 className="text-xl font-bold ">Stanford College USA</h1>
                        <p>Rating: 5</p>
                        <p>Admission Date: <span className="font-semibold"> 23 July 2023</span></p>
                        <p>Research Center: 9</p>
                    </div>
                    <button className="bg-[#05b6d1] block mx-auto my-6 w-full p-3 rounded-md hover:bg-[#0b96ac] duration-300 text-white font-semibold"><Link to="/college">View Details</Link></button>
                </div>
                <div className="border p-4 rounded-md shadow-md">
                    <img className="w-full h-[300px] rounded-md" src={image2} alt="" />
                    <div className="mt-4">
                        <h1 className="text-xl font-bold ">Boston College USA</h1>
                        <p>Rating: 4.9</p>
                        <p>Admission Date: <span className="font-semibold"> 25 July 2023</span></p>
                        <p>Research Center: 10</p>
                    </div>
                    <button className="bg-[#05b6d1] block mx-auto my-6 w-full p-3 rounded-md hover:bg-[#0b96ac] duration-300 text-white font-semibold"><Link to="/college">View Details</Link></button>
                </div>
                <div className="border p-4 rounded-md shadow-md">
                    <img className="w-full h-[300px] rounded-md" src={image3} alt="" />
                    <div className="mt-4">
                        <h1 className="text-xl font-bold ">Arizona State College USA</h1>
                        <p>Rating: 5</p>
                        <p>Admission Date: <span className="font-semibold"> 29 July 2023</span></p>
                        <p>Research Center: 9</p>
                    </div>
                    <Link to="/college"><button className="bg-[#05b6d1] block mx-auto my-6 w-full p-3 rounded-md hover:bg-[#0b96ac] duration-300 text-white font-semibold">View Details</button></Link>
                    
                </div>
                
            </div>
        </div>
    );
};

export default HomeCollege;