import React, { useEffect, useState } from 'react';
import SinglePhoto from './SinglePhoto';

const PhotoGallery = () => {

    const [photos, setPhotos] = useState([])

    useEffect(()=>{
        fetch("/data.json")
        .then(res => res.json())
        .then(data =>setPhotos(data))
    }, [])
    return (
        <div className="max-w-[1240px] mx-auto px-3 mt-20">
            <h1 className="text-center mt-8 text-[#05b6d1] font-bold"> --- Our Graduated Students ---</h1>
            <h1 className="text-center mb-8 text-[#05b6d1] text-3xl font-bold"> --- Photo Gallery ---</h1>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    photos.map((photo, index) => <SinglePhoto  key={index} photoData={photo} />)
                }
            </div>
        </div>
    );
};

export default PhotoGallery;