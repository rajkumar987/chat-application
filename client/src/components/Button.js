"use client";
import React from "react";

const Button = ({ type, handleClick, text, classname, disabled }) => {
  return (
    <>
      <button
        type={type}
        onClick={handleClick}
        className={classname}
        disabled={disabled}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
