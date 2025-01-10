import PropTypes from "prop-types";

const Category = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div className="mt-9 px-2">
      <div className="card card-compact bg-base-100 shadow-xl hover:-translate-y-5 duration-100">
        <figure>
          <img src={logo} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-extrabold">
            {category_name}
          </h2>
          <p className="text-[16px] font-medium text-[#A3A3A3]">
            {availability}
          </p>
        </div>
      </div>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.object.isRequired,
};

export default Category;
