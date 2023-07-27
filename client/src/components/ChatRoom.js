import { dateFormatter } from "@/utiils/DateFormater";
import React from "react";
import { HiOutlineLockClosed } from "react-icons/hi2";

const messages = [
  {
    message: "Hello  ",
    time: "2023-07-22 14:22:08",
  },
  {
    message: "Hiii",
    time: "2023-07-22 14:23:08",
  },
];

const ChatRoom = () => {
  return (
    <div className="flex-1 max-h-[calc(100vh-120px)] overflow-auto no-scrollbar px-10 py-5 bg-slate-100/75 ">
      <div className="flex justify-center py-2.5 bg-yellow-100/75 max-w-max mx-auto px-5 text-xs w-1/2 rounded-lg mb-8">
        <HiOutlineLockClosed className="w-7 h-7 mr-2" />
        Messages are end-to-end encrypted. No one outside of this chat,not even
        this application can read or listen to them.
      </div>
      <div className=" flex flex-col gap-3">
        {messages?.map((mesage, idx) => (
          <div className=" max-w-[25vw] ml-auto" key={idx}>
            {/* <p className="bg-white  py-1.5 text-sm px-5 rounded-r-lg rounded-b-lg max-w-max leading-relaxed ">
              {mesage.message}
            </p> */}
            <p className="bg-green-100  py-2 text-sm pl-4 pr-2 rounded-l-lg rounded-b-lg max-w-max leading-relaxed flex  gap-3">
              <span>{mesage.message}</span>
              <span className="text-[10px] self-end pt-2.5">
                {dateFormatter(mesage.time)}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatRoom;
