import React, { useState, useEffect, useId } from "react";

// const F1 = () => {
//   const [count, setCount] = useState(0);
//   const [online, setOnline] = useState(false);

//   const btn = document.getElementById("btn");

//   const arr = [1, 2, 3];

//   useEffect(() => {
//     document.title = count;

//     online ? console.log("online") : console.log("offline");
//     console.log(document.getElementById("btn"));

//     return () => {
//       document.title = count;
//     };
//   });

//   return (
//     <div>
//       {count}
//       <button id="btn" onClick={() => setOnline(!online)}>
//         make {online ? "online" : "offline"}
//       </button>
//       <button onClick={() => setCount((c) => c + 1)}>count</button>
//     </div>
//   );
// };

// export default F1;

function F1() {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>Do you like React?</label>
      <input id={id} type="checkbox" name="react" />
    </>
  );
}

export default F1;
