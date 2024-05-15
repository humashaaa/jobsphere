import { useEffect, useRef, useState } from 'react'
// import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { usePDF } from 'react-to-pdf';
import generatePDF from 'react-to-pdf';



// import axios from 'axios'
import useAuth from '../useAuth/useAuth'
import { useQuery } from '@tanstack/react-query'

const AppliedJob = () => {

  const { user } = useAuth()
  const [filter, setFilter] = useState('')
  // const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  const targetRef = useRef();



  const {isPending, data: appliedJobs, isError, error, refetch} = useQuery({
    queryKey: ['appliedJobs'],
    queryFn: async ()=>{
        const res = await fetch(`${import.meta.env.VITE_URL}/appliedJobs/${user?.email}?filter=${filter}`);
        return res.json()
    }
})
useEffect(()=>{
  refetch()
}, [filter, refetch])
if(isPending){
    return <div className="item-center justify-center"><span className="loading loading-spinner text-neutral"></span></div>

}
if(isError) return <p>{error.message}</p>







  // const [appliedJobs, setAppliedJobs] = useState([])

  // useEffect(() => {
  //   getData()
  // }, [user])

  // const getData = async () => {
  //   const { data } = await axios(
  //     `${import.meta.env.VITE_URL}/appliedJobs/${user?.email}`
  //   )
  //   setAppliedJobs(data)
  // }
  // console.log(appliedJobs);



  // const handleStatus = async (id, status) => {
  //   const { data } = await axios.patch(
  //     `${import.meta.env.VITE_URL}/jobs/${id}`,
  //     { status }
  //   )
  //   console.log(data)
  //   getData()
  // }
 
  
  return (
    <section className='container px-4 mx-auto pt-12'>
     <div className='flex items-center justify-between'>
     <div className='flex items-center gap-x-3'>
        <h2 className='text-lg font-medium text-gray-800 '>My Applied Job</h2>

        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
        Applied on {appliedJobs.length} Jobs 
        </span>
      </div>

      <div>
            <select
              onChange={e => {
                setFilter(e.target.value)
                refetch()
              }}
              value={filter}
              name='category'
              id='category'
              className='border p-4 rounded-lg'
            >
              <option value=''>Filter By Category</option>
              <option value='On-site Job'>On-site Job</option>
              <option value='Remote Job'>Remote Job</option>
              <option value='Hybrid'>Hybrid</option>
              <option value='Part-time'>Part Time </option>
            </select>
          </div>

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
                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <button className='flex items-center gap-x-2'>
                        <span>Resume</span>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200 '>
                  {appliedJobs.map(job => (
                    <tr key={job._id}>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {job.jobTitle}
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
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              job.status === 'Pending' && 'bg-yellow-500'
                            } ${
                              job.status === 'In Progress' && 'bg-blue-500'
                            } ${job.status === 'Complete' && 'bg-green-500'} ${
                              job.status === 'Complete' && 'bg-green-500'
                            } ${job.status === 'Rejected' && 'bg-red-500'} `}
                          ></span>
                          <h2 className='text-sm font-normal '>{job.status}</h2>
                        </div>
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        {/* Complete Button */}
                        <button
                          disabled={job.status !== 'In Progress'}
                          title='Mark Complete'
                          className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none disabled:cursor-not-allowed'
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
                              d='M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75'
                            />
                          </svg>
                        </button>
                      </td>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {/* <button> {job.resume}</button> */}
                     <a href={job.resume}>Download pdf</a>
                     {/* onClick={() => 
                      toPDF()
                      generatePDF(targetRef, {filename: 'page.pdf'})

                      } */}
                     
                      {/* <div ref={targetRef}> {job.resume}
            Content to be generated to PDF
         </div> */}
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

export default AppliedJob;