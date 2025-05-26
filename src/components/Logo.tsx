import React from "react";
import { SwatchIcon } from "@heroicons/react/24/outline";

const Logo: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <div
    className={`flex items-center mb-6 ${
      isOpen ? "justify-start" : "justify-center"
    }`}
  >
    {isOpen && (
      <>
        <SwatchIcon className="h-8 w-8 text-indigo-600" />{" "}
        <span className="text-xl font-bold text-gray-800">master POS</span>
      </>
    )}
  </div>
);

export default Logo;
