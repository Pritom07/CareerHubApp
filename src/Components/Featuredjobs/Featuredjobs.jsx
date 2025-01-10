import { useEffect, useState } from "react";
import { FaArrowTurnDown } from "react-icons/fa6";
import { FaArrowTurnUp } from "react-icons/fa6";
import Job from "../Job/Job";

const Featuredjobs = () => {
  const [jobsdata, Setjobsdata] = useState([]);
  const [visible, setvisible] = useState(true);
  const [filterdata, Setfilterdata] = useState([]);

  const handlevisible = () => {
    setvisible(!visible);
  };
  useEffect(() => {
    if (visible === true) {
      Setfilterdata(jobsdata.slice(0, 3));
      return;
    } else {
      Setfilterdata(jobsdata);
    }
  }, [visible, jobsdata]);

  useEffect(() => {
    fetch("data/jobs.json")
      .then((res) => res.json())
      .then((data) => Setjobsdata(data));
  }, []);
  return (
    <div className="mt-11 w-7xl mx-auto px-1">
      <h1 className="text-center text-5xl font-extrabold">Featured Jobs</h1>
      <p className="text-[#757575] font-semibold text-[18px] text-center mt-3">
        Explore thousands of job opportunities with all the information you
        need. its your future.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {filterdata.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center">
        <button
          onClick={handlevisible}
          type="btn"
          className={`bg-gradient-to-r from-indigo-500 to-purple-500 md:text-[20px] font-extrabold text-white px-3 py-2 rounded-lg ${
            visible ? "block" : "hidden"
          }`}
        >
          See All Jobs
          <FaArrowTurnDown className="inline ml-1" />
        </button>
        <button
          onClick={handlevisible}
          type="btn"
          className={`bg-gradient-to-r from-indigo-500 to-purple-500 md:text-[20px] font-extrabold text-white px-3 py-2 rounded-lg ${
            visible ? "hidden" : "block"
          }`}
        >
          Show Less
          <FaArrowTurnUp className="inline ml-1" />
        </button>
      </div>
    </div>
  );
};

export default Featuredjobs;
