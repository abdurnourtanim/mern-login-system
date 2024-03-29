import React from "react";

const Button = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="bg-[#17aec8] hover:bg-[#13a6c0da] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      {children}
    </button>
  );
};

export default Button;
