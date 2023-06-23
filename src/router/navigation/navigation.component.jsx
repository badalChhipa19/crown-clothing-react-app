import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrownLogo } from "./../assets/crown.svg";
import "./navigation.styles.scss";

const navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <div>
            <CrownLogo />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/sign-in">
            Sign-In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default navigation;
