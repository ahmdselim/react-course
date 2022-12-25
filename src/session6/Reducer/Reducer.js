import React, { useReducer, useState } from "react";

const Reducer = () => {
  const PLUS_BY_ONE = "PLUS_BY_ONE";
  const MINES_BY_ONE = "MINES_BY_ONE";
  const PLUS_BY_INPUT = "PLUS_BY_INPUT";

  const initState = { count: 0 };

  const reducer = (state, action, payload) => {
    switch (action.type) {
      case PLUS_BY_ONE:
        return { count: state.count + 1 };
      case MINES_BY_ONE:
        return { count: state.count - 1 };
      case PLUS_BY_INPUT:
        return { count: state.count + parseInt(action.payload) };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);
  const [word, setWord] = useState(0);
  return (
    <div className="App">
      {state.count}
      <br />
      <button onClick={() => dispatch({ type: PLUS_BY_ONE })}>+ by 1</button>
      <br />
      <button onClick={() => dispatch({ type: MINES_BY_ONE })}>- by 1</button>
      <br />
      <input type="number" onChange={(e) => setWord(e.target.value)} />
      <br />
      <button onClick={() => dispatch({ type: PLUS_BY_INPUT, payload: word })}>
        + by input
      </button>
    </div>
  );
};

export default Reducer;
