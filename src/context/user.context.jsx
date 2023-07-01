import { createContext, useState, useEffect } from "react";
import {
  OnAuthStateChangedListner,
  SignOutUser,
} from "../utils/firebase/firebase.util";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  useEffect(() => {
    OnAuthStateChangedListner((user) => {
      console.log(user);
    });
  }, []);
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  SignOutUser();
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
