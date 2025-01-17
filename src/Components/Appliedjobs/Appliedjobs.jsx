import { useLoaderData, useParams } from "react-router-dom";
import EachApplied from "../EachApplied/EachApplied";
import { setdata } from "../localstorage";

const Appliedjobs = () => {
  const jobdata = useLoaderData();
  const { jobId } = useParams();
  const intId = parseInt(jobId);
  if (!isNaN(intId)) {
    setdata(intId);
  }
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
