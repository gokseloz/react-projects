import React from "react";

const Categories = ({ items, filterItems }) => {
  let allCategory = items.map((item) => item.category);
  let categories = ["All", ...new Set(allCategory)];

  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            id={index}
            type="button"
            onClick={() => {
              filterItems(category);
            }}
            className="filter-btn"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
