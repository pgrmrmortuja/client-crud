import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    console.log("user firstly",user);

    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const storedUser = localStorage.getItem('userdata');
        if(storedUser){
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
        console.log("user saved now",user);
    },[])

    console.log("user saved final",user);

    if(loading){
        return <div>Loading..........</div>
    }

    const authInfo = {
        user,
        setUser,
        loading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;