import React, { useState } from "react";
import { addData } from "../reducCrud/action/actionCreator";
import swal from "sweetalert";
import { useDispatch } from "react-redux";

const Add = () => {
  const [id, setID] = useState(0);
  const [author, setAuthor] = useState("");
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    if (id <= 0) {
      swal("Oops", "Id must be integer!", "error");
    } else if (author === "") {
      swal("Oops", "author is required!", "error");
    } else if (post === "") {
      swal("Oops", "post is required!", "error");
    } else if (title === "") {
      swal("Oops", "title is required!", "error");
    } else {
      addData(dispatch, title, author, post, id);
      swal("Oops", "data uploaded congrats!", "error");
    }
  };
  return (
    <div className="App">
      <form onSubmit={handleAdd}>
        <input
          type="number"
          placeholder="id"
          onChange={(e) => setID(e.target.value)}
        />
        <input
          type="text"
          placeholder="author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="message post"
          onChange={(e) => setPost(e.target.value)}
        />
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>add data</button>
      </form>
    </div>
  );
};

export default Add;
