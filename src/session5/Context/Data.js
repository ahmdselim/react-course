import React from "react";
import { DataContext } from "../Context/Page";
const Data = () => {
  return (
    <>
      <h1>data :</h1>
      <DataContext.Consumer>
        {(data) =>
          data.data.map((allData, i) => <div key={i}>{allData.name}</div>)
        }
      </DataContext.Consumer>
    </>
  );
};

export default Data;
