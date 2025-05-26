import React from "react";
import StatCard from "@/features/product/components/StatCard";

const ProductStatsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
      <StatCard
        title="Active Products"
        value="247,384"
        change="+18%"
        isPositive={true}
      />
      <StatCard
        title="New Products"
        value="+2,368"
        change="+2%"
        isPositive={true}
      />
      <StatCard
        title="Completed Order"
        value="33,847"
        change="-4.5%"
        isPositive={false}
      />
      <StatCard
        title="Pending Payment"
        value="1,284"
        change="+5%"
        isPositive={true}
      />
      <StatCard
        title="Canceled Order"
        value="836"
        change="-2%"
        isPositive={false}
      />
    </div>
  );
};

export default ProductStatsCards;
