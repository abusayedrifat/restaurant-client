import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user,setUser] = useState()
    const [loading,setLoading] = useState(true)

    const createUser  = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setLoading(false)
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    }, [])

    const authInfo = {user, loading, createUser, logIn, logOut}
    return (
        <AuthContext.Provider children={children} value={authInfo} ></AuthContext.Provider>
    );
};

export default AuthProvider;