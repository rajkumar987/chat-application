"use client";

const Input = ({ type, placeholder, value, handleChange, className, name }) => {
  return (
    <>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={className}
      />
    </>
  );
};

export default Input;
