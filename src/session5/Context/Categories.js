import React from "react";
import Data from "./Data";
import { DataContext } from "./Page";

const Categories = () => {
  return (
    <>
      <h1>Categories :</h1>
      <DataContext.Consumer>
        {(data) =>
          data.categories.map((cat, i) => <div key={i}>{cat.name}</div>)
        }
      </DataContext.Consumer>
      <Data />
    </>
  );
};

export default Categories;
