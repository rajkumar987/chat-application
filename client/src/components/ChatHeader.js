import { chats } from "@/constants/chats";
import React from "react";
import { MdFavorite } from "react-icons/md";
import { HiMagnifyingGlass, HiOutlineVideoCamera } from "react-icons/hi2";
import { FiPhoneCall } from "react-icons/fi";
import DropDownMenu from "./DropDownMenu";

const ChatHeader = () => {
  const activeChat = chats[0];
  return (
    <div className="h-20 bg-green-50/75 px-6 ">
      <div className="flex justify-between items-center h-full">
        <div className="flex gap-5">
          <img
            src={activeChat.avatar_url}
            className="object-cover w-12 h-12 rounded-xl"
          />
          <div className="flex flex-col justify-between">
            <p className="flex items-start gap-2">
              <span className="text-base text-gray-900 font-medium">
                {activeChat.name}
              </span>
              <span>
                <MdFavorite color="red" className="w-5 h-5" />
              </span>
            </p>
            <p className="flex gap-2.5 items-center">
              <span className="inline-flex rounded-full h-[10px] w-[10px] bg-green-500 "></span>
              <span className="text-sm text-gray-500">Online</span>
            </p>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <FiPhoneCall className="w-5 h-5 text-gray-500 " />
          <HiOutlineVideoCamera className="w-6 h-6 text-gray-500 " />
          <HiMagnifyingGlass className="w-6 h-6 text-gray-500 " />
          <DropDownMenu />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
