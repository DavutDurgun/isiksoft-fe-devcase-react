import React, { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "@/features/product/components/sidebar/Sidebar";
import { useSidebarState } from "@/features/product/hooks/useSidebarState";
import Navbar from "@/features/product/components/Navbar";

const MainLayout: React.FC = () => {
  const { isOpen } = useSidebarState();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <div className="lg:p-8">
          <Navbar onMenuToggle={toggleSidebar} />
        </div>

        <main
          className={`
        flex-1  lg:px-8 transition-all duration-300
        md:${isOpen ? "ml-64" : "ml-20"} 
        ml-0
        min-h-screen w-full
        overflow-y-auto  
      `}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
