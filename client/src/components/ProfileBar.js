import React from "react";
import DropDownMenu from "./DropDownMenu";
import Image from "next/image";

const ProfileBar = () => {
  return (
    <div className="flex justify-between pr-5 items-center">
      <div className="flex items-center gap-3">
        <img
          src={
            "https://images.freeimages.com/images/large-previews/d67/avatar-1573799.jpg"
          }
          className="w-12 h-12 object-cover rounded-full"
        />
        <div className="w-5 h-5 border border-dashed border-gray-900/100 rounded-full relative">
          <span className="absolute inline-flex rounded-full h-2 w-2 bg-green-500 right-0 -top-0.5"></span>
        </div>
      </div>
      <DropDownMenu />
    </div>
  );
};

export default ProfileBar;
