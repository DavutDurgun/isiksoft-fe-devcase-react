import React from "react";
import type { Product } from "@/types";

import {
  CheckCircleIcon,
  MinusCircleIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

interface ProductTableRowProps {
  product: Product;
  isSelected: boolean;
  onSelect: (
    productId: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const ProductTableRow: React.FC<ProductTableRowProps> = ({
  product,
  isSelected,
  onSelect,
}) => {
  return (
    <tr
      key={product.id}
      className={`hover:bg-gray-50 transition-colors text-base text-[#161919]`}
    >
      <td
        className={`px-6 py-4 whitespace-nowrap ${
          isSelected ? "selected-row" : ""
        }`}
      >
        <div className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500 mr-3 flex-shrink-0"
            checked={isSelected}
            onChange={(e) => onSelect(product.id, e)}
          />
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-12 h-12 rounded-md object-cover mr-3 flex-shrink-0"
          />
          <div className="flex flex-col">
            <span className="font-semibold">{product.name}</span>
            <span className="text-[#B2B3B9] text-sm">{product.category}</span>
          </div>
        </div>
      </td>
      <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap ">
        {product.productCode}
      </td>
      <td className="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-[#B2B3B9] font-normal">
        {new Date().toLocaleDateString("tr-TR", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </td>
      <td className="hidden lg:table-cell px-6 py-4 whitespace-nowrap font-bold">
        ${Math.trunc(product.price)}
      </td>
      <td className="hidden lg:table-cell px-6 py-4 whitespace-nowrap">
        <span
          className={`inline-flex items-center justify-center w-38 h-10 px-2 py-1 rounded-lg text-xs font-semibold ${
            product.status === true
              ? "bg-[#89D2331A] text-[#89D233]"
              : product.status === false
              ? "bg-[#F272771A] text-[#F27277]"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {product.status === true ? (
            <CheckCircleIcon className="h-5 w-5 mr-1.5" />
          ) : (
            <MinusCircleIcon className="h-5 w-5 mr-1.5" />
          )}
          {product.status === true ? "Completed" : "Pending"}
        </span>
      </td>
      <td className="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-gray-100 text-gray-500 hover:bg-gray-200 transition-colors">
          <EllipsisHorizontalIcon className="h-5 w-5" />
        </button>
      </td>
    </tr>
  );
};

export default ProductTableRow;
