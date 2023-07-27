import React from "react";
import Input from "./Input";

const SearchBar = ({ placeholder }) => {
  return (
    <div>
      <Input
        className={
          "w-full py-2.5 rounded-full border border-green-200 bg-white text-sm pl-5 focus:outline-green-300"
        }
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
