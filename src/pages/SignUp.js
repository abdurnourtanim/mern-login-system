import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignupForm from "../components/SignupForm";
import { signupAction } from "../container/actions";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheeckPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username,
      email,
      password,
      checkPassword,
    };

    const validate = dispatch(signupAction(newUser));

    validate
      .then((data) => {
        alert("Sign up successfull.");
        navigate("/login");
      })
      .catch((error) => console.log(error));
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
