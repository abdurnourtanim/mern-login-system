import React from "react";

const Button = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
