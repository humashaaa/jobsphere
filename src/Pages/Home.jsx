import { useLoaderData } from "react-router-dom";
import ReactTabs from "../Components/ReactTabs";
import SwipperSlide from "../Components/SwipperSlide";

const Home = () => {
    const jobs = useLoaderData()

    return (
        <div>
            <SwipperSlide></SwipperSlide>
            <div >
                <h1 className=" mt-20 text-center mb-6 font-bold text-3xl">Search Jobs by Categories</h1>
                <p className="text-center ml-80 text-slate-500 mb-16 w-[54rem]">Your ultimate destination for job searching by categories. Whether you're seeking on-site opportunities, remote positions, hybrid roles, or part-time gigs, JobSphere simplifies the process, ensuring you find the perfect fit for your lifestyle and career goals. Start exploring today and unlock a world of possibilities tailored to your preferences.</p>
            </div>
            <div className="flex justify-center item-center">
                <ReactTabs jobs={jobs}></ReactTabs>
            </div>
        </div>
    );
};

export default Home;