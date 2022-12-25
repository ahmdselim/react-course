import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addUser, editUser, deleteUser } from "./Functions";
import SingleUser from "./SingleUser";
import { UsersContext } from "../../App";
import { CategoriesContext } from "../../App";
const Users = () => {
  const [dataAll, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(true);
      });
  }, []);

  return (
    <div>
      <h1>add element</h1>
      <input type="text" onChange={(e) => setUser(e.target.value)} />
      <button onClick={() => addUser(user, setData, dataAll)}>add Users</button>
      <ul>
        Users :
        {loading
          ? dataAll.map((data, i) => (
              <li key={i}>
                {data.name} <br />
                <button onClick={() => editUser(data.id, i, dataAll, setData)}>
                  edit
                </button>
                <button onClick={() => deleteUser(data.id, i)}>Delete</button>
              </li>
            ))
          : "loading ..."}
      </ul>
      {/* <SingleUser /> */}

      <UsersContext.Consumer>
        <CategoriesContext.Consumer>
          {(users) => users.map((data) => <p>{data.name}</p>)}
        </CategoriesContext.Consumer>
      </UsersContext.Consumer>
    </div>
  );
};

export default Users;
