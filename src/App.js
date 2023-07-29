import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "./router/home/home-router.component";
import Navigation from "./router/navigation/navigation.component";
import Authentication from "./router/authentication/authentication.component";
import Shop from "./router/shop/shop.component";
import CheckOut from "./router/checkout/checkout.component";
import { setCurrentUser } from "./store/user/user.reducer";
import {
  OnAuthStateChangedListner,
  CreateUserDocumentFromAuth,
} from "./utils/firebase/firebase.util";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = OnAuthStateChangedListner((user) => {
      if (user) {
        CreateUserDocumentFromAuth(user);
      }
      console.log(setCurrentUser(user));
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
