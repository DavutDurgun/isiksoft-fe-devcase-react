import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const ExpandIcon: React.FC<{ isExpanded: boolean }> = ({ isExpanded }) => (
  <span
    className={`transform transition-transform duration-200 ${
      isExpanded ? "rotate-90" : "rotate-0"
    }`}
  >
    <ChevronRightIcon className="w-4 h-4 text-gray-400" />
  </span>
);

export default ExpandIcon;
