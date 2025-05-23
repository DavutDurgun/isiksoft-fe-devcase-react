import React from "react";
import { Outlet } from "react-router";
import Sidebar from "@/features/product/components/sidebar/Sidebar";
import { useSidebarState } from "@/features/product/hooks/useSidebarState";

const MainLayout: React.FC = () => {
  const { isOpen } = useSidebarState();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main
        className={`
        flex-1 p-8 transition-all duration-300
        md:${isOpen ? "ml-64" : "ml-20"} 
        ml-0
        min-h-screen w-full
        overflow-y-auto  
      `}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
