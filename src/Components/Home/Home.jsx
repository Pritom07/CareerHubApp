import { useEffect, useState } from "react";
import Featuredjobs from "../Featuredjobs/Featuredjobs";
import Jobcategory from "../Jobcategory/Jobcategory";
import "./Home.css";
import { CircleLoader } from "react-spinners";

const Home = () => {
  const [isloading, setisloading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setisloading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {isloading ? (
        <div className="flex justify-center items-center w-screen h-screen">
          <CircleLoader color="#4B0082" size={70} />
        </div>
      ) : (
        <div className="w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between px-2 bg-[#7E90FE1A]">
            <div className="-mt-1 md:pl-2">
              <h1 className="text-5xl text-nowrap text-justify md:text-[75px] font-extrabold">
                One Step <br /> Closer To Your <br />
                <span className="dreamcolor">Dream Job</span>
              </h1>
              <p className="md:text-xl text-justify font-medium text-[#757575] mt-4">
                Explore thousands of opportunities with all the information you
                need. Come find it. Manage all your Job applications from start
                to finish.
              </p>
              <button className="btnclass text-white rounded-xl p-3 text-xl font-extrabold mt-4">
                Get Started
              </button>
            </div>
            <div className="-mt-1">
              <img src="images/user.png" />
            </div>
          </div>
          <Jobcategory></Jobcategory>
          <Featuredjobs></Featuredjobs>
        </div>
      )}
    </div>
    // <div className="w-7xl mx-auto">
    //   <div className="flex flex-col md:flex-row items-center justify-between px-2 bg-[#7E90FE1A]">
    //     <div className="-mt-1 md:pl-2">
    //       <h1 className="text-5xl text-nowrap text-justify md:text-[75px] font-extrabold">
    //         One Step <br /> Closer To Your <br />
    //         <span className="dreamcolor">Dream Job</span>
    //       </h1>
    //       <p className="md:text-xl text-justify font-medium text-[#757575] mt-4">
    //         Explore thousands of opportunities with all the information you
    //         need. Come find it. Manage all your Job applications from start to
    //         finish.
    //       </p>
    //       <button className="btnclass text-white rounded-xl p-3 text-xl font-extrabold mt-4">
    //         Get Started
    //       </button>
    //     </div>
    //     <div className="-mt-1">
    //       <img src="images/user.png" />
    //     </div>
    //   </div>
    //   <Jobcategory></Jobcategory>
    //   <Featuredjobs></Featuredjobs>
    // </div>
  );
};

export default Home;
