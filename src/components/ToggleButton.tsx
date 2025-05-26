import React from "react";
import {
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
} from "@heroicons/react/24/outline";

const ToggleButton: React.FC<{ isOpen: boolean; onClick: () => void }> = ({
  isOpen,
  onClick,
}) => (
  <button
    onClick={onClick}
    className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-200 focus:outline-none z-50"
  >
    {isOpen ? (
      <ChevronDoubleLeftIcon className="h-6 w-6" />
    ) : (
      <ChevronDoubleRightIcon className="h-6 w-6" />
    )}
  </button>
);

export default ToggleButton;
