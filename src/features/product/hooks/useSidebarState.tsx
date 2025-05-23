import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { MENU_SECTIONS } from "@/features/product/mock";
import type { MenuItem } from "@/types";

export const useSidebarState = () => {
  const [activeMenu, setActiveMenu] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const location = useLocation();
  const isInitialMount = useRef(true);

  const getAllParentMenuItems = (): MenuItem[] => {
    return MENU_SECTIONS.flatMap((section) => section.items);
  };

  const handleMenuClick = (itemPath: string, hasSubItems: boolean): void => {
    if (hasSubItems) {
      setActiveMenu(itemPath === activeMenu ? "" : itemPath);
    } else {
      const parentItem = getAllParentMenuItems().find((menuItem) =>
        menuItem.subItems?.some((sub) => sub.path === itemPath)
      );
      if (parentItem) {
        setActiveMenu(parentItem.path);
      } else {
        setActiveMenu("");
      }

      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      const currentPathname = location.pathname;
      const allParentItems = getAllParentMenuItems();
      let foundActiveParentPath = "";

      for (const item of allParentItems) {
        if (
          item.subItems &&
          item.subItems.some((subItem) =>
            currentPathname.startsWith(subItem.path)
          )
        ) {
          foundActiveParentPath = item.path;
          break;
        }
      }
      setActiveMenu(foundActiveParentPath);
      isInitialMount.current = false;
    }

    const currentPathname = location.pathname;
    const allParentItems = getAllParentMenuItems();
    let currentPathParent = "";

    for (const item of allParentItems) {
      if (
        item.subItems &&
        item.subItems.some((subItem) =>
          currentPathname.startsWith(subItem.path)
        )
      ) {
        currentPathParent = item.path;
        break;
      }
    }

    if (currentPathParent && currentPathParent !== activeMenu) {
      setActiveMenu(currentPathParent);
    }
  }, [location.pathname, activeMenu]);

  return {
    activeMenu,
    isOpen,
    setIsOpen,
    handleMenuClick,
  };
};
