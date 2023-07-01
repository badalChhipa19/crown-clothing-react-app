import SignUp from "../sign-up-form/sign-up-form.component";
import SignIn from "../sign-in-form/sign-in-form.component";

import "./authontication.style.css";

const Authentication = () => {
  return (
    <div className="authontication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
