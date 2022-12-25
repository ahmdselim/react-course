import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../reducCrud/action/actionCreator";

const CrudTable = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const loading = useSelector((state) => state.loading);
  console.log(loading);
  useEffect(() => {
    getData(dispatch);
  }, [dispatch]);
  return (
    <div className="App">
      {loading === false ? (
        <table>
          <tr>
            <th>id</th>
            <th>author</th>
            <th>message Post</th>
            <th>title</th>
            <th>control</th>
          </tr>
          {posts &&
            posts.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.author}</td>
                <td>{data.message}</td>
                <td>{data.title}</td>
                <td>
                  <button className="button-7">edit</button>
                  <button className="button-3">delete</button>
                </td>
              </tr>
            ))}
        </table>
      ) : (
        <h1>loading ....</h1>
      )}
    </div>
  );
};

export default CrudTable;
