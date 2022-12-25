import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import F2 from "./F2";
import Memo from "./Memo";

function F1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  // const handleClick = useCallback(() => setCount((c) => c + 1), [setCount]);

  // const memo = useMemo(() => {
  //   return <F2 handleClick={handleClick} count={count} />;
  // }, []);

  const memo = useMemo(() => {
    return <Memo handleAdd={() => setCount((c) => c + 1)} count={count} />;
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <F2 count={count} setCount={setCount} />
      {memo}
    </div>
  );
}

export default F1;
