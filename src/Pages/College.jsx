import { useEffect, useState } from "react";
import SingleCollege from "./SingleCollege";


const College = () => {
    const [colleges, setColleges] = useState([])

    useEffect(() => {
        fetch("/college.json")
        .then(res => res.json())
        .then(data => setColleges(data))
    })
    return (
        <div className="max-w-[1240px] mx-auto mt-4">
            <h1>College</h1>

            <div>
                {
                   colleges  && colleges.map((singleColl, index) => <SingleCollege key={index} singleData={singleColl} />)
                }
            </div>
        </div>
    );
};

export default College;