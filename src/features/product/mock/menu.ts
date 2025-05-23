import type { MenuSectionType } from "@/types";

export const MENU_SECTIONS: MenuSectionType[] = [
  {
    title: "MAIN MENU",
    items: [
      { name: "HomePage", icon: "🏠", path: "/" },
      {
        name: "Products",
        icon: "📦",
        path: "/products",
        subItems: [
          { name: "All Products", icon: "📊", path: "/products/all" },
          { name: "Add New Product", icon: "➕", path: "/products/add" },
          { name: "Tags", icon: "🏷️", path: "/products/tags" },
        ],
      },
      { name: "Categories", icon: "🗂️", path: "/categories" },
      { name: "Sub Category", icon: "📂", path: "/sub-categories" },
      { name: "Brands", icon: "Ⓡ", path: "/brands" },
      { name: "Scan Barcode", icon: "🔍", path: "/scan-barcode" },
      { name: "Import Products", icon: "📥", path: "/import-products" },
    ],
  },
  {
    title: "ANALYTICS",
    items: [
      { name: "Sales", icon: "📈", path: "/analytics/sales", badge: 69 },
      { name: "Point of Sales", icon: "📍", path: "/analytics/pos" },
      { name: "Leaderboards", icon: "🏆", path: "/analytics/leaderboards" },
      { name: "Orders", icon: "📋", path: "/analytics/orders" },
      { name: "Refund", icon: "↩️", path: "/analytics/refund" },
      { name: "Taxes", icon: "💰", path: "/analytics/taxes" },
      { name: "Stock", icon: "📦", path: "/analytics/stock" },
    ],
  },
  {
    title: "APPS",
    items: [
      { name: "Chat", icon: "💬", path: "/apps/chat", badge: 60 },
      { name: "Calendar", icon: "📅", path: "/apps/calendar" },
      { name: "Email", icon: "📧", path: "/apps/email" },
    ],
  },
  {
    title: "SETTINGS",
    items: [
      { name: "Settings", icon: "⚙️", path: "/settings" },
      { name: "Log Out", icon: "🚪", path: "/logout" },
    ],
  },
];
