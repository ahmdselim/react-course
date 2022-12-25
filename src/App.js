import React from "react";
// import C1 from "./classComponent/ex/C1";
// import F1 from "./functionComponent/ex/F1";
// import F3 from "./functionComponent/ex/F1";
// import C1 from "./classComponent/lectuers/C1";
// import F1 from "./functionComponent/lectuers/F1";
// import Ref from "./classComponent/lectuers/Ref";
// import UseReducer from "./session5/Reducer/UseReducer";
// import Page from "./session5/Context/Page";
// import ID from "./session5/ID";
// import Fetch from "./session5/api/Fetch";
import RoutePage from "./session6/Router/Route";
import Users from "./session6/Router/Users";
import Categories from "./session6/Router/Categories";
import Dashboard from "./session6/Router/Dashboard";
import Home from "./projects/practice/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Reducer from "./session6/Reducer/Reducer";
const users = [{ name: "reef" }, { name: "rahf" }];
const categories = [
  { name: "hala", post: "welcome in egypt" },
  { name: "reef ", post: "welcome in saudi arebia" },
];
export const UsersContext = React.createContext();
export const CategoriesContext = React.createContext();
function App() {
  return (
    <>
      {/* <UsersContext.Provider value={users}>
        <CategoriesContext.Provider value={categories}>
          <Users />
        </CategoriesContext.Provider>
      </UsersContext.Provider> */}
      <Home />
    </>
  );
}

export default App;
