import React from "react";
import { Link } from "react-router-dom";
const Route = () => {
  return (
    <div>
      <Link to="/users">users</Link>
      <br />
      <Link to="/categories">categories</Link>
      <br />
      <Link to="/dashboard">dashboard</Link>
      <br />
      <Link to="/Reducer">Reducer</Link>
    </div>
  );
};

export default Route;
