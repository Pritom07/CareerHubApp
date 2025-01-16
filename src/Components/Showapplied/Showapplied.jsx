import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
// import { removeFromstorage } from "../localstorage";

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
  //   const removeapply = () => {
  //     removeFromstorage(id);
  //   };
  return (
    <div>
      <div className="w-7xl mx-auto px-2">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src={logo} className="w-64 rounded-3xl ml-4" />
          </figure>
          <div className="card-body h-56">
            <h2 className="card-title font-extrabold text-2xl">{job_title}</h2>
            <p className="font-semibold text-xl text-[#757575]">
              {company_name}
            </p>
            <div className="mt-1">
              <button
                type="button"
                className="multibtn p-2 font-extrabold text-[16px]"
              >
                {remote_or_onsite}
              </button>
              <button
                type="button"
                className="multibtn p-2 ml-3 font-extrabold text-[16px]"
              >
                {job_type}
              </button>
            </div>
            <div className="flex items-center text-[20px] font-semibold text-[#757575] mt-1">
              <h1 className="flex items-center">
                <CiLocationOn className="text-2xl font-extrabold" />
                {location}
              </h1>
              <h1 className="flex items-center ml-3">
                <HiOutlineCurrencyDollar className="text-2xl font-bold" />
                Salary : {salary}
              </h1>
            </div>
            <div className="card-actions justify-end -mt-12">
              <button
                className="bg-gradient-to-r from-indigo-500 to-purple-500 md:text-[20px] font-extrabold text-white  rounded-lg p-2 hover:scale-95"
                onClick={handleClick}
              >
                View Details
              </button>
              <button
                onClick={() => removeapply(id)}
                className="bg-red-700 text-white rounded-lg md:text-[20px] font-extrabold hover:scale-95 p-2"
              >
                Remove Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Showapplied.propTypes = {
  eachappliedjob: PropTypes.object.isRequired,
};
export default Showapplied;
