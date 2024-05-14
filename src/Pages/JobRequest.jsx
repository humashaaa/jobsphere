import toast from 'react-hot-toast'
import useAuth from '../useAuth/useAuth'
import { useEffect, useState } from 'react'
import axios from 'axios'

const JobRequest = () => {
  const { user } = useAuth()

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    getData()
  }, [user])

  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_URL}/jobRequest/${user?.email}`
    )
    setJobs(data)
  }
  // console.log(jobs);

  // const handleStatus = async(id, previous, status)=>{
  //   // console.log(id, previous, status);
  //   const { data } = await axios.patch(
  //     `${import.meta.env.VITE_URL}/myJob/${id}`, 
  //     {status}
  //   )
  //   console.log(data);
  //   getData()


  // }


  return (
    <section className='container px-4 mx-auto pt-12'>
      <div className='flex items-center gap-x-3'>
        <h2 className='text-lg font-medium text-gray-800 '>Job Requests</h2>

        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
          {jobs.length} Requests
        </span>
      </div>

      <div className='flex flex-col mt-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Title</span>
                      </div>
                    </th>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Email</span>
                      </div>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <span>Deadline</span>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <button className='flex items-center gap-x-2'>
                        <span>Price</span>
                      </button>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      Category
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      Status
                    </th>

                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200 '>
                  {jobs.map(job => (
                    <tr key={job._id}>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {job.jobTitle}
                      </td>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {job.email}
                      </td>

                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {new Date(job.deadline).toLocaleDateString()}
                      </td>

                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        ${job.price}
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-2'>
                          <p
                            className={`px-3 py-1 rounded-full ${
                              job.category === 'On-site Job' &&
                              'text-blue-500 bg-blue-100/60'
                            } ${
                              job.category === 'Remote Job' &&
                              'text-emerald-500 bg-emerald-100/60'
                            } ${
                              job.category === 'Part-time' &&
                              'text-amber-500 bg-amber-100/60'
                            } ${
                              job.category === 'Hybrid' &&
                              'text-pink-500 bg-pink-100/60'
                            } text-xs`}
                          >
                            {job.category}
                          </p>
                        </div>
                      </td>
                      <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                        <div
                          className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                            job.status === 'Pending' &&
                            'bg-yellow-100/60 text-yellow-500'
                          } ${
                            job.status === 'In Progress' &&
                            'bg-blue-100/60 text-blue-500'
                          } ${
                            job.status === 'Complete' &&
                            'bg-emerald-100/60 text-emerald-500'
                          } ${
                            job.status === 'Rejected' &&
                            'bg-red-100/60 text-red-500'
                          } `}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              job.status === 'Pending' && 'bg-yellow-500'
                            } ${
                              job.status === 'In Progress' && 'bg-blue-500'
                            } ${job.status === 'Complete' && 'bg-green-500'} ${
                              job.status === 'Rejected' && 'bg-red-500'
                            }  `}
                          ></span>
                          <h2 className='text-sm font-normal '>{job.status}</h2>
                        </div>
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-6'>
                          {/* Accept Button: In Progress */}
                          <button
                            onClick={() =>
                              handleStatus(job._id, job.status, 'In Progress')
                            }
                            disabled={job.status === 'Complete'}
                            className='disabled:cursor-not-allowed text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              className='w-5 h-5'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='m4.5 12.75 6 6 9-13.5'
                              />
                            </svg>
                          </button>
                          {/* Reject Button */}
                          <button
                            onClick={() =>
                              handleStatus(job._id, job.status, 'Rejected')
                            }
                            disabled={job.status === 'Complete'}
                            className='disabled:cursor-not-allowed text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              className='w-5 h-5'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636'
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JobRequest;