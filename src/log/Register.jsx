import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";


const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [photo, setPhoto] = useState("");
	const [name, setName] = useState("");

    const { registerUser } = useContext(AuthContext)
    const [success, setSuccess] = useState(" ")
    const [error, setError] = useState(" ")
    const handleRegister = (event) => {
		event.preventDefault();
		if (password.length < 6) {
			setError("Password mush be 6 characters");
			return;
		}
		setError("");
		if ((photo, email, password)) {
			registerUser(email, password)
				.then((result) => {
					const currentUser = result.user;

                    if (currentUser) {
                        Swal.fire({
                            title: '',
                            text: "Register Successfully!",
                            icon: 'success',
                            confirmButtonColor: '#05b6d1',
                            confirmButtonText: 'Added'
                        })
        
                    }


					updateProfile(currentUser, { displayName: name, photoURL: photo });
					setError("");
					event.target.reset();
					setSuccess("Succesfully Login");
				})
				.catch((err) => {
					setError(err.message);
				});
		}
	};
    return (
        <div>
            <main className="px-3 rounded-md">
                <div className='max-w-[700px] mx-auto mt-16 bg-slate-100 p-4 rounded-md'>
                    <h1 className='text-center text-4xl mt-8 font-bold text-[#05b6d1]]'>Register NOW!</h1>
                    <form onSubmit={handleRegister} className=' py-5 bg-slate-100 rounded md:w-[530px]  mx-auto my-5'>
                        <label className="font-semibold" htmlFor="">Full Name</label> <br />
                        <input onChange={(e) => setName(e.target.value)} className='w-full p-3 rounded mb-3 mt-1' type="text" name='name' placeholder='Enter user  name' required />  <br />
                        <label className="font-semibold" htmlFor="">Your Email</label> <br />
                        <input onChange={(e) => setEmail(e.target.value)} className='w-full p-3 rounded mb-3 mt-1' type="email" name='email' placeholder='Enter your email' required /> <br />
                        <label className="font-semibold" htmlFor="">Password</label> <br />
                        <input onChange={(e) => setPassword(e.target.value)} className='w-full p-3 rounded mb-3 mt-1' type="password" name='password' placeholder='Enter your password' required /> <br />
                        <label className="font-semibold" htmlFor="">Fill in the photos URL</label> <br />
                        <input onChange={(e) => setPhoto(e.target.value)} className='w-full p-3 rounded mb-3 mt-1' type="text" name='photo' placeholder='Enter user photoURL' required /> <br />

                        <p className='text-red-600 text-lg'>{error}</p>
                        <p className='text-green-600 text-lg'>{success}</p>

                        <button className='w-full bg-[#05b6d1] mx-auto rounded py-3 my-3 text-white font-semibold' >Register</button>
                        <div className="text-center mt-4">
                            Already have an account?
                            <Link to="/login" className="px-2 py-1 ml-2 text-blue-700 font-semibold underline rounded">Login</Link>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Register;