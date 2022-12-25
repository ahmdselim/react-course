import React, { useEffect, useRef, useMemo } from "react";

const Ref = () => {
  const btn = useRef();

  const add = () => {
    console.log(btn.current.value || 0);
  };

  

  return (
    <div>
      <input type={"number"} ref={btn} />
      <button onClick={add}>count</button>
      {!btn ? console.log(btn.current.value || 0) : console.log(btn)}
    </div>
  );
};

export default Ref;
