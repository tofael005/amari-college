import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const MyCollege = () => {
    const { user } = useContext(AuthContext)

    const [colleges, setColleges] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myCollege?email=${user.email}`)
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])

    let count = 1;
    return (
        <div className='max-w-[1240px] mx-auto mt-10'>
            <table className="table">
                <thead className="text-center text-white bg-slate-600 mb-6 uppercase">
                    <tr>
                        <th>SL.No</th>
                        <th>College Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Phone No.</th>
                        <th>Date Of Birth</th>
                        <th>Address</th>
                        <th>Admission Process</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        colleges.map((college, index) => <>
                            <tr className="bg-sky-100 text-center mb-6">
                                <td>{count++}</td>
                                <td>{college.name}</td>
                                <td>{college.email}</td>
                                <td>{college.subject}</td>
                                <td>{college.phone}</td>
                                <td>{college.dateOfBirth}</td>
                                <td>{college.address}</td>
                                <td>
                                    <button className="border  p-3  font-bold duration-300 bg-[#05b6d1] hover:text-white rounded-md"><Link to="/admission">Apply Now</Link></button>
                                </td>
                            </tr>
                        </>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyCollege;