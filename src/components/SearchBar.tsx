import React from "react";

const SearchBar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <div className={`${!isOpen ? "hidden" : "block"} mb-6`}>
    <div className="relative">
      <input
        type="text"
        placeholder="Search here"
        className="w-full p-2 pl-8 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      />
      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
        🔍
      </span>
    </div>
  </div>
);

export default SearchBar;
