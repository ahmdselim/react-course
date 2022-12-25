import React, { Fragment, useState } from "react";

const MapF = () => {
  const [data, setData] = useState([
    { id: 1, name: "ahmed" }, // false 1 = 1  0  1 !== 1 false
    { id: 2, name: "reef" }, // true  1
    { id: 3, name: "saeed" }, // true  1
  ]);

  const [edit, setEdit] = useState(false);
  const [id, setID] = useState(0);
  const [updateData, setUpdateData] = useState("");

  const deleteItem = (idItem) => {
    const filterData = data.filter((data, i) => data.id !== idItem);
    setData(filterData);
  };

  const updateItem = (id) => {
    setEdit(!edit);
    setID(id);
  };

  const editItem = (id) => {
    setEdit(!edit);
    const dataArea = [...data];
    const newArr = (dataArea[id]["name"] = updateData);
    console.log(newArr);
  };

  const map = data.map((data, ix) => (
    <Fragment key={ix}>
      <li>
        {data.name}
        <button onClick={() => deleteItem(data.id)}>delete</button>
        <button onClick={() => updateItem(ix)}>edit</button>
      </li>
    </Fragment>
  ));

  return edit === true ? (
    <form>
      <input
        defaultValue={data
          .filter((items, i) => i === id)
          .map((items) => items.name)}
        onChange={(e) => setUpdateData(e.target.value)}
      />
      <button onClick={() => editItem(id)}>update</button>
    </form>
  ) : (
    <ul>{map}</ul>
  );
};

export default MapF;
