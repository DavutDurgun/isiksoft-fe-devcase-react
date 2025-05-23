import React from "react";

const ToggleButton: React.FC<{ isOpen: boolean; onClick: () => void }> = ({
  isOpen,
  onClick,
}) => (
  <button
    onClick={onClick}
    className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-200 focus:outline-none z-50"
  >
    {isOpen ? (
      <svg
        className="h-6 w-6 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ) : (
      <svg
        className="h-6 w-6 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    )}
  </button>
);

export default ToggleButton;
