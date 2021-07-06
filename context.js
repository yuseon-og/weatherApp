import React from "react";
import { a, b } from "./App";

const UserContext = React.createContext();

const UserContextProvider = ({ children }) => (
  <UserContext.Provider value={{ a, b }}>{children}</UserContext.Provider>
);

export default UserContextProvider;
export { UserContext };
