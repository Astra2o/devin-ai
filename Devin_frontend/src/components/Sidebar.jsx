import React from "react";

const Sidebar = ({ isOpen, toggleSidebar, openModal }) => {
  return (
    <div className={`fixed left-0 top-0 h-full bg-gray-900 text-white p-5 transform ${isOpen ? "w-64 translate-x-0" : "w-16 md:w-0  md:p-0  -translate-x-48 md:translate-x-0"} transition-all duration-300 `}>
      <button className="hidden md:hidden text-white text-xl absolute right-2 top-2" onClick={toggleSidebar}>{isOpen ? "←" : "→"}</button>
      {isOpen && (
        <>
          <div className="text-xl flex gap-2 items-center justify-between font-bold mb-4"><div>astra</div>    <button className=" bg-blue-500 w-fit h-fit p-2 mt-0  rounded" onClick={openModal}>
            +
          </button>  </div>
          <ul className="space-y-2">
            <li className="p-2 bg-gray-700 rounded">Project 1</li>
            <li className="p-2 bg-gray-700 rounded">Project 2</li>
            <li className="p-2 bg-gray-700 rounded">Project 3</li>
          </ul>
          <button className="mt-4 bg-blue-500 w-fit p-2 rounded" onClick={openModal}>
            create
          </button>        </>
      )}
    </div>
  );
};

export default Sidebar;
