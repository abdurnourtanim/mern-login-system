import React from "react";
import Button from "./Button";
import ForgetPassword from "./ForgetPassword";
import Input from "./Input";
import SwitchPage from "./SwitchPage";

const SignupForm = ({ signupState }) => {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    checkPassword,
    setCheeckPassword,
    handleSubmit,
  } = signupState;
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <Input name="Name" value={username} setValue={setUsername} />
      <Input name="Email" value={email} setValue={setEmail} />
      <Input
        type="password"
        name="Password"
        value={password}
        setValue={setPassword}
      />
      <Input
        type="password"
        name="Confirm password"
        value={checkPassword}
        setValue={setCheeckPassword}
      />

      <div className="flex items-center justify-between">
        <Button onClick={handleSubmit}>Sign up</Button>
        <ForgetPassword />
      </div>
      <SwitchPage to="/login" text="You have already a accout">
        Login
      </SwitchPage>
    </form>
  );
};

export default SignupForm;
