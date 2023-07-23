import { useEffect, useState } from "react";
import AdmitCard from "./AdmitCard";


const Admission = () => {
    const [admissions, setAdmissions] = useState([])


    useEffect(() =>{
        fetch("http://localhost:5000/allClasses")
        .then(res => res.json())
        .then(data => setAdmissions(data))
    }, [])
    return (
        <div class="max-w-[1240px] mx-auto mt-14">
            <h1 class="text-center text-3xl font-bold text-[#05b6d1] my-6"> --- Admission ---</h1>
            <div class="grid md:grid-cols-3 gap-6 px-3">
                {
                    admissions.map((admission, index) => <AdmitCard  keys={index} admissionData={admission}/>)
                }
            </div>
        </div>
    );
};

export default Admission;