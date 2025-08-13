import { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const ResetPassword = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [password, setPassword] = useState("");
    const [account, setAccount] = useState(null);

    const findAccount = () => {
        fetch(`http://localhost:5000/find-account?email=${email}`)
        .then((res) =>res.json())
        .then((data) => {
            console.log(data)
            if(data.name && data.email){
                setAccount(data);
                Swal.fire("Account Found, Now Reset Password")
            } else{
                Swal.fire(`${data.message}`)
            }
        })
        .catch(err => console.log(err))
    }

    const resetPassword = (e) => {
        e.preventDefault();

        if(password !== newPassword){
            return Swal.fire("Password Should be Matched");
        }

        fetch("http://localhost:5000/reset-password",{
            method: "PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                newPassword: newPassword
            })
        })
        .then((res) =>res.json())
        .then((data) => {
            console.log("reset password",data)
            if(data.result && data.result.modifiedCount > 0){
                Swal.fire(`${data.message}`)
                navigate("/login");
            }
            else{
                Swal.fire(`${data.message}`)
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="max-w-sm mx-auto px-4">

            {/* Find Account */}
            {
                !account && (
                    <div className="space-y-2">
                        <label className="label mt-2">Email</label>
                        <input
                            type="email"
                            name='email'
                            className="input input-bordered w-full"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button onClick={findAccount} className="btn btn-neutral mt-4 w-full">Find Account</button>
                    </div>
                )
            }


            {/* Reset Password */}
            {
                account && (
                    <form onSubmit={resetPassword} className="space-y-2">
                        <p>Name: {account.name}</p>
                        <p>Email: {account.email}</p>

                        <label className="label mt-2">New Password</label>
                        <input
                            type="password"
                            className="input input-bordered w-full"
                            placeholder="New Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="label mt-2">Confirm New Password</label>
                        <input
                            type="password"
                            name='password'
                            className="input input-bordered w-full"
                            placeholder="Confirm Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />

                        <button className="btn btn-neutral mt-4 w-full">Reset Password</button>
                    </form>
                )
            }


        </div>
    );
};

export default ResetPassword;