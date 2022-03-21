import React from "react";
import CategoryItem from "./CategoryItem";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          imageUrl={category.imageUrl}
          title={category.title}
        />
      ))}
    </div>
  );
};

export default Directory;
