import React from "react";
import { NavLink } from "react-router";
import type { MenuItem } from "@/types";
import MenuItemComponent from "./MenuItemComponent";

interface MenuListProps {
  items: MenuItem[];
  isOpen: boolean;
  activeMenu: string;
  onMenuClick: (path: string, hasSubItems: boolean) => void;
  isSubMenu?: boolean;
  currentPath: string;
}

const MenuList: React.FC<MenuListProps> = React.memo(
  ({
    items,
    isOpen,
    activeMenu,
    onMenuClick,
    isSubMenu = false,
    currentPath,
  }) => (
    <ul className={isSubMenu ? (isOpen ? "ml-4" : "ml-0") : ""}>
      {items.map((item) => (
        <li key={item.name} className="mb-1">
          {item.subItems ? (
            <MenuItemComponent
              item={item}
              isOpen={isOpen}
              isActive={
                currentPath.startsWith(item.path) ||
                (item.subItems
                  ? item.subItems.some((sub) =>
                      currentPath.startsWith(sub.path)
                    )
                  : false)
              }
              isSubMenu={isSubMenu}
              activeMenu={activeMenu}
              onMenuClick={onMenuClick}
            />
          ) : (
            <NavLink
              to={item.path}
              end={true}
              className={({ isActive: navLinkIsActive }) => {
                const baseClasses = `flex items-center p-2 rounded-md transition-colors duration-200 cursor-pointer
                ${isOpen ? "justify-start" : "justify-center"} ${
                  isOpen ? "" : "w-full"
                }`;

                const activeHoverClasses = navLinkIsActive
                  ? isSubMenu
                    ? "text-indigo-600 bg-indigo-50"
                    : "bg-indigo-600 text-white"
                  : "hover:bg-gray-200 text-gray-700";

                return `${baseClasses} ${activeHoverClasses}`;
              }}
              onClick={() => onMenuClick(item.path, false)}
            >
              <MenuItemComponent
                item={item}
                isOpen={isOpen}
                isActive={false}
                isSubMenu={isSubMenu}
                activeMenu={activeMenu}
                onMenuClick={onMenuClick}
              />
            </NavLink>
          )}

          {item.subItems && activeMenu === item.path && isOpen && (
            <div className="mt-1">
              <MenuList
                items={item.subItems}
                isOpen={isOpen}
                activeMenu={activeMenu}
                onMenuClick={onMenuClick}
                isSubMenu={true}
                currentPath={currentPath}
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  )
);

export default MenuList;
