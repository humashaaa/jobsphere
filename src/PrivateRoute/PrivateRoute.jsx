import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../useAuth/useAuth";
import Loading from '../assets/Loading.json'
import Lottie from "lottie-react";
const PrivateRoute = ({children}) => {
    const{user, loading}= useAuth()
    const location = useLocation()
    console.log(user, loading);

    if(loading){
        return <Lottie animationData={Loading}></Lottie>
    }
    
    

    if(user){
        return children
    }
   return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;