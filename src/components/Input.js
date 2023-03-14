import React from "react";

const Input = ({ name, value, setValue, type }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="name"
      >
        {name}
      </label>
      <input
        required
        className="shadow appearansce-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type || "text"}
        placeholder={name}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default Input;
