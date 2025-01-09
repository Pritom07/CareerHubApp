import "./Home.css";

const Home = () => {
  return (
    <div className="w-7xl mx-auto ml-4 md:mt-2 mt-3">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="text-5xl text-nowrap text-justify md:text-7xl font-extrabold">
            One Step <br /> Closer To Your <br />
            <span className="dreamcolor">Dream Job</span>
          </h1>
          <p className="md:text-xl text-justify font-medium text-[#757575] mt-4">
            Explore thousands of opportunities with all the information you
            need. Come find it. Manage all your Job applications from start to
            finish.
          </p>
          <button className="btnclass text-white rounded-xl p-3 text-xl font-extrabold mt-4">
            Get Started
          </button>
        </div>
        <div>
          <img src="images/user.png" />
        </div>
      </div>
    </div>
  );
};

export default Home;
