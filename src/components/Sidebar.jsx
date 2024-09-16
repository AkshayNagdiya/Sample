import React, { useState } from "react";

const Sidebar = () => {
  // State to track the active menu item
  const [activeItem, setActiveItem] = useState("dashboard");

  // Handle menu item click
  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <aside className="w-64 bg-white text-gray-800 p-4 rounded-xl lg:h-full lg:overflow-y-auto dark:bg-gray-800 dark:text-gray-100 shadow-lg">
      <h2 className="text-lg font-bold mb-4 text-center">Sidebar</h2>
      <ul className="space-y-2">
        <li>
          <a
            href="#"
            onClick={() => handleClick("dashboard")}
            className={`flex items-center py-2 px-4 rounded-md transition-colors duration-300 ease-in-out ${
              activeItem === "dashboard"
                ? "bg-black text-white"
                : "hover:bg-black dark:hover:bg-gray-700 hover:text-white"
            }`}
          >
            <span className="material-icons text-lg mr-2">dashboard</span>
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleClick("reports")}
            className={`flex items-center py-2 px-4 rounded-md transition-colors duration-300 ease-in-out ${
              activeItem === "reports"
                ? "bg-black text-white"
                : "hover:bg-black dark:hover:bg-gray-700 hover:text-white"
            }`}
          >
            <span className="material-icons text-lg mr-2">report</span>
            Reports
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleClick("settings")}
            className={`flex items-center py-2 px-4 rounded-md transition-colors duration-300 ease-in-out ${
              activeItem === "settings"
                ? "bg-black text-white"
                : "hover:bg-black dark:hover:bg-gray-700 hover:text-white"
            }`}
          >
            <span className="material-icons text-lg mr-2">settings</span>
            Settings
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleClick("users")}
            className={`flex items-center py-2 px-4 rounded-md transition-colors duration-300 ease-in-out ${
              activeItem === "users"
                ? "bg-black text-white"
                : "hover:bg-black dark:hover:bg-gray-700 hover:text-white"
            }`}
          >
            <span className="material-icons text-lg mr-2">group</span>
            Users
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleClick("calendar")}
            className={`flex items-center py-2 px-4 rounded-md transition-colors duration-300 ease-in-out ${
              activeItem === "calendar"
                ? "bg-black text-white"
                : "hover:bg-black dark:hover:bg-gray-700 hover:text-white"
            }`}
          >
            <span className="material-icons text-lg mr-2">calendar_today</span>
            Calendar
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleClick("messages")}
            className={`flex items-center py-2 px-4 rounded-md transition-colors duration-300 ease-in-out ${
              activeItem === "messages"
                ? "bg-black text-white"
                : "hover:bg-black dark:hover:bg-gray-700 hover:text-white"
            }`}
          >
            <span className="material-icons text-lg mr-2">message</span>
            Messages
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleClick("notifications")}
            className={`flex items-center py-2 px-4 rounded-md transition-colors duration-300 ease-in-out ${
              activeItem === "notifications"
                ? "bg-black text-white"
                : "hover:bg-black dark:hover:bg-gray-700 hover:text-white"
            }`}
          >
            <span className="material-icons text-lg mr-2">
              notification_important
            </span>
            Notifications
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleClick("billing")}
            className={`flex items-center py-2 px-4 rounded-md transition-colors duration-300 ease-in-out ${
              activeItem === "billing"
                ? "bg-black text-white"
                : "hover:bg-black dark:hover:bg-gray-700 hover:text-white"
            }`}
          >
            <span className="material-icons text-lg mr-2">paid</span>
            Billing
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleClick("help")}
            className={`flex items-center py-2 px-4 rounded-md transition-colors duration-300 ease-in-out ${
              activeItem === "help"
                ? "bg-black text-white"
                : "hover:bg-black dark:hover:bg-gray-700 hover:text-white"
            }`}
          >
            <span className="material-icons text-lg mr-2">help_outline</span>
            Help
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleClick("analytics")}
            className={`flex items-center py-2 px-4 rounded-md transition-colors duration-300 ease-in-out ${
              activeItem === "analytics"
                ? "bg-black text-white"
                : "hover:bg-black dark:hover:bg-gray-700 hover:text-white"
            }`}
          >
            <span className="material-icons text-lg mr-2">analytics</span>
            Analytics
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleClick("backup")}
            className={`flex items-center py-2 px-4 rounded-md transition-colors duration-300 ease-in-out ${
              activeItem === "backup"
                ? "bg-black text-white"
                : "hover:bg-black dark:hover:bg-gray-700 hover:text-white"
            }`}
          >
            <span className="material-icons text-lg mr-2">backup</span>
            Backup
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleClick("logout")}
            className={`flex items-center py-2 px-4 rounded-md transition-colors duration-300 ease-in-out ${
              activeItem === "logout"
                ? "bg-black text-white"
                : "hover:bg-black dark:hover:bg-gray-700 hover:text-white"
            }`}
          >
            <span className="material-icons text-lg mr-2">exit_to_app</span>
            Logout
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
