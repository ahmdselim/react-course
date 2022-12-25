import React, { useEffect } from "react";

const Fetch = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      console.log(res)
    );
  }, []);
  return <div>Fetch</div>;
};

export default Fetch;
