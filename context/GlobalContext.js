import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [notification, setNotification] = useState({
    msg: "Welcome",
    type: "info",
  });

  const [cartCounts, setCartCounts] = useState(null);

  //info , error , success
  return (
    <GlobalContext.Provider
      value={{
        notification,
        setNotification,
        cartCounts,
        setCartCounts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
