import React from 'react';

const SingleMyCollege = ({ collegeData }) => {
    const { image, name, email, subject, phone, dateOfBirth, address } = collegeData;
    console.log(collegeData)
    return (
        <div>
            <div className="overflow-x-auto">

            </div>
        </div>
    );
};

export default SingleMyCollege;