import { useLoaderData } from 'react-router-dom';
import img from '../assets/hire.jpg'
import useAuth from '../useAuth/useAuth';
import { SiTicktick } from "react-icons/si";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const JobDetails = () => {
    const { user } = useAuth();
//   console.log(user);
  const job = useLoaderData();
  const [startDate, setStartDate] = useState(new Date());


    const {
        category,
        buyerName,
        jobTitle,
        postingDate,
        deadline,
        applicantsNumber,
        min_price,
        max_price
      } = job;

      const handleFormSubmit = async (e) => {
        
        e.preventDefault();
        // const jobId = _id;
        const price = parseFloat(e.target.price.value);
        if (price < parseFloat(min_price))
            return toast.error('You have to offer more or at least equal to Minimum Price')
        const comment = e.target.comment.value;
        const email = user?.email;
        const deadline = startDate
        const status = "pending";
        const applyData = {
            // jobId,
            price,
            comment,
            email,
            status,
            buyerName,
            category,
            deadline,
          };
          console.table(applyData);
    

        try {
            const { data } = await axios.post(
              `${import.meta.env.VITE_URL}/appliedJobs`,
              applyData
            )
            console.log(data)
          } catch (err) {
            console.log(err)
            console.log(err.message)
          }
        }
      
          
    return (
        <div className='relative'>
            <div >
                <img className='w-full h-[700px]' src={img} alt="" />
            </div>

            <div className="mx-auto card w-[70rem] bg-base-100 shadow-xl absolute top-[19rem] left-48">
  <div className="card-body">
  <p className='flex justify-end'>
            <span className="px-3 py-1 text-[13px] text-blue-800 uppercase bg-blue-200 rounded-full ">
              {category}
            </span>
          </p>
         <div >
            
            <h1 className='font-bold text-3xl text-center'>{jobTitle}</h1>


       <div className='flex mt-9'>
       <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800 mt-3">
	<div className="overflow-x-auto">
		<table className="">
			
			<tbody>
                <tr> <h1 className='font-semibold mb-6 text-2xl  text-gray-700'>Job Information</h1></tr>
				<tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p className='text-gray-500'>Company name</p>
					</td>
					<td className="p-3">
						<p className='font-semibold text-xl'> {buyerName}</p>
					</td>
					
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p className='text-gray-500'>Job Type</p>
					</td>
					<td className="p-3">
						<p className='font-semibold'> {category}</p>
					</td>
					
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p className='text-gray-500'>Offered Salary</p>
					</td>
					<td className="p-3">
						<p className='font-semibold'> ${min_price} - ${max_price}/year</p>
					</td>
					
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p className='text-gray-500'>Already Applied</p>
					</td>
					<td className="p-3">
						<p className='font-semibold'>{applicantsNumber}</p>
					</td>
					
				</tr>
				
			</tbody>
		</table>
	</div>
</div>
        <div className='mt-3'>
        <section className="p-6 w-[35rem]  bg-white rounded-md shadow-md flex-1 md:min-h-[350px] ">
        <h2 className="text-lg font-bold text-gray-700 capitalize ">
          Apply For This Job
        </h2>

        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="price">
                Price
              </label>
              <input
                id="price"
                type="text"
                name="price"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                disabled
                defaultValue={user?.email}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="comment">
                Comment
              </label>
              <input
                id="comment"
                name="comment"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Deadline</label>
    
              <DatePicker className="border p-2 rounded-md block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" selected={startDate} onChange={(date) => setStartDate(date)} />

            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Apply Now
            </button>
          </div>
        </form>
      </section>
        </div>
       </div>
         </div>
  </div>






</div>
        </div>
    );
};

export default JobDetails;