import React from "react";
import { friendsList } from "@/constants/chats";
import ListItem from "./ListItem";

const FriendsList = () => {
  return (
    <div className="grid grid-cols-1 gap-2">
      {friendsList.map((chat) => (
        <ListItem
          avatar_url={chat.avatar_url}
          name={chat.name}
          message={chat.about}
        />
      ))}
    </div>
  );
};

export default FriendsList;
