import React, { useEffect, useState, useCallback, useRef } from "react";
import { useSearchParams } from "react-router";
import ProductService from "@/services/productService";
import type { Product } from "@/types";
import "./all-products-page.css";

import Header from "@/features/product/components/table/ProductTableHeader";
import ProductTable from "@/features/product/components/table/ProductTable";
import Pagination from "@/components/Pagination";

import ProductStatsCards from "@/features/product/components/ProductStatsCards";

const AllProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProductIds, setSelectedProductIds] = useState<Set<number>>(
    new Set()
  );

  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const responseData = await ProductService.getAllProducts(currentPage);
      setProducts(responseData.data);
      setTotalPages(responseData.totalPages);
      setTotalItems(responseData.totalItems);
    } catch (err: any) {
      console.error("Ürünler yüklenirken hata oluştu:", err);
      setError(err.response?.data?.message || "Ürünler yüklenemedi.");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchProducts();

    setSelectedProductIds(new Set());
  }, [fetchProducts]);

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const allIds = new Set(products.map((p) => p.id));
      setSelectedProductIds(allIds);
    } else {
      setSelectedProductIds(new Set());
    }
  };

  const handleSelectProduct = (
    productId: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newSelection = new Set(selectedProductIds);
    if (event.target.checked) {
      newSelection.add(productId);
    } else {
      newSelection.delete(productId);
    }
    setSelectedProductIds(newSelection);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      searchParams.set("page", page.toString());
      setSearchParams(searchParams);
    }
  };

  const masterCheckboxRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (masterCheckboxRef.current) {
      masterCheckboxRef.current.indeterminate =
        selectedProductIds.size > 0 &&
        selectedProductIds.size < products.length;
    }
  }, [selectedProductIds, products]);

  const handleAddNewProduct = () => {
    console.log("Yeni ürün ekle");
  };

  const handleRefreshProducts = () => {
    fetchProducts();
  };

  const handleFilterProducts = () => {
    console.log("Ürünleri filtrele");
  };

  return (
    <div className="min-h-screen flex bg-gray-100 ">
      <div className="flex-1 flex flex-col">
        {/* Navbar, MainLayout'ta olduğu için burada kaldırıldı */}
        {/* <Navbar onMenuToggle={toggleSidebar} /> */}

        <main className="flex-1 p-6 ">
          <ProductStatsCards />
          <div className="bg-white p-6 rounded-lg shadow-md mt-6  ">
            <Header
              onAddProduct={handleAddNewProduct}
              onRefresh={handleRefreshProducts}
              onFilter={handleFilterProducts}
            />

            {loading ? (
              <div className="flex justify-center items-center py-10">
                <p className="text-lg text-[#161919] ">Ürünler yükleniyor...</p>
              </div>
            ) : error ? (
              <div className="flex justify-center items-center py-10">
                <p className="text-lg text-red-600 ">Hata: {error}</p>
              </div>
            ) : products.length === 0 ? (
              <div className="p-6 text-center text-gray-600 ">
                Henüz hiç ürün bulunmamaktadır.
              </div>
            ) : (
              <ProductTable
                products={products}
                selectedProductIds={selectedProductIds}
                onSelectProduct={handleSelectProduct}
                onSelectAll={handleSelectAll}
                masterCheckboxRef={masterCheckboxRef}
              />
            )}
          </div>

          {totalPages > 0 && !loading && !error && products.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={totalItems}
              onPageChange={handlePageChange}
              loading={loading}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default AllProductsPage;
