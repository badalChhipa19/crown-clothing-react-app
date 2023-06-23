import {
  signInwithGooglePopup,
  createUserDocumentFromAuth,
} from "./../../utils/firebase/firebase.util";

const signIn = () => {
  const logGooleUser = async () => {
    const { user } = await signInwithGooglePopup();
    console.log(user);
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign-In</h1>
      <button onClick={logGooleUser}>Sign in with google</button>
    </div>
  );
};

export default signIn;
