import { Routes, Route } from "react-router-dom";
import Home from "./router/home/home-router.component";
import Navigation from "./router/navigation/navigation.component";
import Authentication from "./component/authentication/authentication.component";

const app = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<h1>This is a Shop page</h1>} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default app;
