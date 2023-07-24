import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import Swal from "sweetalert2";


const LogIn = () => {

    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signIn, handleGoogleSignIn } =
        useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        if ((email, password)) {
            signIn(email, password)
                .then((result) => {
                    const user = result.user;

                    if (user) {
                        Swal.fire({
                            title: '',
                            text: "Login Successfully!",
                            icon: 'success',
                            confirmButtonColor: '#05b6d1',
                            confirmButtonText: 'Added'
                        })
        
                    }

                    navigate(from, { replace: true });
                    event.target.reset();
                })
                .catch((error) => setError(error.message));
        }
    };
    const loginWithGoogle = () => {
        handleGoogleSignIn()
            .then((result) => {
                const user = result.user;

                if (user) {
                    Swal.fire({
                        title: '',
                        text: "Login Successfully!",
                        icon: 'success',
                        confirmButtonColor: '#05b6d1',
                        confirmButtonText: 'Added'
                    })
    
                }
                navigate(from);
            })
            .catch((error) => setError(error.message));
    };


    return (
        <div className="max-w-[700px] mx-auto mt-24 p-4 border shadow-md rounded-md">
            <form onSubmit={handleLogin}>
                <div className='flex flex-col my-4'>
                    <label htmlFor="email" className='text-[17px] font-semibold p-1'>Email</label>
                    <input type="email" name="email" id="email" className='border rounded p-3 text-base' autoComplete='off' placeholder='Enter your email' required />
                </div>
                <div className='flex flex-col my-4'>
                    <label htmlFor="password" className='text-[17px] font-semibold p-1'>Password</label>
                    <input type="password" name="password" id="password" className='border rounded p-3 text-base' autoComplete='off' placeholder='Enter your password' required />
                </div>


                <button type='submit' className='bg-[#05b6d1] text-white w-full p-3 text-[21px] rounded mt-[10px] font-bold'>Login</button>
                <p className='mt-[8px] text-center'>Create a new account? <Link to="/register" className='text-blue-700 underline'>Register Now</Link></p>
                <div className='flex items-center justify-between mt-[25px] '>
                    <hr className='w-[45%] bg-[#95A0A7]' />
                    <p className='text-[#95A0A7]'>Or</p>
                    <hr className='w-[45%] bg-[#95A0A7]' />
                </div>
                
            </form>
            <div className="flex gap-4 mb-7">
                    <div onClick={loginWithGoogle} className='p-[10px] bg-[#d1f9ff] cursor-pointer border rounded w-full flex justify-center items-center gap-[6px] mt-[33px]'><FcGoogle className='text-[32px]' /><span>Continue with Google</span></div>
                </div>
        </div>

    );
};


export default LogIn;