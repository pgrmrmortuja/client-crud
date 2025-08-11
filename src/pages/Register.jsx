import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Register = () => {
    const navigate = useNavigate();

    const registerUser = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const user = { name, email, password };
        console.log(user);

        const storedUser = {name, email};

        fetch("http://localhost:5000/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.insertedId) {
                    Swal.fire("Registration Successful");

                    localStorage.setItem("user", JSON.stringify(storedUser));

                    navigate("/");

                } else {
                    Swal.fire("Email Already Exist.");
                }
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
