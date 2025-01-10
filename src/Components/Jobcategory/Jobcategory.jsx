import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";

const Jobcategory = () => {
  const data = useLoaderData();
  return (
    <div className="mt-11 w-7xl mx-auto px-1">
      <h1 className="text-center text-5xl font-extrabold">Job Category List</h1>
      <p className="text-[#757575] font-semibold text-[18px] text-center mt-3">
        Explore thousands of Job opportunities with all the information you
        need. Its your future.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-1">
        {data.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Jobcategory;
