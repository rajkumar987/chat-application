import React from "react";

const ListItem = ({ avatar_url, name, message, time }) => {
  return (
    <div className="grid grid-cols-5 py-2 hover:cursor-pointer hover:bg-green-100/50 ">
      <div>
        <img src={avatar_url} className="w-12 h-12 rounded-lg object-contain" />
      </div>
      <div className="col-span-3 flex flex-col gap-2">
        <p>{name}</p>
        <p className="text-xs truncate text-gray-500">{message}</p>
      </div>
      <p className="text-[10px] text-right">{time?.slice(0, 10)}</p>
    </div>
  );
};

export default ListItem;
