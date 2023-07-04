import SignUp from "../../component/sign-up-form/sign-up-form.component";
import SignIn from "../../component/sign-in-form/sign-in-form.component";

import { AuthontationContainer } from "./authontication.style";

const Authentication = () => {
  return (
    <AuthontationContainer>
      <SignIn />
      <SignUp />
    </AuthontationContainer>
  );
};

export default Authentication;
