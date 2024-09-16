import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="flex flex-col lg:flex-row h-[97vh] gap-4 md:p-4 ">
      {/* <button
        onClick={handleToggle}
        className="absolute bottom-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md z-30"
      >
        {isDarkMode ? "🌞" : "🌙"}
      </button> */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <MainContent />
    </div>
  );
};

export default App;
