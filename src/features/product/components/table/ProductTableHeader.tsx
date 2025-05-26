import React from "react";
import {
  MagnifyingGlassIcon,
  ArrowPathIcon,
  AdjustmentsHorizontalIcon,
  PlusIcon,
  EllipsisVerticalIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

interface ProductTableHeaderProps {
  onAddProduct: () => void;
  onRefresh: () => void; // Örnek olarak ekledim
  onFilter: () => void; // Örnek olarak ekledim
}

const ProductTableHeader: React.FC<ProductTableHeaderProps> = ({
  onAddProduct,
  onRefresh,
  onFilter,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0 w-full">
      <h1 className="text-[20px] font-bold text-[#333333]">All Products</h1>
      <div className="flex justify-end gap-1 w-full md:w-auto">
        {/* Arama Çubuğu  */}
        <div className="relative flex-grow hidden lg:block">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search item..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-full"
          />
        </div>

        {/* Mercek İkonlu Arama Butonu */}
        <button className="p-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 transition-colors lg:hidden">
          <MagnifyingGlassIcon className="h-5 w-5" />
        </button>

        {/* İkon Grubu */}
        <div className="flex items-center space-x-2">
          <button
            className="hidden lg:block p-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={onRefresh}
          >
            <ArrowPathIcon className="h-5 w-5" />
          </button>
          <button className="hidden lg:block p-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 transition-colors">
            <CalendarIcon className="h-5 w-5" />
          </button>
          <button
            className="hidden lg:block p-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={onFilter}
          >
            <AdjustmentsHorizontalIcon className="h-5 w-5" />{" "}
          </button>
          <button className="p-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 transition-colors">
            <EllipsisVerticalIcon className="h-5 w-5" />{" "}
          </button>
        </div>

        {/* Add New Product Butonu */}
        <button
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={onAddProduct}
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add New Product
        </button>
      </div>
    </div>
  );
};

export default ProductTableHeader;
