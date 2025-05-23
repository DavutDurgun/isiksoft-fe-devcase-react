import React from "react";
import { Outlet } from "react-router";
import Sidebar from "@/features/product/components/sidebar/Sidebar";
import { useSidebarState } from "@/features/product/hooks/useSidebarState";

const MainLayout: React.FC = () => {
  const { isOpen } = useSidebarState();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      {/* Ana İçerik Alanı */}
      <main
        className={`
        flex-1 p-8 transition-all duration-300
        // Masaüstü için margin-left'i ayarla
        md:${isOpen ? "ml-64" : "ml-20"} 
        
        // Mobil için margin-left'i sıfırla (fixed sidebar olduğu için)
        ml-0
        
        // Kalan yüksekliği ve genişliği kapla
        min-h-screen w-full
        overflow-y-auto // Main alanı da scroll edilebilir olsun
      `}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
