import React, { useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { loginAction } from "../container/actions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const store = useStore();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userInfo = {
      email,
      password,
    };

    const login = dispatch(loginAction(userInfo));
    login
      .then((data) => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.err);
        console.log(error.err);
      });

    console.log(store.getState());
  };

  const loginState = {
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
    error,
  };

  return (
    <div className="w-full max-w-xs m-auto pt-32">
      <LoginForm loginState={loginState} />
    </div>
  );
};

export default Login;
