import React from "react";
import type { Product } from "@/types";
import ProductTableRow from "@/features/product/components/table/ProductTableRow";

interface ProductTableProps {
  products: Product[];
  selectedProductIds: Set<number>;
  onSelectProduct: (
    productId: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onSelectAll: (event: React.ChangeEvent<HTMLInputElement>) => void;
  masterCheckboxRef: React.RefObject<HTMLInputElement | null>;
}

const ProductTable: React.FC<ProductTableProps> = ({
  products,
  selectedProductIds,
  onSelectProduct,
  onSelectAll,
  masterCheckboxRef,
}) => {
  return (
    <div className="block rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="text-[#B2B3B9]">
            <th
              scope="col"
              className="px-6 py-3 text-left text-base font-bold tracking-wider w-[25%]"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                  onChange={onSelectAll}
                  checked={
                    selectedProductIds.size === products.length &&
                    products.length > 0
                  }
                  ref={masterCheckboxRef}
                />
                <span className="ml-2">Product</span>
              </div>
            </th>
            <th
              scope="col"
              className="hidden md:table-cell px-6 py-3 text-left text-base font-bold tracking-wider w-[18%]"
            >
              Transaction ID
            </th>
            <th
              scope="col"
              className="hidden lg:table-cell px-6 py-3 text-left text-base font-bold tracking-wider w-[18%]"
            >
              Date
            </th>
            <th
              scope="col"
              className="hidden lg:table-cell px-6 py-3 text-left text-base font-bold tracking-wider w-[15%]"
            >
              Amount
            </th>
            <th
              scope="col"
              className="hidden lg:table-cell px-6 py-3 text-left text-base font-bold tracking-wider w-[18%]"
            >
              Status
            </th>
            <th
              scope="col"
              className="hidden lg:table-cell px-6 py-3 text-right text-base font-bold tracking-wider w-[6%]"
            >
              {/* Üç nokta ikonu için boş başlık */}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map((product) => (
            <ProductTableRow
              key={product.id}
              product={product}
              isSelected={selectedProductIds.has(product.id)}
              onSelect={onSelectProduct}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
