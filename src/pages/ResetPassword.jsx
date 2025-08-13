const ResetPassword = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
            <form  className="w-full max-w-lg">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-6 shadow-md">
                    <legend className="fieldset-legend text-lg font-semibold text-center">
                        Forgotten Password?
                    </legend>

                    {/* Email */}
                    <label className="label">Email</label>
                    <input
                        type="email"
                        className="input input-bordered w-full"
                        name='email'
                        placeholder="Email"
                    />

                    {/* Password */}
                    <label className="label mt-2">Password</label>
                    <input
                        type="password"
                        name='password'
                        className="input input-bordered w-full"
                        placeholder="Password"
                    />

                    {/* Login Button */}
                    <button className="btn btn-neutral mt-4 w-full">Reset Password</button>

                </fieldset>
            </form>
        </div>
    );
};

export default ResetPassword;