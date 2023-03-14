import React from "react";
import { Link } from "react-router-dom";

const SwitchPage = ({ children, text, to }) => {
  return (
    <div className="mt-2">
      <span>
        {text}
        <Link
          className="font-bold text-sm text-blue-500 hover:text-blue-800"
          to={to}
        >
          {children}
        </Link>
      </span>
    </div>
  );
};

export default SwitchPage;
