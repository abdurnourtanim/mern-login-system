import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignupForm from "../components/SignupForm";
import { signupAction } from "../container/actions";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheeckPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const route = () => {
    const token = localStorage.getItem("x-access-token");
    return token ? true : false;
  };

  useEffect(() => {
    if (route()) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username,
      email,
      password,
      checkPassword,
      error,
    };

    const validate = dispatch(signupAction(newUser));

    validate
      .then((data) => {
        navigate("/login");
      })
      .catch((error) => {
        setError(error.data.err);
        console.log(error.data.err);
      });
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
    error,
  };

  return (
    <div className="w-full max-w-xs m-auto pt-32">
      <SignupForm signupState={signupState} />
    </div>
  );
};

export default SignUp;
