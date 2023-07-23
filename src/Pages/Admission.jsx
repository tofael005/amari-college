import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/allCollege")
            .then((res) => res.json())
            .then((dat) => setData(dat));
    }, []);
    console.log(data);
    let count = 1;
    return (
        <div className="max-w-[1240px] mx-auto mt-10">
            <div className="overflow-x-auto ">
                <table className="table ">
                    {/* head */}
                    <thead className="text-center bg-slate-600 text-white mb-6">
                        <tr>
                            <th>SL.No</th>
                            <th>College Name</th>
                            <th>Rating</th>
                            <th>Research</th>
                            <th>Admission Date</th>
                            <th>Admission Success</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {data?.map((item, index) => (
                            <>
                                <tr className="bg-sky-100 text-center mb-6">
                                    <th>{count++}</th>
                                    <td>{item?.name}</td>
                                    <td>{item?.rating}</td>
                                    <td>{item?.research}</td>
                                    <td>{item?.admission}</td>
                                    <td>
                                        <Link to={`/admitForm/${item?._id}`}>
                                            <button className="border  p-3  font-bold duration-300 bg-[#05b6d1] hover:text-white rounded-md">Apply Now</button>
                                        </Link>
                                    </td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admission;