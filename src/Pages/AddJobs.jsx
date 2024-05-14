import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import useAuth from '../useAuth/useAuth'


const AddJobs = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  const [startDate, setStartDate] = useState(new Date())
  const [todayDate, setTodayStartDate] = useState(new Date())

  const handleFormSubmit = async e => {
    e.preventDefault()
    const form = e.target
    const jobTitle = form.jobTitle.value
    const email = user?.email
    const buyerName = form.buyerName.value
    const photo = form.photo.value
    const postingDate = startDate
    const deadline = todayDate
    const category = form.category.value
    const min_price = parseFloat(form.min_price.value)
    const max_price = parseFloat(form.max_price.value)
    const description = form.description.value
    const jobData = {
      jobTitle,
      deadline,
      postingDate,
      category,
      min_price,
      max_price,
      description,
      buyerName,
      buyer: {
        email,
        buyerName,
        photo
      },
    }
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_URL}/job`,
        jobData
      )
      console.log(data)
      toast.success('Job Added Successfully!')
      navigate('/myJobs')
    } catch (err) {
      console.log(err)
    }
  }
  return (
   <div className='flex'>
   
     <div className='flex  justify-center items-center min-h-[calc(100vh-306px)] my-12'>
      <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
        <h2 className='text-lg font-semibold text-center  text-gray-700 capitalize '>
          Post a Job
        </h2>

        <form onSubmit={handleFormSubmit}>

        <div className='flex items-center gap-7 mt-10 md:flex-row flex-col'>
        <div>
              <label className='text-gray-700 ' htmlFor='jobTitle'>
                Job Title
              </label>
              <input
                id='jobTitle'
                name='jobTitle'
                type='text'
                className='block w-full md:w-80 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='photo_URL'>
                Photo URL
              </label>
              <input
                id='photo_URL'
                name='photo'
                type='text'
                className='block w-full md:w-80 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            </div>
        <div className='flex items-center gap-7 mt-5'>
        <div>
              <label className='text-gray-700 ' htmlFor='buyerName'>
                Name
              </label>
              <input
                id='buyerName'
                type='buyerName'
                name='buyerName'
                disabled
                defaultValue={user?.displayName}
                className='block w-80 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='emailAddress'>
                Email Address
              </label>
              <input
                id='emailAddress'
                type='email'
                name='email'
                disabled
                defaultValue={user?.email}
                className='block w-80 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            </div>


            {/* 3rd row */}
            <div className='flex items-center gap-7 mt-5'>
            
                <div className='flex flex-col gap-2 '>
              <label className='text-gray-700 ' htmlFor='category'>
                Category
              </label>
              <select
                name='category'
                id='category'
                className='border p-2 rounded-md'
              >
                <option value='On-site Job'>On site Job</option>
                <option value='Remote Job'>Remote Job</option>
                <option value='Hybrid'>Hybrid</option>
                <option value='Part-time'>Part-Time</option>
              </select>
            
                </div>

                {/* min price max price */}
                <div>
              <label className='text-gray-700 ' htmlFor='min_price'>
                Minimum Price
              </label>
              <input
                id='min_price'
                name='min_price'
                type='number'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='max_price'>
                Maximum Price
              </label>
              <input
                id='max_price'
                name='max_price'
                type='number'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            </div>

            {/* 4th row */}

            {/* <div className='flex items-center gap-7 mt-5'>
        <div>
              <label className='text-gray-700 ' htmlFor='salary_range'>
                Salary Range
              </label>
              <input
                id='min_price'
                name='min_price'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
              <input
                id='max_price'
                name='max_price'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='photo_URL'>
                Photo URL
              </label>
              <input
                id='photo_URL'
                name='photo'
                type='text'
                className='block w-80 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            </div> */}
            <div className='flex items-center gap-7 mt-5'>
            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700'>Posting Date</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className='border p-2 rounded-md'
                selected={startDate}
                onChange={date => setStartDate(date)}
              />
            </div>

            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700'>Application Ends</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className='border p-2 rounded-md'
                selected={todayDate}
                onChange={date => setTodayStartDate(date)}
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='applicants'>
                Applicants Number
              </label>
              <input
                id='applicants'
                name='applicants'
                type='number'
                disabled
                defaultValue={"0"}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            </div>

            <div className='mt-5'>
            <div className='flex flex-col gap-2 mt-4'>
            <label className='text-gray-700 ' htmlFor='description'>
              Description
            </label>
            <textarea
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='description'
              id='description'
            ></textarea>
          </div>
            </div>
          
    
          <div className='flex justify-end mt-6'>
            <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
   </div>

    );
};

export default AddJobs;