import { useEffect, useState } from "react";
import SingleClass from "./SingleClass";


const Classes = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className="max-w-[1240px] mx-auto mb-8">
            <h1 className="text-center">Popular Classes</h1>
            <h1 className="text-center">Classes for Your Daughter</h1>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    data.map((singleCard, index) => <SingleClass key={index} singleData={singleCard} />)
                }
            </div>
        </div>
    );
};

export default Classes;