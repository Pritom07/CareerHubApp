import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getitem, removeFromstorage } from "../localstorage";
import Showapplied from "../Showapplied/Showapplied";
import { IoIosArrowDown } from "react-icons/io";

const EachApplied = ({ jobdata }) => {
  const [idarray, setidarray] = useState([]);
  const [findjob, setfindjob] = useState([]);
  const [filterjob, Setfilterjob] = useState([]);
  useEffect(() => {
    const arr = getitem();
    setidarray(arr || []);
  }, []);

  useEffect(() => {
    if (jobdata.length > 0 && idarray.length > 0) {
      const searchres = [];
      for (const idx of idarray) {
        const findingjob = jobdata.find((job) => job.id === idx);
        if (findingjob) {
          searchres.push(findingjob);
        }
      }
      setfindjob(searchres);
      Setfilterjob(searchres);
    }
  }, [idarray, jobdata]);

  const removeapply = (idx) => {
    removeFromstorage(idx);
    const updatedIds = idarray.filter((jobId) => jobId !== idx);
    setidarray(updatedIds);
    const ensured = findjob.filter((job) => job.id !== idx);
    setfindjob(ensured);
    Setfilterjob(ensured);
  };

  const handleFilter = (key) => {
    console.log("find job array", findjob);
    if (key === "Remote") {
      const filtered = findjob.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      Setfilterjob(filtered);
      return;
    }
    if (key === "Onsite") {
      const filtered = findjob.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      Setfilterjob(filtered);
      return;
    }
    if (key === "All") {
      Setfilterjob(findjob);
      return;
    }
  };

  return (
    <div>
      <details
        className="dropdown mb-3 mr-4 -mt-4 flex justify-end"
        open={false}
      >
        <summary
          className="btn m-1 bg-[#7E90FE1A] hover:bg-[#7E90FE1A] border-transparent flex items-center justify-between"
          style={{
            borderImage: "linear-gradient(to right,#4B0082,#A020F0)",
            borderImageSlice: 1,
            borderWidth: "2px",
          }}
        >
          <span className="text-transparent bg-gradient-to-r from-indigo-600 to-purple-900 bg-clip-text text-xl font-bold">
            FILTER BY
          </span>
          <IoIosArrowDown className="ml-3 text-xl" />
        </summary>
        <ul
          className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow mt-2 border-2 border-slate-400"
          style={{
            position: "absolute",
            top: "100%",
            right: "2%",
          }}
        >
          <li>
            <button
              onClick={() => handleFilter("Remote")}
              className="text-xl font-semibold text-transparent bg-gradient-to-r from-indigo-600 to-purple-900 bg-clip-text"
            >
              REMOTE
            </button>
          </li>
          <li>
            <button
              onClick={() => handleFilter("Onsite")}
              className="text-xl font-semibold text-transparent bg-gradient-to-r from-indigo-600 to-purple-900 bg-clip-text"
            >
              ONSITE
            </button>
          </li>
          <li>
            <button
              onClick={() => handleFilter("All")}
              className="text-xl font-semibold text-transparent bg-gradient-to-r from-indigo-600 to-purple-900 bg-clip-text"
            >
              ALL
            </button>
          </li>
        </ul>
      </details>

      <div>
        {filterjob.map((eachappliedjob) => (
          <Showapplied
            key={eachappliedjob.id}
            eachappliedjob={eachappliedjob}
            removeapply={removeapply}
          ></Showapplied>
        ))}
      </div>
    </div>
  );
};

EachApplied.propTypes = {
  jobdata: PropTypes.array.isRequired,
};

export default EachApplied;
