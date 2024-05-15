import { useLoaderData, useNavigate } from 'react-router-dom';
// import img from '../assets/hire.jpg'
import Lottie from 'lottie-react'
import hire from '../assets/hire.json'
import useAuth from '../useAuth/useAuth';
import { SiTicktick } from "react-icons/si";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';

const JobDetails = () => {
    const { user } = useAuth();
    const navigate = useNavigate()
//   console.log(user);
  const job = useLoaderData();
  const [startDate, setStartDate] = useState(new Date());
  const currentTime = Date.now();


    const {
        category,
        jobTitle,
        buyerName,
        postingDate,
        deadline,
        description,
        applicantsNumber,
        min_price,
        max_price,
        buyer
      } = job;
      console.log(job);



    //   const {isPending, data: job =[], isError, error, mutateAsync} = useMutation({
    //     mutationFn: async(id)=>{
    //       const { data } = await axios.patch(`/bid/${id}`)
    //   console.log(data)
    //   return data

    //     }
       
    // })
    
    // if(isPending){
    //     return <div className="item-center justify-center"><span className="loading loading-spinner text-neutral"></span></div>
    // }
    // if(isError) return <p>{error.message}</p>








      const handleFormSubmit = async (e) => {
        
        e.preventDefault();
        if (user?.email === job.buyer?.email)
          return toast.error('Action not permitted!')
        // const jobId = _id;
        const price = parseFloat(e.target.price.value);
        if (price < parseFloat(min_price))
            return toast.error('You have to offer more or at least equal to Minimum Price')
        const comment = e.target.comment.value;
        const jobTitle = e.target.jobTitle.value;
        const resume = e.target.resume.value;

        const email = user?.email;
        const deadline = startDate
        if ( deadline > currentTime) 
          return toast.error('Deadline has passed.')
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
            buyer,
            jobTitle,
            resume
          };
          console.table(applyData);
    

          try {
            const { data } = await axios.post(
              `${import.meta.env.VITE_URL}/appliedJobs`,
              applyData
            )
            console.log(data)
            toast.success('You Applied For This Job Successfully!')
            navigate('/appliedJobs')
          } catch (err) {
            console.log(err)
            console.log(err.message)
          }
    
// mutateAsync({id})
        }

      
      
 

      
          
    return (
        <div className='flex  mt-10 flex-row-reverse'>
             

            <div className="mx-auto card w-[65rem] bg-base-100 shadow-xl ">
  <div className="card-body">
  <div>
    <div className='relative'>
    <p className='flex justify-start absolute top-4'>
            <span className="px-4 py-1 text-[12px] text-blue-800 uppercase bg-blue-200 rounded-lg   ">
              {category}
            </span>
          </p>
    </div>
    <div>

      <img className='h-[25rem] w-full' src={job.buyer.photo} alt="" />

    </div>
  </div>
         <div >
            
            {/* <h1 className='font-bold text-3xl text-center'>{jobTitle}</h1> */}
            <h1 className='font-semibold mb-6 mt-6 text-3xl text-center text-gray-700'>Job Information</h1>

       <div className='flex mt-9'>
       <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800 mt-3">
	<div className='flex items-center justify-around'>

  <div className="overflow-x-auto">
		<table className="">
			
			<tbody>
                {/* <tr> </tr> */}
				<tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p className='text-gray-500'>Job Title</p>
					</td>
					<td className="p-3">
						<p className='font-bold text-xl'> {jobTitle}</p>
					</td>					
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p className='text-gray-500'>Buyer Name</p>
					</td>
					<td className="p-3">
						<p className='font-semibold '> {buyerName}</p>
					</td>					
				</tr>

				<tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p className='text-gray-500'>Buyer Email</p>
					</td>
					<td className="p-3">
						<p className='font-semibold text-gray-600'> {job.buyer.email}</p>
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
						<p className='font-semibold'> ${min_price} - ${max_price}/month</p>
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
				<tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p className='text-gray-500'>Deadline</p>
					</td>
					<td className="p-3">
						<p className='font-semibold'>{new Date(deadline).toLocaleDateString()}</p>
					</td>
					
				</tr>
				
			</tbody>
		</table>
	</div>


    <div>
      {/* description */}
      <h1 className='text-xl font-bold text-center mt-5 mb-4'>What we are looking for</h1>
      <p className='w-[26rem]'>{description}</p>
    </div>
  </div>
</div>
       
       </div>
         </div>
  </div>

  <div className='mt-3 mx-auto'>
        <section className="p-6 w-[35rem]  bg-white rounded-md shadow-md flex-1 md:min-h-[350px] ">
        <h2 className="text-lg text-center mb-4 space-y-4 font-bold text-gray-700 capitalize ">
          Apply For This Job
        </h2>

        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
            <div>
              <label className="text-gray-700 " htmlFor="jobTitle">
                Position
              </label>
              <input
                id="jobTitle"
                type="text"
                name="jobTitle"
                defaultValue={jobTitle}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            </div>
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
    
              <DatePicker className=" p-2  block w-60 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" selected={startDate} onChange={(date) => setStartDate(date)} />

            </div>
          </div>
            <div>
              <label className="text-gray-700" htmlFor="comment">Submit Your Resume</label>
              <input
                id="resume"
                name="resume"
                type="file"
                placeholder='your resume'
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />

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
    );
};

export default JobDetails;