import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";
import "./Job.css";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="mt-9 px-2">
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={logo} />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-extrabold text-2xl">{job_title}</h2>
          <p className="font-semibold text-2xl text-[#757575] -mt-1">
            {company_name}
          </p>
          <div className="flex items-center mt-1">
            <div>
              <button className="multibtn text-[16px] font-semibold p-2">
                {remote_or_onsite}
              </button>
            </div>
            <div className="ml-3">
              <button className="multibtn text-[16px] font-semibold p-2 rounded-3xl">
                {job_type}
              </button>
            </div>
          </div>
          <div className="text-[#757575] md:text-[17px] font-semibold flex items-center mt-1">
            <div>
              <p className="text-nowrap">
                <IoLocationOutline className="inline mr-1" />
                {location}
              </p>
            </div>
            <div className="ml-5">
              <p className="text-nowrap">
                <HiOutlineCurrencyDollar className="inline mr-1" />
                Salary :{salary}
              </p>
            </div>
          </div>
          <div className="card-actions mt-2">
            <button className="text-[20px] font-extrabold text-white btn bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-x-110">
              View Details <FaArrowRightLong className="inline" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
