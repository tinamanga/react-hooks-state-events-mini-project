// CategoryFilter.js
import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="categories">
      {categories.map((cat) => (
        <button
          key={cat}
          className={cat === selectedCategory ? "selected" : ""}
          onClick={() => onCategoryChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
