// import React, { useState, useEffect } from "react";

// const Navbar = () => {
//   const [isDarkMode, setIsDarkMode] = useState(
//     () => localStorage.getItem("theme") === "dark"
//   );

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", isDarkMode);
//     localStorage.setItem("theme", isDarkMode ? "dark" : "light");
//   }, [isDarkMode]);

//   const handleThemeToggle = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   return (
//     <header className="text-white flex justify-between items-center p-2 rounded-xl dark:bg-gray-800 dark:text-gray-100">
//       <h1 className="text-xl font-bold">Navbar</h1>
//       <div className="flex items-center space-x-2">
//         {/* Stylish Button */}
//         <a
//           href="#_"
//           className="flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-500 bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300 ease-in-out"
//         >
//           Button Text
//         </a>

//         {/* Theme Toggle Icon */}
//         <button
//           onClick={handleThemeToggle}
//           className="p-2 px-3 rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center"
//           aria-label="Toggle theme"
//         >
//           <span className="material-icons text-lg">
//             {isDarkMode ? "light_mode" : "dark_mode"}
//           </span>
//         </button>

//         {/* Notifications Icon */}
//         <button
//           className="p-2 px-3 rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 relative flex items-center justify-center transition-colors duration-300"
//           aria-label="Notifications"
//         >
//           <span className="material-icons text-lg">notifications</span>
//           <span className="absolute top-0 right-0 block w-2.5 h-2.5 bg-red-500 text-white text-xs font-semibold flex items-center justify-center rounded-full border-2 border-gray-900 dark:border-gray-800"></span>
//         </button>

//         {/* Profile Icon */}
//         <button
//           className="p-2 px-3 rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 flex items-center justify-center transition-colors duration-300"
//           aria-label="Profile"
//         >
//           <span className="material-icons text-lg">account_circle</span>
//         </button>
//       </div>
//     </header>
//   );
// };
// export default Navbar;

// export default Navbar;
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <header className="text-white flex justify-between items-center p-2 rounded-xl dark:bg-gray-800 dark:text-gray-100 relative">
        <h1 className="text-xl font-bold ml-2">Navbar</h1>
        <div className="flex items-center space-x-2">
          {/* Stylish Button */}
          <a
            href="#_"
            className="hidden lg:flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white bg-black border-2 border-transparent rounded-full shadow-sm hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300 ease-in-out"
          >
            Button Text
          </a>

          {/* Theme Toggle Icon */}
          <button
            onClick={handleThemeToggle}
            className="p-2 px-3 rounded-full bg-black hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center"
            aria-label="Toggle theme"
          >
            <span className="material-icons text-lg">
              {isDarkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Notifications Icon */}
          <button
            className="p-2 px-3 rounded-full bg-black hover:bg-gray-700 dark:hover:bg-gray-600 relative flex items-center justify-center transition-colors duration-300"
            aria-label="Notifications"
          >
            <span className="material-icons text-lg">notifications</span>
            <span className="absolute top-0 right-0 block w-2.5 h-2.5 bg-red-500 text-white text-xs font-semibold flex items-center justify-center rounded-full border-2 border-gray-900 dark:border-gray-800"></span>
          </button>

          {/* Profile Icon */}
          <button
            className="p-2 px-3 rounded-full bg-black hover:bg-gray-700 dark:hover:bg-gray-600 flex items-center justify-center transition-colors duration-300"
            aria-label="Profile"
          >
            <span className="material-icons text-lg">account_circle</span>
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 px-3 rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center"
          aria-label="Toggle sidebar"
        >
          <span className="material-icons text-lg">menu</span>
        </button>
      </header>

      {/* Sidebar Component */}
      {isSidebarOpen && (
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
