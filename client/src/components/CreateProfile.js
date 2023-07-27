"use client";

import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import ImageInput from "./ImageInput";

const CreateProfile = () => {
  const [username, setUsername] = useState();
  const [disable, setDisable] = useState(true);
  const handleChange = () => {};
  const handleClick = () => {};
  return (
    <div className="flex flex-col gap-7 w-full py-16 divide-y divide-green-100">
      <h1 className="text-2xl tracking-tight text-gray-600 text-center mx-auto">
        Create Profile
      </h1>
      <div className="pt-10 grid grid-cols-2 gap-3">
        <Input
          name={"firstname"}
          type={"text"}
          placeholder={"Firstname"}
          handleChange={handleChange}
          value={username}
          className={" border border-gray-200 rounded-md outline-none px-5"}
        />
        <Input
          name={"lastname"}
          type={"text"}
          placeholder={"Lastname"}
          handleChange={handleChange}
          value={username}
          className={"border border-gray-200 rounded-md outline-none px-5 "}
        />
        <Input
          name={"username"}
          type={"text"}
          placeholder={"Username"}
          handleChange={handleChange}
          value={username}
          className={" border border-gray-200 rounded-md outline-none px-5"}
        />

        <Input
          name={"status"}
          type={"text"}
          placeholder={"About"}
          handleChange={handleChange}
          value={username}
          className={
            "py-3 border border-gray-200 rounded-md outline-none px-5 col-span-2"
          }
        />
        <ImageInput
          className={
            "border-2 border-dotted border-gray-900/10 p-2.5 rounded-md row-span-3 row-start-1 col-start-2 "
          }
        />

        <Button
          type={"button"}
          handleClick={handleClick}
          text={"next"}
          classname={
            "uppercase bg-[#008069]  py-2.5  rounded text-gray-50 text-sm px-2.5 tracking-wider font-medium disabled:bg-green-300 disabled:cursor-not-allowed col-span-2"
          }
          disabled={disable}
        />
      </div>
    </div>
  );
};

export default CreateProfile;
