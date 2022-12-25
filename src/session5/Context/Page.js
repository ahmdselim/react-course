import React from "react";
import App from "./App";

const initState = {
  users: [
    { id: 1, name: "ahmed" },
    { id: 2, name: "saeed" },
  ],
  categories: [{ name: "mobiles" }, { name: "laptops" }],
  data: [{ name: "hamada" }, { name: "dodo" }],
};

const data = {
  data: [
    { id: 1, name: "khalid" },
    { id: 2, name: "mohamed" },
  ],
};
export const DataContext = React.createContext();
export const UsersContext = React.createContext();

const Page = () => {
  return (
    <div>
      Page
      <DataContext.Provider value={initState}>
        <UsersContext.Provider value={data}>
          <App />
        </UsersContext.Provider>
      </DataContext.Provider>
    </div>
  );
};

export default Page;
