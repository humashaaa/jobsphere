import { Link } from "react-router-dom";
import error from '../assets/404.json'
import Lottie from "lottie-react";
const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center">
            <div className="flex justify-center">
            <Lottie className="w-[38rem] " animationData={error}></Lottie>

            </div>
        <Link to='/' className="mx-auto text-gray-800 bg-slate-200 p-3 rounded-3xl">Go Back Home</Link>
    </div>
    );
};

export default ErrorPage;