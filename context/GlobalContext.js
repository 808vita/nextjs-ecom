import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [notification, setNotification] = useState({
    msg: "Welcome",
    type: "info",
  });
  //info , error , success
  return (
    <GlobalContext.Provider
      value={{
        notification,
        setNotification,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
