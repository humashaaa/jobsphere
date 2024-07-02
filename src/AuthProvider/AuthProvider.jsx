import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    const createUser = ( email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)

    }



    const updateUser = (name, photo)=>{

       return updateUser(auth.currentUser, {
        displayName: name,
        photoURL: photo
       })

    }

    // signin email
    const signInUser = ( email, password)=>{
        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)

    }

    // signin google

    const googleSignin = ()=>{
        setLoading(true)

       return signInWithPopup(auth, googleProvider)
    }
    const logOut = ()=>{
        setLoading(true)

        setUser(null)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {
             if (currentUser) {
               setUser(currentUser)
               setLoading(false)
// const loggedEmail = {email: currentUser.email}
//                axios.post('http://localhost:5000/jwt',loggedEmail, {withCredentials : true})
//                .then(res=>{
//                 console.log('tokeeen',res.data);
//                })




             } 
             else{
                setLoading(false)
             }
           });
           return ()=> unSubscribe()
        },[])
        console.log(user);

    const allValues ={
        createUser,
        updateUser,
        signInUser,
        googleSignin,
        logOut,
        user,
        setUser,
        loading,

    }
    return (
        <AuthContext.Provider  value={allValues}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;