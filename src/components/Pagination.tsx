import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  loading: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalItems,
  onPageChange,
  loading,
}) => {
  const getPageNumbers = () => {
    const pageNumbers: number[] = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    // Eğer son sayfaya yakınsak, başlangıcı ayarla ki hep 5 sayfa görelim
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-6 p-4 bg-white rounded-lg shadow-md">
      <div className="text-gray-600 text-sm mb-4 sm:mb-0">
        Showing {Math.min(totalItems, (currentPage - 1) * 20 + 1)}-
        {Math.min(totalItems, currentPage * 20)} from {totalItems} data
      </div>
      <div className="flex justify-center items-center space-x-2">
        {/* Sol Ok Butonu */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1 || loading}
          className={`
            p-2 rounded-md
            bg-[#5D3FD3] text-white shadow-md hover:bg-[#4a32a6]
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-colors text-sm
          `}
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>

        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            disabled={loading}
            className={`
              px-3 py-1.5 rounded-md transition-colors text-sm
              ${
                page === currentPage
                  ? "bg-[#5D3FD3] text-white shadow-md" // Aktif sayfa
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50" // Pasif sayfa
              }
            `}
          >
            {page}
          </button>
        ))}

        {/* Sağ Ok Butonu */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages || loading}
          className={`
            p-2 rounded-md
            bg-[#5D3FD3] text-white shadow-md hover:bg-[#4a32a6]
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-colors text-sm
          `}
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
