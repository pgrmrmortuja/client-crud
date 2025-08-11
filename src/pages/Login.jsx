import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
            <form className="w-full max-w-lg">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-6 shadow-md">
                    <legend className="fieldset-legend text-lg font-semibold text-center">
                        Login
                    </legend>

                    {/* Email */}
                    <label className="label">Email</label>
                    <input
                        type="email"
                        className="input input-bordered w-full"
                        placeholder="Email"
                    />

                    {/* Password */}
                    <label className="label mt-2">Password</label>
                    <input
                        type="password"
                        className="input input-bordered w-full"
                        placeholder="Password"
                    />

                    {/* Login Button */}
                    <button className="btn btn-neutral mt-4 w-full">Login</button>

                    <div className="divider">OR</div>

                    <p className='text-center'>Not Register? <Link className='text-red-500' to={"/register"}>Register</Link> </p>
                    <u className='text-center'>Forgotten Password? <Link className='text-red-500' to={"/reset"}>Reset</Link> </u>
                   
                </fieldset>
            </form>
        </div>
    );
};

export default Login;
