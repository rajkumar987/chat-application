import React, { useState } from "react";
import ProfileBar from "./ProfileBar";
import SearchBar from "./SearchBar";
import Tabs from "./Tabs";
import ChatList from "./ChatList";
import GroupsList from "./GroupsList";
import FriendsList from "./FriendsList";

const TabMenu = [
  {
    name: "Chats",
    component: <ChatList />,
  },
  {
    name: "Favourites",
    component: <GroupsList />,
  },
  {
    name: "Friends",
    component: <FriendsList />,
  },
];

const Sidebar = () => {
  const [active, setActive] = useState(TabMenu[0]);
  const handleTabChange = (tab) => {
    setActive(tab);
  };
  return (
    <div className="bg-green-50 p-6 flex flex-col gap-5 max-h-screen overflow-auto no-scrollbar">
      <ProfileBar />
      <SearchBar placeholder={`Search or start a new chat`} />
      <Tabs
        TabMenu={TabMenu}
        activeColor={
          "bg-primary text-white hover:bg-primary hover:cursor-not-allowed "
        }
        activeTab={active}
        handleTabChange={handleTabChange}
      />

      {active.component}
    </div>
  );
};

export default Sidebar;
