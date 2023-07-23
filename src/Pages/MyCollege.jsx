import React, { useEffect, useState } from 'react';
import SingleMyCollege from './SingleMyCollege';

const MyCollege = () => {

    const [colleges, setColleges] = useState([])

    useEffect(() =>{
        fetch("http://localhost:5000/myCollege")
        .then(res => res.json())
        .then(data => setColleges(data))
    }, [])
    return (
        <div>
            <h1>My-college</h1>
            <div className="max-w-[1240px] mx-auto">
                {
                    colleges.map((college, index) => <SingleMyCollege key={index} collegeData={college} /> )
                }
            </div>
        </div>
    );
};

export default MyCollege;