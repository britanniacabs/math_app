import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-indigo-500 p-6">
      <div className="flex items-center">
        <span className="text-white text-2xl font-bold">Yusra Math App</span>
      </div>
      <div className="flex items-center">
        <a href="#" className="text-white px-4 hover:bg-indigo-400">
          Home
        </a>
        <a href="#" className="text-white px-4 hover:bg-indigo-400">
          About
        </a>
        <a href="#" className="text-white px-4 hover:bg-indigo-400">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
