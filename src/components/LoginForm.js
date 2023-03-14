import React from "react";
import Button from "./Button";
import ForgetPassword from "./ForgetPassword";
import Input from "./Input";
import SwitchPage from "./SwitchPage";

const LoginForm = ({ loginState }) => {
  const { email, setEmail, password, setPassword, handleSubmit } = loginState;
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <Input value={email} setValue={setEmail} name="Email" />
      <Input
        type="password"
        value={password}
        setValue={setPassword}
        name="Password"
      />

      <div className="flex items-center justify-between">
        <Button onClick={handleSubmit}>Login</Button>

        <ForgetPassword />
      </div>
      <SwitchPage to="/signup" text="You have no accout please">
        Sign up
      </SwitchPage>
    </form>
  );
};

export default LoginForm;
