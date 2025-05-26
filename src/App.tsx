import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/HomePage";
import AllProductsPage from "@/pages/AllProductsPage";

// Dummy Sayfalar (Bunları ayrı dosyalarda tutmak daha iyi bir practice'tir)
const AddNewProductPage: React.FC = () => (
  <div className="p-4">Yeni Ürün Ekle İçeriği Burada</div>
);

const ScanBarcodePage: React.FC = () => (
  <div className="p-4">Barkod Tarama İçeriği Burada</div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<AllProductsPage />} />
          <Route path="products/add" element={<AddNewProductPage />} />
          <Route path="scan-barcode" element={<ScanBarcodePage />} />
          <Route path="*" element={<div>Sayfa Bulunamadı (404)</div>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
