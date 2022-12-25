export const addUser = (user, setData, dataAll) => {
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "*",
    },
    body: JSON.stringify({
      name: user,
    }),
  })
    .then((res) => res.json())
    .then((data) => setData([...dataAll, data]));
};
export const editUser = (id, ix, dataAll, setData) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "*",
    },
    body: JSON.stringify({
      name: "edit new name",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const users = [...dataAll];
      users[ix] = data;
      setData(users);
    });
};
export const deleteUser = (id, ix) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "*",
    },
  }).then((res) => res.json());
};
