import React, { useEffect, useState, createContext, useReducer } from "react";
import Add from "./projects/practice/functions/Add";
import appReducer from "./projects/practice/functions/AppReducer";

import Home from "./projects/practice/Home";

export const PostsContext = createContext();

const App2 = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const url = "http://localhost:3001/posts";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((e) => setLoading(true));
  }, []);

  const [state, dispatch] = useReducer(appReducer, {
    data: [
      {
        id: 1,
        title: "Sammy",
        author: "DigitalOcean",
      },
    ],
  });

  function addEmployee(data) {
    dispatch({
      type: "ADD",
      payload: data,
    });
  }

  function editEmployee(data) {
    dispatch({
      type: "EDIT",
      payload: data,
    });
  }

  function removeEmployee(id) {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }

  return (
    <div>
      {/* <PostsContext.Provider value={[data, loading]}>
        <Home />
      </PostsContext.Provider> */}

      <PostsContext.Provider
        value={{
          data: state.data,
          loading,
          addEmployee,
          editEmployee,
          removeEmployee,
        }}
      >
        <Add />
        <Home />
      </PostsContext.Provider>
    </div>
  );
};

export default App2;
