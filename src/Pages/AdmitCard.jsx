import React from 'react';
import { Link } from 'react-router-dom';

const AdmitCard = ({admissionData}) => {
    const { image, title, seat, description } = admissionData;
    return (
        <div>
            <div class="p-5 border rounded-md shadow-md">
                <img class="rounded-md" src={image} alt="" />
                <div>
                    <h1 class="my-4 font-semibold text-xl">Subject: {title}</h1>
                    <p class="font-semibold">Available Seat: {seat}</p>
                    <p class="my-3">Sports Facility: Available</p>
                    <p>Research Center</p>
                    <p class="my-3">Faith & Service</p>
                    <p>Permanent Campus</p>
                    <p class="my-4 font-semibold">Description: <span class="font-normal">{description}</span></p>

                    <button class="block mx-auto bg-[#05b6d1] font-bold text-white hover:bg-[#0b96ac] duration-300 px-5  py-3 rounded-md my-5"><Link to="/admitForm">Admission Now</Link></button>
                </div>
            </div>
        </div>
    );
};

export default AdmitCard;