import React from "react";
import type { MenuItem } from "@/types";
import Badge from "@/components/Badge";
import ExpandIcon from "@/components/ExpandIcon";

export interface MenuItemProps {
  item: MenuItem;
  isOpen: boolean;
  isActive: boolean;
  isSubMenu?: boolean;
  activeMenu: string;
  onMenuClick: (path: string, hasSubItems: boolean) => void;
}

const MenuItemComponent: React.FC<MenuItemProps> = React.memo(
  ({ item, isOpen, isActive, isSubMenu = false, activeMenu, onMenuClick }) => {
    const baseClasses = `flex items-center p-2 rounded-md transition-colors duration-200 cursor-pointer ${
      isOpen ? "" : "w-full"
    }`;

    const activeClasses = isActive
      ? isSubMenu
        ? "text-indigo-600 bg-indigo-50"
        : "bg-indigo-600 text-white"
      : "hover:bg-gray-200 text-gray-700";

    let justificationClass = "";
    if (isOpen) {
      if (item.subItems || item.badge) {
        justificationClass = "justify-between";
      } else {
        justificationClass = "justify-start";
      }
    } else {
      justificationClass = "justify-center";
    }

    if (item.subItems) {
      return (
        <div
          className={`${baseClasses} ${activeClasses} ${justificationClass}`}
          onClick={() => onMenuClick(item.path, true)}
        >
          <div className="flex items-center px-2">
            {" "}
            <span className={isOpen ? "mr-2" : ""}>{item.icon}</span>
            <span className={isOpen ? "" : "hidden"}>{item.name}</span>
          </div>
          {item.badge && isOpen && <Badge count={item.badge} />}{" "}
          {isOpen && <ExpandIcon isExpanded={activeMenu === item.path} />}{" "}
        </div>
      );
    }

    return (
      <div
        className={`${baseClasses} ${justificationClass}`}
        onClick={() => onMenuClick(item.path, false)}
      >
        <div className="flex items-center">
          <span className={isOpen ? "mr-2" : ""}>{item.icon}</span>
          <span className={isOpen ? "" : "hidden"}>{item.name}</span>
        </div>
        {item.badge && isOpen && <Badge count={item.badge} />}
      </div>
    );
  }
);

export default MenuItemComponent;
