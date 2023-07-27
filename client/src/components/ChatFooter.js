import React from "react";
import { BsEmojiSmile, BsMic } from "react-icons/bs";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import SearchBar from "./SearchBar";
const ChatFooter = () => {
  return (
    <div className="h-20 bg-gray-100/50 ">
      <div className="h-full flex items-center px-6 gap-5">
        <BsEmojiSmile className="h-6 w-6" />
        <AiOutlinePlusSquare className="h-6 w-6" />
        <div className=" flex-1  flex gap-1 items-center ">
          <span className="flex-1">
            <SearchBar placeholder={"Say Something.."} />
          </span>
          <IoMdSend className="h-6 w-6 text-green-600" />
        </div>
        <BsMic className="h-6 w-6 " />
      </div>
    </div>
  );
};

export default ChatFooter;
