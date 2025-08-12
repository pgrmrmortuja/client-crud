import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const AllUsers = () => {
    const {user, setUser} = useState("");
    

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-center text-2xl mb-5'>User List</h1>

            {
                user ?
                    (
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        
                                        <td>
                                            <div className="flex items-center gap-3">
                                                {/* <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div> */}
                                                <div>
                                                    <div className="font-bold">Hart Hagerty</div>
                                        
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Zemlak, Daniel and Leannon
                                           
                                        </td>
                                        
                                        <th>
                                            <button className="btn btn-ghost btn-xs">details</button>
                                        </th>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    ) :
                    (
                        <p className='text-red-500 text-center'>No User Found</p>
                    )
            }
        </div>
    );
};

export default AllUsers;