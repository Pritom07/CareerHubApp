import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getitem, removeFromstorage } from "../localstorage";
import Showapplied from "../Showapplied/Showapplied";

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

  const removeapply = (id) => {
    removeFromstorage(id);
    const arr = getitem();
    setidarray(arr);
  };

  return (
    <div>
      {findjob.map((eachappliedjob) => (
        <Showapplied
          key={eachappliedjob.id}
          eachappliedjob={eachappliedjob}
          removeapply={removeapply}
        ></Showapplied>
      ))}
    </div>
  );
};

EachApplied.propTypes = {
  jobdata: PropTypes.array.isRequired,
};

export default EachApplied;
