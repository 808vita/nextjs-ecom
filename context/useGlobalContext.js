import { useContext } from "react";

import { GlobalContext } from "./GlobalContext";

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  return context;
};
