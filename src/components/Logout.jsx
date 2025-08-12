import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../providers/AuthProvider';

const Logout = () => {
    const navigate = useNavigate();
    const {setUser} = useContext(AuthContext);

    const logout = () =>{
        localStorage.removeItem('userdata');
        setUser(null);
        // window.location.reload();
        navigate("/");
    }

    return (

        <button onClick={logout} className="btn btn-dash btn-error">Logout</button>

    );
};

export default Logout;