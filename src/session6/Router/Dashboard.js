import React from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "../../App";
const Dashboard = () => {
  return (
    <div>
      <Link to="/users">users</Link>
      <br />
      <Link to="/categories">categories</Link>
      <br />
      <Link to="/dashboard">dashboard</Link>
      <br />
      <Link to="/Reducer">Reducer</Link>
      <UsersContext.Consumer>
        {(users) => console.log(users)}
      </UsersContext.Consumer>
    </div>
  );
};

export default Dashboard;
