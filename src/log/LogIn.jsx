
import { FcGoogle } from 'react-icons/fc';
import login from "../assets/log/login.png"


const LogIn = () => {



        return (
            <div>
                <main className="max-w-[1240px] mx-auto mt-14">
                    <div className='md:flex md:p-8 p-3  gap-6 justify-between'>
                        <img className="w-full h-full" src={login} alt="" />

                        <div className='py-5 bg-slate-100 rounded md:w-full mx-auto my-5'>
                            <h1 className='text-center text-5xl text-[#05b6d1] underline font-bold mt-4 mb-8'>Login</h1>
                            <form className="px-6">
                                <label className="font-semibold" htmlFor="">Email</label>
                                <input className='md:w-full p-3 mb-4 mt-1 w-full rounded' type="email" name="email" placeholder='Enter your email' required />
                                <label className="font-semibold" htmlFor="">Password</label>
                                <input className='md:w-full w-full p-3 mt-1 mb-2 rounded ' type="password" name='password' placeholder='Enter your password' required />
                                {/* <p>{error}</p> */}

                                <p className='text-blue-600 underline font-semibold  mb-8'><Link>Forget Password</Link></p>
                                <button className='md:w-full w-full bg-[#05b6d1] mx-auto rounded p-3 my-2 text-white font-semibold'>Login</button>

                                <p className='mt-2 text-center'> Create a new account? <Link to="/register" className='text-blue-600 font-semibold underline'> Register NOW</Link></p>
                            </form>
                            <button className='border-2 border-[#05b6d1] p-3 mt-4 rounded flex justify-center items-center gap-[6px] mx-auto'><FcGoogle className='text-[32px]' /><span>Continue with Google</span></button>
                        </div>

                    </div>
                </main>
            </div>
        );
    };

    export default LogIn;