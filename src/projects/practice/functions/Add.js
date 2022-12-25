import React, { useContext } from "react";
import { PostsContext } from "../../../App2";
const Add = () => {
  const { addEmployee } = useContext(PostsContext);
  const handleAdd = (e) => {
    e.preventDefault();
    addEmployee({
      title: "ds",
      author: "xxz",
      id: 5,
    });
  };
  return (
    <div className="App">
      <form onSubmit={handleAdd}>
        <input type="text" placeholder="title" />
        <input type="text" placeholder="author" />
        <button>add</button>
      </form>
    </div>
  );
};

export default Add;
