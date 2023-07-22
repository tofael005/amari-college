import { RiAdminFill } from 'react-icons/ri';
import { BiSolidFolderOpen } from 'react-icons/bi';
import { MdTextsms } from 'react-icons/md';
import blog1 from "../assets/blog/blog.webp"
import blog2 from "../assets/blog/blog2.jpg"
import blog3 from "../assets/blog/blog3.jpg"
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className="max-w-[1240px] mx-auto mb-10 mt-10">
            <div className="text-center mt-20 text-[#05b6d1]">
                <h1 className="font-bold"> --- Letest Blogs ---</h1>
                <h1 className="text-3xl font-bold">Latest Articles From The College</h1>
            </div>

            <div className="grid md:grid-cols-3 gap-6 px-3">
                <div className='mt-10'>
                    <img className='rounded-md h-[300px]' src={blog1} alt="" />
                    <div>
                        <h1 className='text-xl font-bold my-4'>Science and Technology</h1>
                        <div className='flex gap-4 items-center'>
                            <div className='flex gap-2 items-center'>
                                <RiAdminFill className='text-[#05b6d1]' />
                                <h1>Admin</h1>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <BiSolidFolderOpen className='text-[#05b6d1]' />
                                <h1>Science kit</h1>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdTextsms className='text-[#05b6d1]' />
                                <h1>15</h1>
                            </div>
                        </div>
                        <p className='my-4'>Exploring the wonders of our universe, from quantum mysteries to distant galaxies. Unraveling complex topics in a reader-friendly way. Uniting science enthusiasts and sparking curiosity. Join us on a journey of discovery, where knowledge meets fascination, and science illuminates the path to understanding. Welcome to our captivating science blog.</p>
                        <button className="bg-[#05b6d1] rounded-md px-4 py-2 mt-2 text-white font-semibold"><Link to="/science">Read More!</Link></button>
                    </div>
                </div>
                <div className='mt-10'>
                    <img className='rounded-md h-[300px]' src={blog2} alt="" />
                    <div>
                        <h1 className='text-xl font-bold my-4'>Art and Drawing</h1>
                        <div className='flex gap-4 items-center'>
                            <div className='flex gap-2 items-center'>
                                <RiAdminFill className='text-[#05b6d1]' />
                                <h1>Admin</h1>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <BiSolidFolderOpen className='text-[#05b6d1]' />
                                <h1>Drawing kit</h1>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdTextsms className='text-[#05b6d1]' />
                                <h1>17</h1>
                            </div>
                        </div>
                        <p className='my-4'>Unleashing Creativity: An Art and Drawing Blog for Aspiring Artists. Uncover tips, techniques, and inspiration to bring your imagination to life on paper or canvas. From beginner tutorials to expert insights, join our vibrant community of art enthusiasts and embark on a journey of self-expression and artistic growth.</p>
                        <button className="bg-[#05b6d1] rounded-md px-4 py-2 mt-2 text-white font-semibold"><Link to="/art">Read More!</Link></button>
                    </div>
                </div>
                <div className='mt-10'>
                    <img className='rounded-md h-[300px]' src={blog3} alt="" />
                    <div>
                        <h1 className='text-xl font-bold my-4'>Business and Management</h1>
                        <div className='flex gap-4 items-center'>
                            <div className='flex gap-2 items-center'>
                                <RiAdminFill className='text-[#05b6d1]' />
                                <h1>Admin</h1>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <BiSolidFolderOpen className='text-[#05b6d1]' />
                                <h1>Business kit</h1>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdTextsms className='text-[#05b6d1]' />
                                <h1>13</h1>
                            </div>
                        </div>
                        <p className='my-4'>Navigating Success: A Business and Management Hub. Expert insights, innovative strategies, and practical tips for entrepreneurs, executives, and aspiring business leaders. From effective leadership to market analysis, explore the dynamic landscape of commerce. Join us in unlocking the keys to sustainable growth and achieving excellence in the world of business.</p>
                        <button className="bg-[#05b6d1] rounded-md px-4 py-2 mt-2 text-white font-semibold"><Link to="/business">Read More!</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;


