import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import PropTypes from "prop-types";
import { getitem } from "../localstorage";

const EachApplied = ({ jobdata }) => {
  const [idarray, setidarray] = useState([]);
  const [findjob, setfindjob] = useState([]);
  useEffect(() => {
    const arr = getitem();
    setidarray(arr);
  }, []);

  useEffect(() => {
    if (jobdata.length > 0) {
      const searchres = [];
      for (const idx of idarray) {
        const findingjob = jobdata.find((job) => job.id === idx);
        if (findingjob) {
          searchres.push(findingjob);
        }
      }
      setfindjob(searchres);
    }
  }, [idarray, jobdata]);
  console.log(findjob);

  return (
    <div>
      {
        // findjob.map(eachappliedjob=>)
      }
    </div>
  );
};

EachApplied.propTypes = {
  jobdata: PropTypes.array.isRequired,
};

export default EachApplied;
