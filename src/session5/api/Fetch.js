import React, { useEffect, useState } from "react";
import axios from "axios";

const Fetch = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  //   const search =
  //     users &&
  //     users.filter((data) => data.name.includes("Le")).map((data) => data);
  //   console.log(search);

  const handleAdd = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "*",
      },
      body: JSON.stringify({
        name: "React POST Request Example",
        username: "saeed",
        website: "www.ds.com",
        phone: "01221",
        email: "sd@df.vf",
      }),
    })
      .then((response) => response.json())
      .then((data) => setUsers([...users, data]));
  };
  console.log(users);
  return (
    <div>
      {/* {loading ===true 
        // <ul>
        //   <li>id : {users.id}</li>
        //   <li>name : {users.name}</li>
        //   <li>username : {users.username}</li>
        //   <li>website : {users.website}</li>
        //   <li>phone : {users.phone}</li>
        //   <li>email : {users.email}</li>
        //   <button onClick={handleAdd}>add</button>
        // </ul>
      
        ? users &&
         
          : "loading..."
      )} */}
      {loading
        ? users &&
          users.map((data, i) => (
            <div key={i}>
              <ul>
                <li>id : {data.id}</li>
                <li>name : {data.name}</li>
                <li>username : {data.username}</li>
                <li>website : {data.website}</li>
                <li>phone : {data.phone}</li>
                <li>email : {data.email}</li>
                <button onClick={handleAdd}>add</button>
              </ul>
            </div>
          ))
        : "loading ..."}
    </div>
  );
};

export default Fetch;
