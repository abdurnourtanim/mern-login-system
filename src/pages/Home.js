import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { logoutAction } from "../container/actions";

const Home = () => {
  const user = useSelector((state) => state.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const route = () => {
    const token = localStorage.getItem("x-access-token");
    return token ? true : false;
  };

  useEffect(() => {
    if (!route) {
      navigate("/login");
    }
  }, [navigate]);

  const logout = () => {
    dispatch(logoutAction());
  };

  console.log(user);

  return (
    <div>
      <h1> Home</h1>
      <Button>
        <Link to="/login" onClick={logout}>
          Logout
        </Link>
      </Button>
    </div>
  );
};

export default Home;
