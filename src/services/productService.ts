import axiosInstance from "@/api/axiosInstance";
import type { Product, ApiResponse } from "@/types/product";

export interface ProductsResponseData {
  message: string;
  status: string;
  currentPage: number;
  totalPages: number;
  totalItems: number;
  data: Product[];
}

const ProductService = {
  getAllProducts: async (page: number = 1): Promise<ProductsResponseData> => {
    try {
      const response = await axiosInstance.get<ProductsResponseData>(
        `/products?page=${page}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching all products:", error);
      throw error;
    }
  },

  getProductById: async (id: number): Promise<Product> => {
    try {
      const response = await axiosInstance.get<ApiResponse<Product>>(
        `/products/${id}`
      );
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching product with ID ${id}:`, error);
      throw error;
    }
  },
};

export default ProductService;
