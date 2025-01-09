import PropTypes from "prop-types";

const Category = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div className="mt-10 px-2">
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={logo} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category_name}</h2>
          <p>{availability}</p>
        </div>
      </div>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.object.isRequired,
};

export default Category;
