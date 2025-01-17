import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";
import PropTypes from "prop-types";
import "./Job.css";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;

  const navigate = useNavigate();

  const DetailsHandling = () => {
    navigate(`job/${id}`);
  };

  return (
    <div className="mt-10 px-2">
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
          <div className="text-[#757575] md:text-[16px] lg:text-[13px] font-semibold flex items-center mt-1 md:pr-5">
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
            <button
              className="text-[20px] font-extrabold text-white btn bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-x-110"
              onClick={DetailsHandling}
            >
              View Details <FaArrowRightLong className="inline" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object.isRequired,
};

export default Job;
