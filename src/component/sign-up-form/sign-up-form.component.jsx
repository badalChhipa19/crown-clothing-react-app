import { useState } from "react";

import FormInput from "../form-input/form-input.component.jsx";
import Button from "../button/button.component.jsx";

import {
  createAuthUserWithEmailAndPassword,
  CreateUserDocumentFromAuth,
} from "./../../utils/firebase/firebase.util.js";

import { SignUpConatiner, H2 } from "./sign-up-form-style";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return alert("Password and confirm password are not same");
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      // setCurrentUser(user);
      await CreateUserDocumentFromAuth(user, { displayName });
    } catch (err) {
      console.log(err);
      if (err.code === "auth/email-already-in-use") {
        alert("THis e-mail is already registered try to signIn");
      }
    }
  };

  return (
    <SignUpConatiner>
      <H2>Don't have an account?</H2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          type="text"
          required
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />

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

        <FormInput
          label={"Confirm Password"}
          type="password"
          required
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpConatiner>
  );
};

export default SignUpForm;
