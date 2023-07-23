import React from 'react';

const SingleMyCollege = ({collegeData}) => {
    const { image, name, email, subject, phone, dateOfBirth, address } = collegeData;
    console.log(collegeData)
    return (
        <div>
           <div className="overflow-x-auto">
			<table className="table">
				{/* head */}
				<thead className="text-left">
					<tr>
						<th>SL.No</th>
						<th>College Name</th>
						<th>Admission Last Date </th>
						<th>Admission Process</th>
						<th>Admission Process</th>
					</tr>
				</thead>
				<tbody>
					{/* row 1 */}
					<tr className="bg-base-200 text-left">
						<th>1</th>
						<td></td>
						<td>Quality Control Specialist</td>
						<td>Blue</td>
						<td>
							<button className="border  p-3  font-bold duration-500 hover:bg-black hover:text-[#00AEEF]">
								Apply Now
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
        </div>
    );
};

export default SingleMyCollege;