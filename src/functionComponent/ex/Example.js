import React, { useState, useEffect, Fragment } from "react";

export function Example() {
  const [count, setCount] = useState([
    { name: "ahmed" },
    { name: "mo" },
    { name: "saeed" },
  ]);

  // Similar to componentDidMount and componentDidUpdate:
  const deleteUser = (ix) => {
    let data = count.filter((data, i) => i !== ix);
    setCount(data);
  };

  const updateUser = (id) => {
    const updatedAreas = [...count];
    updatedAreas[id]["name"] = "asdas";
    setCount(updatedAreas);
  };

  return (
    <div>
      {count &&
        count.map((data, i) => (
          <Fragment key={i}>
            <p>{data.name}</p>
            <button onClick={() => deleteUser(i)}>deleteUser</button>
            <button onClick={() => updateUser(i)}>updateUser</button>
          </Fragment>
        ))}
    </div>
  );
}
