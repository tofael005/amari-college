import { Link } from "react-router-dom";
import error1 from "../assets/error.jpg"


const Error = () => {
    return (
        <div>
            <div className='bg-white w-full h-[100vh]'>
            <div>
                <img className='w-[600px] block mx-auto pt-24 md:h-[600px]' src={error1} alt="" />
                <button className="text-center block mx-auto bg-[#05b6d1] font-bold text-white px-6 py-3 rounded-md"><Link to="/">Go to home</Link></button>
            </div>
            
        </div>
        </div>
    );
};

export default Error;