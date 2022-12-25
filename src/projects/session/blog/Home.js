import React, { useContext } from "react";
import { PostsContext } from "../../../App3";
import Add from "./Add";
import "./style.css";

const Home = () => {
  const { data, loading } = useContext(PostsContext);
  return (
    <>
      <Add />

      <div className="App">
        <table>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Post</th>
            <th>control</th>
          </tr>
          {loading === true
            ? "loading ..."
            : data.map((posts, i) => (
                <tr key={i}>
                  <td>{posts.id}</td>
                  <td>{posts.post}</td>
                  <td>{posts.name}</td>
                  <td>
                    <button className="button-7">edit</button>
                    <button className="button-3">delete</button>
                  </td>
                </tr>
              ))}
        </table>
      </div>
    </>
  );
};

export default Home;
