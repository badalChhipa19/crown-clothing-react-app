import { createContext, useEffect, useReducer } from "react";
import {
  OnAuthStateChangedListner,
  CreateUserDocumentFromAuth,
} from "../utils/firebase/firebase.util";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const USER_ACTION_TYPE = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReduser = (state, action) => {
  const { type, paylod } = action;

  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: paylod,
      };
    default:
      throw new Error(`Unhandled type ${type} in useReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);

  const [{ currentUser }, dispatch] = useReducer(userReduser, INITIAL_STATE);

  const setCurrentUser = (user) => {
    dispatch({ type: "SET_CURRENT_USER", paylod: user });
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = OnAuthStateChangedListner((user) => {
      if (user) CreateUserDocumentFromAuth(user);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
