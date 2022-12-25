import React from "react";
import { CategoriesContext } from "../../App";
const Categories = () => {
  return (
    <div>
      Categories
      <CategoriesContext.Consumer>
        {(categories) => console.log(categories)}
      </CategoriesContext.Consumer>
    </div>
  );
};

export default Categories;
