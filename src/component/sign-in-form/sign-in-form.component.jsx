import { useState, useContext } from "react";

import {
  CreateUserDocumentFromAuth,
  signInwithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.util.js";

import FormInput from "../form-input/form-input.component.jsx";
import Button from "../button/button.component.jsx";
import { UserContext } from "../../context/user.context";

import "./sign-in-form-style.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const { setCurrentUser } = useContext(UserContext);
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      setCurrentUser(user);
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        return alert("User dosen't exist! Create an account..");
      }
      if (err.code === "auth/wrong-password") {
        return alert("Password dosen't match! Try Again..");
      }
    }
  };

  const logGooleUser = async () => {
    const { user } = await signInwithGooglePopup();
    setCurrentUser(user);
    await CreateUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label={"Password"}
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit" Children={"Sign In"} />
          <Button
            type="button"
            onClick={logGooleUser}
            buttonType="google"
            Children={"Google sign in"}
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
