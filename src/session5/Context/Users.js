import React, { useContext } from "react";
import { DataContext } from "./Page";
import { UsersContext } from "./Page";

const Users = () => {
  const data = useContext(DataContext);
  const initState = useContext(UsersContext);

  console.log(data.users);
  return (
    <>
      <h1>Users</h1>
      {data.users.map((all) => (
        <div key={all.id}>{all.name}</div>
      ))}
      <h1>User Context :</h1>
      {initState.data.map((dataAll) => (
        <div key={dataAll.id}>{dataAll.name}</div>
      ))}
    </>
  );
};

export default Users;
