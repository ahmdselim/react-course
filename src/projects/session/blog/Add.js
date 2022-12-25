import React, { useState } from "react";

const Add = () => {
  const url = "http://localhost:5000/posts";
  const [id, setID] = useState(0);
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const data = { id, name, post };
  const handleAdd = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "*",
      },
    }).then((res) => res.json());
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
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="post"
          onChange={(e) => setPost(e.target.value)}
        />
        <button>add data</button>
      </form>
    </div>
  );
};

export default Add;
