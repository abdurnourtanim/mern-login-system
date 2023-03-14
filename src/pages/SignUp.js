import React, { useState } from "react";
import SignupForm from "../components/SignupForm";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheeckPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username,
      email,
      password,
      checkPassword,
    };

    console.log(newUser);
  };

  const signupState = {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    checkPassword,
    setCheeckPassword,
    handleSubmit,
  };

  return (
    <div className="w-full max-w-xs m-auto pt-32">
      <SignupForm signupState={signupState} />
    </div>
  );
};

export default SignUp;
