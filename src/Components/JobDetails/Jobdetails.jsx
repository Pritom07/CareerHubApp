import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./Jobdetails.css";

const Jobdetails = () => {
  const data = useLoaderData();
  const { jobId } = useParams();
  const intjobId = parseInt(jobId);
  const desiredjob = data.find((job) => job.id === intjobId);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = desiredjob;
  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };
  return (
    <div className="w-7xl mx-auto">
      <div className="bg-[#7E90FE1A] w-screen padding">
        <h1 className="font-extrabold text-4xl text-center">Job Details</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-40 mt-5 md:mt-10 max-w-7xl mx-auto px-2">
        <div className="md:w-[120%]">
          <div className="text-justify">
            <h1>
              <span className="text-xl font-bold">Job Description :</span>&nbsp;
              <span className="text-slate-600 font-medium text-lg">
                {job_description}
              </span>
            </h1>
            <h1 className="mt-3">
              <span className="text-xl font-bold">Job Responsibility :</span>
              &nbsp;
              <span className="text-slate-600 font-medium text-lg">
                {job_responsibility}
              </span>
            </h1>
            <h1 className="mt-3">
              <span className="text-xl font-bold">
                Educational Requirements :
              </span>
              &nbsp;
              <span className="text-slate-600 font-medium text-lg">
                {educational_requirements}
              </span>
            </h1>
            <h1 className="mt-3">
              <span className="text-xl font-bold">Experiences :</span>&nbsp;
              <span className="text-slate-600 font-medium text-lg">
                {experiences}
              </span>
            </h1>
          </div>
          <button
            type="button"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 md:text-[20px] font-extrabold text-white w-full rounded-lg py-2 mt-4"
            onClick={goback}
          >
            <FaArrowLeftLong className="inline mr-3" />
            Go Back
          </button>
        </div>

        <div className="md:w-[85%] flex flex-col">
          <div className="bg-[#7E90FE26] px-9 py-5 rounded-2xl flex-grow">
            <h1 className="border-b-2 border-slate-300 font-bold text-2xl pb-3">
              Job Details
            </h1>
            <h1 className="mt-3">
              <HiOutlineCurrencyDollar className="inline text-[#7E90FEFF] text-2xl mr-1" />
              &nbsp;<span className="text-xl font-bold">Salary :</span>
              <span className="text-slate-600 font-semibold text-lg">
                {salary} (Per Month)
              </span>
            </h1>
            <h1 className="mt-3">
              <SlCalender className="inline text-[#7E90FEFF] text-xl mr-1" />
              &nbsp;<span className="text-xl font-bold">Job Title :</span>
              <span className="text-slate-600 font-semibold text-lg">
                {job_title}
              </span>
            </h1>
            <h1 className="border-b-2 border-slate-300 font-bold text-2xl mt-4 pb-3">
              Contact Information
            </h1>
            <h1 className="mt-3">
              <MdOutlinePhoneInTalk className="inline text-[#7E90FEFF] text-xl mr-1" />
              &nbsp;<span className="text-xl font-bold">Phone :</span>
              <span className="text-slate-600 font-semibold text-lg">
                {contact_information.phone}
              </span>
            </h1>
            <h1 className="mt-3">
              <HiOutlineMail className="inline text-[#7E90FEFF] text-xl mr-1" />
              &nbsp;<span className="text-xl font-bold">Email :</span>
              <span className="text-slate-600 font-semibold text-lg">
                {contact_information.email}
              </span>
            </h1>
            <h1 className="mt-3">
              <CiLocationOn className="inline text-[#7E90FEFF] text-2xl mr-1" />
              &nbsp;<span className="text-xl font-bold">Address :</span>
              <span className="text-slate-600 font-semibold text-lg">
                {contact_information.address}
              </span>
            </h1>
          </div>
          <button
            type="button"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 md:text-[20px] font-extrabold text-white w-full rounded-lg py-2 mt-4"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobdetails;
