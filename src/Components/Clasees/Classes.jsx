import { useEffect, useState } from "react";
import SingleClass from "./SingleClass";


const Classes = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        fetch("https://amari-sarver.vercel.app/allClasses")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className="max-w-[1240px] mx-auto mb-8">
            <h1 className="text-center text-[#05b6d1] font-bold">---  Popular Classes  ---</h1>
            <h1 className="text-center text-3xl font-bold text-[#05b6d1] mb-4">Classes for Your Daughter</h1>
            <div className="grid md:grid-cols-3 gap-4 px-3">
                {
                    data.map((singleCard, index) => <SingleClass key={index} singleData={singleCard} />)
                }
            </div>
        </div>
    );
};

export default Classes;