import React from "react";
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  isPositive,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-md font-medium text-[#878787] mb-2">{title}</h3>
      <p className="text-2xl font-bold text-[#161919] mb-2">{value}</p>
      <div className="flex items-center text-sm">
        {isPositive ? (
          <ArrowTrendingUpIcon className="h-4 w-4 text-green-500 mr-1" />
        ) : (
          <ArrowTrendingDownIcon className="h-4 w-4 text-red-500 mr-1" />
        )}
        <span className={isPositive ? "text-green-500" : "text-red-500"}>
          {change}
        </span>
      </div>
    </div>
  );
};

export default StatCard;
