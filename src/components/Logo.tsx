import React from "react";

const Logo: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <div
    className={`flex items-center mb-6 ${
      isOpen ? "justify-start" : "justify-center"
    }`}
  >
    {isOpen && (
      <span className="text-2xl font-bold text-gray-800">
        master <span className="font-normal">POS</span>
      </span>
    )}
  </div>
);

export default Logo;
