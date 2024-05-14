import Lottie from 'lottie-react';
import hire from '../assets/hire.json'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const Extra = () => {
    return (
        <motion.div
        // variants={{
        //     hidden: {opacity:0, y:75},
        //     visible:{opacity:1, y:0}
        // }}
        // initial='hidden'
        // animate='visible'
         initial={{opacity: 0, y:500}}
         animate={{opacity: 1, y:0}}
         transition={{duration:2, delay:1}}

        // whileInView={{opacity:0}}
        // viewport={{
        //     amount:'all'
        // }}
        >
        <div className='flex mt-16 item-center md:gap-10 md:flex-row flex-col '>

               

            <div className=' md:w-[40rem] w-96'>
            <Lottie animationData={hire}></Lottie>

            </div>
           
            <div className='space-y-5 mt-24 '>
                <h1 className=' font-extrabold md:font-bold md:text-3xl text-xl'>Start Your Career With JobSphere</h1>
                
                <p className='text-gray-500 w-80 md:w-[39rem] mb-5 ml-3'>Welcome to JobSphere, your ultimate destination for finding the perfect job match! Explore career resources, receive expert guidance, and take the next step towards your dream job today with JobSphere. Join us and discover endless possibilities for your career growth and success!</p>
                <Link to='/allJobs' className='btn btn-primary ml-3'>Explore Now</Link>
            </div>
            </div>
   
        </motion.div>

    );
};

export default Extra;