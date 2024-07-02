import { Link } from "react-router-dom";
import { RiMoneyDollarCircleLine } from "react-icons/ri";


const JobCard = ({ job }) => {
  const {
    category,
    buyerName,
    jobTitle,
    postingDate,
    deadline,
    salaryRange,
    applicant_num,
    min_price,
    max_price,
     _id
  } = job || {}
  // console.log(job);
  console.log(applicant_num);
  return (
    <div className="mt-12">
      <div
        // to={`/job/${_id}`}
        className="card w-96 bg-base-100 shadow-xl w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all"
      >
        <div className="card-body">
          <p>
            <span className="px-3 py-1 text-[10px] text-blue-800 uppercase bg-blue-200 rounded-full ">
              {category}
            </span>
          </p>
          <h2 className="card-title font-bold">{jobTitle}</h2>
          <div>
            <p className=" font-semibold text-blue-700">{buyerName}</p>
            
          </div>
          <p><span className="font-semibold">Salary Range</span>: <span>${min_price} - ${max_price}</span></p>

          <p> <span className="font-semibold"> Applicants number</span>:  {applicant_num}</p>
         
            <p> <span className="font-semibold">Job posting date</span>:  {new Date(postingDate).toLocaleDateString()}</p>
          <p> <span className="font-semibold text-red-700">Application Ends</span>: {new Date(deadline).toLocaleDateString()}</p>

          
          <div className="card-actions justify-center mt-4">
            <Link to={`/job/${_id}`} className="btn bg-blue-500 hover:bg-blue-700 text-white">View Details</Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default JobCard;
