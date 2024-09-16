import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";

const MainContent = () => {
  return (
    <div className="w-full flex flex-col h-full gap-3">
      <Navbar />
      <Content />
    </div>
  );
};

export default MainContent;
