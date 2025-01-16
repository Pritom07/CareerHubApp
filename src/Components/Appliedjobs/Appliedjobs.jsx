import { useLoaderData, useParams } from "react-router-dom";
import EachApplied from "../EachApplied/EachApplied";
import { setdata } from "../localstorage";

const Appliedjobs = () => {
  const jobdata = useLoaderData();
  const { jobId } = useParams();
  const intId = parseInt(jobId);
  setdata(intId);
  return (
    <div className="w-7xl mx-auto">
      <div className="bg-[#7E90FE1A] w-screen padding mb-7">
        <h1 className="font-extrabold text-4xl text-center">Applied Jobs</h1>
      </div>
      <EachApplied jobdata={jobdata}></EachApplied>
    </div>
  );
};

export default Appliedjobs;

/* <div className="w-7xl mx-auto px-2">
  <div className="card card-side bg-base-100 shadow-xl">
    <figure>
      <img src={logo} className="w-64 rounded-3xl ml-4" />
    </figure>
    <div className="card-body h-56">
      <h2 className="card-title font-extrabold text-2xl">{job_title}</h2>
      <p className="font-semibold text-xl text-[#757575]">{company_name}</p>
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
      </div>
    </div>
  </div>
</div> */
