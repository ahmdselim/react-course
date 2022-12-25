import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addAction,
  getData,
  minceAction,
  addDataAction,
} from "../redux/actions/actionCreator";
const Count = () => {
  const [data, setData] = useState();
  const count = useSelector((state) => state.count);
  const addData = useSelector((state) => state.data);
  console.log(addData);
  const dispatch = useDispatch();

  useEffect(() => {
    getData(dispatch);
  }, [dispatch]);

  return (
    <div>
      <button onClick={() => minceAction(dispatch)}>-</button>
      {count}
      <button onClick={() => addAction(dispatch)}>+</button>
      <br />
      <input type="number" onChange={(e) => setData(e.target.value)} />
      <button onClick={() => addDataAction(dispatch, data)}>add</button>
    </div>
  );
};

export default Count;
