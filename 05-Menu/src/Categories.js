import React, { useState } from "react";

const Categories = ({ items, filterItems }) => {
  let allCategory = items.map((item) => item.category);
  let categories = ["All", ...new Set(allCategory)];

  const [value, setValue] = useState(0)

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
              setValue(index)
            }}
            className={`filter-btn ${index === value && "active-btn"}`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
