import React from "react";
import ChatHeader from "./ChatHeader";
import ChatRoom from "./ChatRoom";
import ChatFooter from "./ChatFooter";

const ChatScreen = () => {
  return (
    <div className="bg-white col-span-3 min-h-screen flex flex-col justify-center">
      <ChatHeader />
      <ChatRoom />
      <ChatFooter />
    </div>
  );
};

export default ChatScreen;
