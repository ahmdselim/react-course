import React, { useContext } from "react";
import { PostsContext } from "../../App2";
// import { deletePost } from "./functions/Functions";
import "./style.css";
const Home = () => {
  const { loading, data, removeEmployee } = useContext(PostsContext);
  // console.log(editEmployee);
  const deletePost = (id) => {
    removeEmployee(id);
    // console.log(removeEmployee(id), id);
  };
  return (
    <div>
      {loading === true ? (
        "loading ..."
      ) : (
        <div className="App">
          <table>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>control</th>
            </tr>
            {data &&
              data.map((posts, i) => (
                <tr key={i}>
                  <td>{posts.id}</td>
                  <td>{posts.author}</td>
                  <td>{posts.title}</td>
                  <td>
                    <button className="button-7">edit</button>
                    <button
                      className="button-3"
                      onClick={() => deletePost(posts.id, removeEmployee)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
