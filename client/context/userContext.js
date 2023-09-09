import { useContext, createContext } from "react";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}