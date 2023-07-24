
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import FeedCard from './FeedCard';




const Testimonial = () => {
    const { user } = useContext(AuthContext)
    const [feedback, useFeedback] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/feedback")
            .then(res => res.json())
            .then(data => useFeedback(data))
    }, [])
    return (
        <div className="mt-20">
            <h1 className="text-center my-3">Testimonial</h1>
            <h1 className="text-center my-3 text-3xl font-bold text-[#05b6d1]">What Parents Say!</h1>
            <div>
                <div>
                    {
                        feedback.map((feed, index) => <FeedCard key={index} feedData={feed} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;