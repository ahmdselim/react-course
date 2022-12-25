import React, { useEffect, useState } from "react";
import Home from "./projects/session/blog/Home";
import { useSelector, useDispatch } from "react-redux";
export const PostsContext = React.createContext();
export const UsersContext = React.createContext();

const App3 = () => {
  const [data, setData] = useState();
  // const [count, setCount] = useState();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([{ name: "reef" }]);

  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const url = "http://localhost:5000/posts";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((e) => setLoading(true));
  }, []);

  return (
    <div className="">
      {/* <PostsContext.Provider value={{ data, loading, users }}>
        <Home />
      </PostsContext.Provider> */}

      <button>-</button>
      {count}
      {/* <input type={"number"} onChange={(e) => setCount(e.target.value)} /> */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
    </div>
  );
};

export default App3;
