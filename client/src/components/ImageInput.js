"use client";
import React, { useState } from "react";
import Image from "next/image";
import { LuImagePlus } from "react-icons/lu";
const ImageInput = ({ className }) => {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handlefile = (evt) => {
    setImage(evt.target.files[0]);
    const url = URL.createObjectURL(evt.target.files[0]);
    setPreviewUrl(url);
  };
  return (
    <div className={`${className} flex justify-center items-center`}>
      <label
        htmlFor="input-file"
        className="border border-dashed border-gray-300 rounded-full w-48 h-48 flex justify-center items-center cursor-pointer"
      >
        <div className={`${previewUrl.length > 0 && "hidden"}`}>
          <span className="text-sm text-gray-500 flex justify-center flex-col items-center gap-3">
            <LuImagePlus size={24} />
            Choose Profile Image
          </span>
        </div>
        <Image
          src={previewUrl}
          alt="Profile Image"
          width={100}
          height={100}
          className={`${
            !previewUrl.length > 0 && "hidden"
          } w-full h-full object-cover rounded-full `}
        />
      </label>
      <input
        type="file"
        className="hidden"
        id="input-file"
        onChange={handlefile}
      />
    </div>
  );
};

export default ImageInput;
