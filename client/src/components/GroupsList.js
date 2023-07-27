import { favourites } from "@/constants/chats";
import React from "react";

const GroupsList = () => {
  return (
    <div className="grid grid-cols-1 gap-2">
      {favourites.length > 0 ? (
        favourites.map((chat) => (
          <ListItem
            avatar_url={chat.avatar_url}
            name={chat.name}
            message={chat.last_message}
            time={chat.last_message_at}
          />
        ))
      ) : (
        <div className="text-sm text-gray-400 m-auto h-full">
          <p>Please add favourites to find chats here</p>
        </div>
      )}
    </div>
  );
};

export default GroupsList;
