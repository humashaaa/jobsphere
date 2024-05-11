import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../useAuth/useAuth";
import Loading from '../assets/Loading.json'
import Lottie from "lottie-react";
const PrivateRoute = ({children}) => {
    const{user, loading}= useAuth()
    const location = useLocation()
    console.log(user, loading);

    if(loading){
        return <p className="w-32"><Lottie animationData={Loading}></Lottie></p>
    }
    
    

    if(user){
        return children
    }
   return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;