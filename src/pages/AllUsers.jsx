import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const AllUsers = () => {
    const{user} = useContext(AuthContext);
    console.log("present user information is: ", user);

    return (
        <div>
            All Users
        </div>
    );
};

export default AllUsers;