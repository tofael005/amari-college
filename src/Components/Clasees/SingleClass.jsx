
const SingleClass = ({singleData}) => {
    const { image, title, seat, description } = singleData;
    return (
        <div>
            <div className="border p-4 h-[550px] rounded-md shadow-md">
                <img className="rounded-md" src={image} alt="" />
                <div>
                    <h1 className="text-xl font-bold my-4">Class: {title}</h1>
                    <p>Seat: {seat}</p>
                    <p className="my-3">{description}</p>
                </div>
                <button className="block mx-auto bg-[#05b6d1] text-white px-4 py-2 rounded-full my-4">Join Now</button>
            </div>
        </div>
    );
};

export default SingleClass;