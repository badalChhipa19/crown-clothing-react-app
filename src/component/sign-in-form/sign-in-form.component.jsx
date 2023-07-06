import { useState } from "react";

import {
  signInwithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.util.js";

import FormInput from "../form-input/form-input.component.jsx";
import Button, { BUTTON_TYPE_CLASS } from "../button/button.component.jsx";

import { SignUpContainer, H2, ButtonContainer } from "./sign-in-form-style";

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInUserWithEmailAndPassword(email, password);
      // const { user } = await signInUserWithEmailAndPassword(email, password);
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
    try {
      await signInwithGooglePopup();
    } catch (err) {
      console.log("getting error in signinForm page");
    }
  };

  return (
    <SignUpContainer>
      <H2>Already have an account?</H2>
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
        <ButtonContainer>
          <Button type="submit" buttonType={BUTTON_TYPE_CLASS.base}>
            Sign In
          </Button>
          <Button
            type="button"
            onClick={logGooleUser}
            buttonType={BUTTON_TYPE_CLASS.google}
          >
            Google sign in
          </Button>
        </ButtonContainer>
      </form>
    </SignUpContainer>
  );
};

export default SignInForm;
