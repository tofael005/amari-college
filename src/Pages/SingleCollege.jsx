import { Link } from "react-router-dom";

const  SingleCollege = ({singleData}) => {
    const { image, name, rating, admission, research, _id } = singleData;
    return (
        <div>
            <div className="border p-4 rounded-md shadow-md">
                <img className="w-full h-[300px] rounded-md" src={image} alt="" />
                <div className="mt-4">
                    <h1 className="text-xl font-bold ">{name}</h1>
                    <p>Rating: {rating}</p>
                    <p>Admission Date: <span className="font-semibold">{admission}</span></p>
                    <p>Research Center: {research}</p>
                </div>
                <button className="bg-[#05b6d1] block mx-auto my-6 w-full p-3 rounded-md hover:bg-[#0b96ac] duration-300 text-white font-semibold"><Link to={`/college-view/${_id}`}>View Details</Link></button>
            </div>
        </div>
    );
};

export default SingleCollege;  