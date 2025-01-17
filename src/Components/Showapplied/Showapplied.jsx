import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Showapplied = ({ eachappliedjob, removeapply }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = eachappliedjob;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div className="w-full px-4 mb-3">
      <div className="card bg-base-100 shadow-xl flex flex-col md:flex-row items-center md:items-start md:gap-4 lg:flex-row">
        <figure className="w-full md:w-1/3 lg:w-1/4 p-4 md:p-2 md:mt-5">
          <img src={logo} alt="Company Logo" className="w-full rounded-3xl" />
        </figure>
        <div className="card-body w-full md:w-2/3 lg:w-3/4">
          <h2 className="card-title font-extrabold text-lg md:text-2xl">
            {job_title}
          </h2>
          <p className="font-semibold text-sm md:text-xl text-[#757575]">
            {company_name}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <button
              type="button"
              className="multibtn px-3 py-2 font-extrabold text-[14px] md:text-[16px]"
            >
              {remote_or_onsite}
            </button>
            <button
              type="button"
              className="multibtn px-3 py-2 font-extrabold text-[14px] md:text-[16px]"
            >
              {job_type}
            </button>
          </div>
          <div className="mt-2 flex flex-col md:flex-row md:items-center text-sm md:text-lg font-semibold text-[#757575]">
            <h1 className="flex items-center mb-1 md:mb-0">
              <CiLocationOn className="text-xl md:text-2xl font-extrabold mr-1" />
              {location}
            </h1>
            <h1 className="flex items-center md:ml-4">
              <HiOutlineCurrencyDollar className="text-xl md:text-2xl font-bold mr-1" />
              Salary: {salary}
            </h1>
          </div>
          <div className="mt-4 flex gap-2 lg:justify-end text-nowrap">
            <button
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-sm md:text-[20px] font-extrabold text-white rounded-lg px-4 py-3 hover:scale-95"
              onClick={handleClick}
            >
              View Details
            </button>
            <button
              onClick={() => removeapply(id)}
              className="bg-red-700 text-white text-sm md:text-[20px] font-extrabold rounded-lg px-4 py-3 hover:scale-95"
            >
              Remove Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Showapplied.propTypes = {
  eachappliedjob: PropTypes.object.isRequired,
  removeapply: PropTypes.func.isRequired,
};
export default Showapplied;
