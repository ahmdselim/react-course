import React, { useEffect, useRef } from "react";

const F2 = ({ handleClick, count }) => {
  const ref1 = useRef(0);
  //   useEffect(() => {});
  console.log(ref1.current++);
  // console.log(handleClick);

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default F2;
