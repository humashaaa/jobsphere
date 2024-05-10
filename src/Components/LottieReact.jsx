import Lottie from "lottie-react";
import loginAnimation from '../assets/LoginAnimation.json'
const LottieReact = () => {
    return (
        <>
        <Lottie className="w-[44rem]" animationData={loginAnimation}></Lottie>
            
        </>
    );
};

export default LottieReact;