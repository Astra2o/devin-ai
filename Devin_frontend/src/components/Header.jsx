import React from "react";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center">
      <button className=" text-white text-xl" onClick={toggleSidebar}>☰</button>
      <h1 className="ml-4 text-lg">Dashboard</h1>
    </header>
  );
};

export default Header;
