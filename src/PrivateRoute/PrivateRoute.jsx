import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../useAuth/useAuth";

const PrivateRoute = ({children}) => {
    const{user, loading}= useAuth()
    const location = useLocation()
    console.log(user, loading);

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>

    }
    
    

    if(user){
        return children
    }
   return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;