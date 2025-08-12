import React, { useEffect, useState } from 'react';


const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then((res) => res.json())
            .then((data) => {
                console.log("get user list data", data);
                setUsers(data);
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-center text-2xl mb-5'>User List</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SI</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => (
                                <tr key={user._id}>
                                    <td>{index + 1}</td>

                                    <td>
                                                <div className="font-bold">{user.name}</div>
 
                                    </td>
                                    <td>{user.email}</td>

                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;