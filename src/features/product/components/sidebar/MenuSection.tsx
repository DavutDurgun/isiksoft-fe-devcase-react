import React from "react";
import type { MenuSectionType } from "@/types";
import MenuList from "./MenuList";

interface MenuSectionProps {
  section: MenuSectionType;
  isOpen: boolean;
  activeMenu: string;
  onMenuClick: (path: string, hasSubItems: boolean) => void;
  currentPath: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({
  section,
  isOpen,
  activeMenu,
  onMenuClick,
  currentPath,
}) => (
  <div className="mb-6">
    {isOpen && section.title && (
      <h2 className="text-xs font-semibold text-gray-500 uppercase mb-2">
        {section.title}
      </h2>
    )}
    <MenuList
      items={section.items}
      isOpen={isOpen}
      activeMenu={activeMenu}
      onMenuClick={onMenuClick}
      currentPath={currentPath}
    />
  </div>
);

export default MenuSection;
