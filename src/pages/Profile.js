import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="">
      <Link className="text-red-700 font-bold text-lg " to="/login">
        Login
      </Link>
    </div>
  );
};

export default Profile;
