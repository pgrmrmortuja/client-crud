import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';
import { useContext } from 'react';

const Login = () => {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const loginUser = e => {
        e.preventDefault();

        if (user !== null) {
            Swal.fire({
                icon: 'warning',
                title: 'Warning',
                text: 'Please logout from previous account before login.'
            });
            return;
        }

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const userdata = {email, password };
        console.log(userdata);


        fetch("http://localhost:5000/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userdata)
            })
            .then(res => res.json())
            .then(data => {
                console.log("login data", data);

                if (data.safeUser) {
                    Swal.fire("Login Successful");

                    console.log("login data with success", data)

                    const newUser = {
                        name: data.safeUser.name,
                        email: data.safeUser.email
                    }

                    localStorage.setItem("userdata", JSON.stringify(newUser));

                    setUser(newUser);


                    navigate("/");

                } else {
                    Swal.fire("User not found");
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }



    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
            <form onSubmit={loginUser} className="w-full max-w-lg">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-6 shadow-md">
                    <legend className="fieldset-legend text-lg font-semibold text-center">
                        Login
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
