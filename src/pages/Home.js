import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  const user = useSelector((state) => state.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  console.log(user);

  return (
    <div>
      <h1> Home</h1>
      <Button>Logout</Button>
    </div>
  );
};

export default Home;
