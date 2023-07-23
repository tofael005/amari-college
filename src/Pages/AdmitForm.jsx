import React from 'react';

const AdmitForm = () => {
    return (
        <div class="max-w-[740px] mt-10 mx-auto bg-slate-400 rounded-md">
            <div className="px-8 py-4">
                <label className="font-semibold">Name</label><br />
                <input className="w-full p-3 mb-2 rounded-md border border-bg-[#05b6d1] text-slate-500" type="text" name="name" placeholder="Enter Your Name" /><br />
                <label className="font-semibold">Email</label><br />
                <input className="w-full p-3 mb-2 rounded-md border border-bg-[#05b6d1]" type="email" name="email" id="" placeholder="Enter Your Email" /><br />
                <label className="font-semibold">Subject</label><br />
                <input className="w-full p-3 mb-2 rounded-md border border-bg-[#05b6d1]" type="text" name="subject" placeholder="Enter Your Subject" /><br />
                <label className="font-semibold">Phone No.</label><br />
                <input className="w-full p-3 mb-2 rounded-md border border-bg-[#05b6d1]" type="number" name="number" id="" placeholder="Phone Number" /><br />
                <label className="font-semibold">Date of Birth</label><br />
                <input className="w-full p-3 mb-2 rounded-md border border-bg-[#05b6d1]" type="date" name="date" id="" placeholder="Date of Birth" /><br />
                <label className="font-semibold">Address</label><br />
                <input className="w-full p-3 mb-2 rounded-md border border-bg-[#05b6d1]" type="text" name="address" placeholder="Enter Your Address"/><br />
                <label className="font-semibold">Image URL</label><br />
                <input className="w-full p-3 mb-3 rounded-md border border-bg-[#05b6d1]" type="text" name="url" alt="" placeholder="Enter Photo URL"/><br />
                <input className="block mx-auto bg-[#05b6d1] w-full p-3 mt-4 text-white rounded-md font-bold cursor-pointer" type="button" value="Submit" /><br />
            </div>
        </div>
    );
};

export default AdmitForm;