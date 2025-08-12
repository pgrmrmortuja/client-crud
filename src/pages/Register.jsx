import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Register = () => {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const registerUser = e => {
        e.preventDefault();

        if (user !== null) {
            Swal.fire({
                icon: 'warning',
                title: 'Warning',
                text: 'Please logout from previous account before registering a new one.'
            });
            return;
        }

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const userdata = { name, email, password };
        console.log(userdata);


        fetch("http://localhost:5000/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userdata)
            })
            .then(res => res.json())
            .then(data => {
                console.log("registration data", data);

                if (data.result.insertedId) {
                    Swal.fire("Registration Successful");

                    console.log("registration data with success", data)

                    const newUser = {
                        name: data.name,
                        email: data.email
                    }

                    localStorage.setItem("userdata", JSON.stringify(newUser));

                    setUser(newUser);


                    navigate("/");

                } else {
                    Swal.fire("Email Already Exist.");
                }
            })
            .catch((error) =>{
                console.log(error);
            })
    }



    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
            <form onSubmit={registerUser} className="w-full max-w-lg">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-6 shadow-md">
                    <legend className="fieldset-legend text-lg font-semibold text-center">
                        Registration
                    </legend>

                    {/* Name */}
                    <label className="label">Name</label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Name"
                        name='name'
                    />

                    {/* Email */}
                    <label className="label">Email</label>
                    <input
                        type="email"
                        className="input input-bordered w-full"
                        placeholder="Email"
                        name='email'
                    />

                    {/* Password */}
                    <label className="label mt-2">Password</label>
                    <input
                        type="password"
                        className="input input-bordered w-full"
                        placeholder="Password"
                        name='password'
                    />

                    {/* Register Button */}
                    <button className="btn btn-neutral mt-4 w-full">Register</button>

                    <div className="divider">OR</div>

                    <p className='text-center'>Already have an account? <Link className='text-red-500' to={"/login"}>Login</Link> </p>
                </fieldset>
            </form>
        </div>
    );
};

export default Register;
