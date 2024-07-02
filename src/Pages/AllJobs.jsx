import { useEffect, useState } from "react";
import useAuth from "../useAuth/useAuth";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const AllJobs = () => {
    const { user } = useAuth()
    const [search, setSearch] = useState('')
    const [searchText, setSearchText] = useState('')

    const {isPending, data: jobs, isError, error, refetch} = useQuery({
      queryKey: ['jobs'],
      queryFn: async ()=>{
          const res = await fetch(`${import.meta.env.VITE_URL}/jobs?search=${search}`);
          return res.json()
      }
  })


  useEffect(()=>{
    refetch()
  }, [search, refetch])
  
  if(isPending){
      return <div className="item-center justify-center"><span className="loading loading-spinner text-neutral"></span></div>
  }
  if(isError) return <p>{error.message}</p>
  // const {_id} = jobs

 console.log(jobs);

  

    const handleSearch = e => {
      e.preventDefault()
  
      setSearch(searchText)
    }
  
    console.log(search)



    return (
        <section className='container px-4 mx-auto pt-12'>

<form
 onSubmit={handleSearch}
 >
            <div className='flex p-1 overflow-hidden  rounded-lg    focus-within:border-blue-400 focus-within:ring-blue-300 items-center justify-center'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                onChange={e => {setSearchText(e.target.value)
                  refetch()
                }
                }
                value={searchText}
                name='search'
                placeholder='Enter Job Title'
                aria-label='Enter Job Title'
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-blue-500 rounded-md '>
                Search
              </button>
            </div>
          </form>
     
    
     <div className='flex items-center gap-x-3'>
        <h2 className='text-lg font-medium text-gray-800 '>Currently Available Jobs</h2>

        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
        Available {jobs.length} Jobs 
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
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <span>Posting Date</span>
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
                        {new Date(job.postingDate).toLocaleDateString()}
                      </td>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {new Date(job.deadline).toLocaleDateString()}
                      </td>

                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        ${job.min_price} - ${job.max_price}
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-2'>
                          <p
                            className={`px-3 py-1  ${
                              job.category === 'On-site Job' &&
                              'text-blue-500 bg-blue-100/60'
                            } ${
                              job.category === 'Remote Job' &&
                              'text-emerald-500 bg-emerald-100/60'
                            } ${
                              job.category === 'Part-time' &&
                              'text-amber-500 bg-emerald-100/60'
                            } ${
                              job.category === 'Hybrid' &&
                              'text-pink-500 bg-pink-100/60'
                            } text-xs  rounded-full`}
                          >
                            {job.category}
                          </p>
                        </div>
                      </td>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                      <Link
                      //  to={`/job/${jobs._id}`}
                        className="btn bg-blue-500 hover:bg-blue-700 text-white">View Details</Link>
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
    );
};

export default AllJobs;