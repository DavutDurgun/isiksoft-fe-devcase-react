import React from "react";

const ExpandIcon: React.FC<{ isExpanded: boolean }> = ({ isExpanded }) => (
  <span
    className={`transform transition-transform duration-200 ${
      isExpanded ? "rotate-90" : "rotate-0"
    }`}
  >
    ▶
  </span>
);

export default ExpandIcon;
