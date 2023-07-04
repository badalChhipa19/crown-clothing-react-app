import { Routes, Route } from "react-router-dom";
import Home from "./router/home/home-router.component";
import Navigation from "./router/navigation/navigation.component";
import Authentication from "./router/authentication/authentication.component";
import Shop from "./router/shop/shop.component";
import CheckOut from "./router/checkout/checkout.component";

const app = () => {
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

export default app;
