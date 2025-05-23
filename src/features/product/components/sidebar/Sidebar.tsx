import React from "react";
import { useLocation } from "react-router";
import ToggleButton from "@/components/ToggleButton";
import SearchBar from "@/components/SearchBar";
import Logo from "@/components/Logo";
import MenuSection from "@/features/product/components/sidebar/MenuSection";
import { MENU_SECTIONS } from "@/features/product/mock";
import { useSidebarState } from "@/features/product/hooks/useSidebarState";

const Sidebar: React.FC = () => {
  const { activeMenu, isOpen, setIsOpen, handleMenuClick } = useSidebarState();
  const location = useLocation();

  const sidebarClasses = `
    flex flex-col bg-white shadow-lg p-4
    transition-all duration-300 ease-in-out
    ${isOpen ? "w-64" : "w-20"}
    
    
    fixed inset-y-0 left-0 z-50
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    h-full overflow-y-auto 
    
    
    md:relative md:flex md:translate-x-0
    md:${isOpen ? "w-64" : "w-20"}
    md:h-screen md:overflow-y-auto 
  `
    .replace(/\s+/g, " ")
    .trim();

  return (
    <>
      {!isOpen && (
        <button
          className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md text-gray-700"
          onClick={() => setIsOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}

      <div className={sidebarClasses}>
        <div className="flex-shrink-0">
          <ToggleButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          <Logo isOpen={isOpen} />
          <SearchBar isOpen={isOpen} />
        </div>

        <div className="flex-grow mt-6">
          {MENU_SECTIONS.map((section, index) => (
            <MenuSection
              key={index}
              section={section}
              isOpen={isOpen}
              activeMenu={activeMenu}
              onMenuClick={handleMenuClick}
              currentPath={location.pathname}
            />
          ))}
        </div>
      </div>

      {isOpen && window.innerWidth < 768 && (
        <div
          className="fixed inset-0 bg-black opacity-10 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
