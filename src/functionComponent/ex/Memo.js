import React, { useRef } from "react";

const Memo = ({ handleAdd, count }) => {
  const ref = useRef(4);
  console.log(ref.current++);
  return (
    <div>
      <button onClick={handleAdd}>add + 1</button>
    </div>
  );
};

export default Memo;
