import React, { useReducer, useState } from "react";
import { PLUS } from "./type";
import { MINCE } from "./type";
import { PLUS_BY_FIVE } from "./type";
import { PLUS_BY_VALUE } from "./type";

import { initState } from "./Action";
import { reducer } from "./Action";

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const [value, setValue] = useState(0);
  return (
    <div>
      {state.count}
      <br />
      <button onClick={() => dispatch({ type: PLUS })}>+</button>
      <br />
      <button onClick={() => dispatch({ type: MINCE })}>-</button>
      <br />
      <button onClick={() => dispatch({ type: PLUS_BY_FIVE, payload: 5 })}>
        + by 5
      </button>
      <br />
      <input type="number" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => dispatch({ type: PLUS_BY_VALUE, payload: value })}>
        add by value from input
      </button>
    </div>
  );
};

export default UseReducer;
