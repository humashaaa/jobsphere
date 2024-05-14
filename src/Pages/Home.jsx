// import { useLoaderData } from "react-router-dom";
import ReactTabs from "../Components/ReactTabs";
import SwipperSlide from "../Components/SwipperSlide";
import Extra from "./Extra";
import Contact from "../Components/Contact";
import { useQuery } from "@tanstack/react-query";
// import Lottie from "lottie-react";

const Home = () => {
    // const jobs = useLoaderData()
    const {isPending, data: jobs, isError, error} = useQuery({
        queryKey: ['jobs'],
        queryFn: async ()=>{
            const res = await fetch(`${import.meta.env.VITE_URL}/jobs`);
            return res.json()
        }
    })
    
    if(isPending){
        return <div className="item-center justify-center"><span className="loading loading-spinner text-neutral"></span></div>
    }
    if(isError) return <p>{error.message}</p>
    

    return (
        <div>
            <SwipperSlide></SwipperSlide>
           <div >
                <h1 className=" mt-20 text-center mb-6 font-bold text-2xl md:text-3xl">Search Jobs by Categories</h1>
                <p className="text-center md:ml-80 text-slate-500 mb-16 w-80 mx-auto md:w-[54rem]">Your ultimate destination for job searching by categories. Whether you're seeking on-site opportunities, remote positions, hybrid roles, or part-time gigs, JobSphere simplifies the process, ensuring you find the perfect fit for your lifestyle and career goals. Start exploring today and unlock a world of possibilities tailored to your preferences.</p>
            </div>
            <div className="flex justify-center item-center">
                <ReactTabs jobs={jobs}></ReactTabs>
            </div>
            <Extra></Extra>
            <Contact></Contact>
        </div>
    );
};

export default Home;