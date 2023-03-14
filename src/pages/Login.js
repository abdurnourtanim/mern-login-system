import React, { useState } from "react";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      email,
      password,
    };

    console.log(newUser);
  };

  const loginState = {
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
  };

  return (
    <div className="w-full max-w-xs m-auto pt-32">
      <LoginForm loginState={loginState} />
    </div>
  );
};

export default Login;
