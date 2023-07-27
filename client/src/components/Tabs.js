"use client";

const Tabs = ({ TabMenu, activeColor, activeTab, handleTabChange }) => {
  return (
    <ul className="grid grid-cols-3 text-center bg-white rouned-full text-sm text-gray-500 rounded-lg divide-x divide-gray-200 ">
      {TabMenu.map((tab, idx) => {
        return (
          <li
            key={idx}
            className={`${
              activeTab.name == tab.name && activeColor
            } h-full w-full py-3 hover:bg-gray-50 hover:cursor-pointer
            ${
              idx == 0
                ? "rounded-l-lg"
                : idx == TabMenu.length - 1 && "rounded-r-lg"
            }
            `}
            onClick={() => {
              activeTab.name !== tab.name && handleTabChange(tab);
            }}
          >
            {tab.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Tabs;
