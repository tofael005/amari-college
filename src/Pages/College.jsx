import { useEffect, useState } from "react";
import SingleCollege from "./SingleCollege";


const College = () => {
    const [colleges, setColleges] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/allCollege")
        .then(res => res.json())
        .then(data => setColleges(data))
    }, [])
    return (
        <div className="max-w-[1240px] mx-auto mt-4">
            
            <h1 className="text-3xl text-[#05b6d1] text-center font-bold mt-10"> --- The Best Ranking Colleges ---</h1>
            <div className="grid md:grid-cols-3 gap-6 mt-6 mb-10 px-3">
                {
                   colleges  && colleges.map((singleCollege, index) => <SingleCollege key={index} singleData={singleCollege} />)
                }
            </div>
        </div>
    );
};

export default College;