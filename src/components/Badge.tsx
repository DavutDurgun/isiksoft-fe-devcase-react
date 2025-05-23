import React from "react";

const Badge: React.FC<{ count: number }> = ({ count }) => (
  <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
    {count}
  </span>
);

export default Badge;
