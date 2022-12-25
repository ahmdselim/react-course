const url = "http://localhost:3001/posts";

// useEffect(() => {
//   fetch(url)
//     .then((res) => res.json())
//     .then((result) => {
//       setData(result);
//       setLoading(false);
//     })
//     .catch((e) => setLoading(true));
// }, []);

// export const getPost = () => {
//   fetch(url)
//     .then((res) => res.json())
//     .then((result) => {
//       setData(result);
//       setLoading(false);
//     })
//     .catch((e) => setLoading(true));
// };

export const deletePost = (id, removeEmployee) => {
  removeEmployee(id);
  // console.log(removeEmployee(id), id);
};
