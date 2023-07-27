import React from "react";
import { chats } from "@/constants/chats";
import ListItem from "./ListItem";

const ChatList = () => {
  return (
    <div className="grid grid-cols-1 gap-2">
      {chats.map((chat, idx) => (
        <ListItem
          avatar_url={chat.avatar_url}
          name={chat.name}
          message={chat.last_message}
          time={chat.last_message_at}
          key={idx}
        />
      ))}
    </div>
  );
};

export default ChatList;
