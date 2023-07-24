import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';

const AdmitSuccess = () => {

    const { user, loading } = useContext(AuthContext)

    const [name, setName] = useState("");
    const [rating, setRating] = useState("")
    const [text, setText] = useState("")



    const handleSubmit = (e) => {
        e.preventDefault();

        const feedback = {
            name,
            rating,
            text
            

        }
        console.log(feedback)

        fetch("https://amari-sarver.vercel.app/feedback", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(feedback)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: '',
                        text: "Feedback Successfully!",
                        icon: 'success',
                        confirmButtonColor: '#05b6d1',
                        confirmButtonText: 'Added'
                    })

                }
            })
    }

        return (
            <div className="max-w-[840px] mx-auto mt-14 bg-sky-100 rounded-md">
                <div className="block mx-auto p-8 border">
                    <h1 className="text-3xl font-bold my-4 text-center">Add Your Feedback</h1>
                    <form onSubmit={handleSubmit}>
                        <input value={name} onChange={(e) => setName(e.target.value)} className="w-full my-4 p-3 rounded-md" type="text" name='name' placeholder='Name' /> <br />
                        <input value={rating} onChange={(e) => setRating(e.target.value)} className="w-full my-4 p-3 rounded-md" type="text" name='rating' placeholder='Rating' /> <br />
                        <textarea value={text} onChange={(e) => setText(e.target.value)} className="w-full rounded-md" name="" id="" cols="10" rows="10"></textarea> <br />
                        <input className="block mx-auto w-full bg-[#05b6d1] p-3 cursor-pointer my-4 rounded-md font-bold text-white" type="submit" value="Send" />
                    </form>
                </div>
            </div>
        );
    };

    export default AdmitSuccess;