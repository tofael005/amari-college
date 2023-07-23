import React from 'react';

const SinglePhoto = ({photoData}) => {
    const { collage_name, graduation_year, graduation_image, description } = photoData;
    return (
        <div>
            <div>
                <img className="rounded-md" src={graduation_image} alt="" />
                <h1 className="mt-3 text-xl font-semibold">Institute: {collage_name}</h1>
                 <p>Passing Year: {graduation_year}</p>
                {/* <p className="my-4">{description}</p> */}
            </div>
        </div>
    );
};

export default SinglePhoto;