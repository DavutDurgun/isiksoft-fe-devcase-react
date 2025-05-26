import React from "react";
import {
  HomeIcon,
  CubeIcon,
  TagIcon,
  FolderIcon,
  BuildingStorefrontIcon,
  QrCodeIcon,
  ArrowDownTrayIcon,
  ChartBarIcon,
  MapPinIcon,
  TrophyIcon,
  ClipboardDocumentListIcon,
  ArrowUturnLeftIcon,
  CurrencyDollarIcon,
  ArchiveBoxIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  EnvelopeIcon,
  Cog6ToothIcon,
  ArrowRightStartOnRectangleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

import type { MenuSectionType } from "@/types";

export const MENU_SECTIONS: MenuSectionType[] = [
  {
    title: "MAIN MENU",
    items: [
      { name: "HomePage", icon: <HomeIcon className="w-5 h-5" />, path: "/" },
      {
        name: "Products",
        path: "/products",
        icon: <CubeIcon className="w-5 h-5" />,
        subItems: [
          {
            name: "Products",
            icon: <ChartBarIcon className="w-5 h-5" />,
            path: "/products",
          },
          {
            name: "Add New Product",
            icon: <PlusCircleIcon className="w-5 h-5" />,
            path: "/products/add",
          },
          {
            name: "Tags",
            icon: <TagIcon className="w-5 h-5" />,
            path: "/products/tags",
          },
        ],
      },
      {
        name: "Categories",
        icon: <TagIcon className="w-5 h-5" />,
        path: "/categories",
      },
      {
        name: "Sub Category",
        icon: <FolderIcon className="w-5 h-5" />,
        path: "/sub-categories",
      },
      {
        name: "Brands",
        icon: <BuildingStorefrontIcon className="w-5 h-5" />,
        path: "/brands",
      },
      {
        name: "Scan Barcode",
        icon: <QrCodeIcon className="w-5 h-5" />,
        path: "/scan-barcode",
      },
      {
        name: "Import Products",
        icon: <ArrowDownTrayIcon className="w-5 h-5" />,
        path: "/import-products",
      },
    ],
  },
  {
    title: "ANALYTICS",
    items: [
      {
        name: "Sales",
        icon: <ChartBarIcon className="w-5 h-5" />,
        path: "/analytics/sales",
        badge: 69,
      },
      {
        name: "Point of Sales",
        icon: <MapPinIcon className="w-5 h-5" />,
        path: "/analytics/pos",
      },
      {
        name: "Leaderboards",
        icon: <TrophyIcon className="w-5 h-5" />,
        path: "/analytics/leaderboards",
      },
      {
        name: "Orders",
        icon: <ClipboardDocumentListIcon className="w-5 h-5" />,
        path: "/analytics/orders",
      },
      {
        name: "Refund",
        icon: <ArrowUturnLeftIcon className="w-5 h-5" />,
        path: "/analytics/refund",
      },
      {
        name: "Taxes",
        icon: <CurrencyDollarIcon className="w-5 h-5" />,
        path: "/analytics/taxes",
      },
      {
        name: "Stock",
        icon: <ArchiveBoxIcon className="w-5 h-5" />,
        path: "/analytics/stock",
      },
    ],
  },
  {
    title: "APPS",
    items: [
      {
        name: "Chat",
        icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />,
        path: "/apps/chat",
        badge: 60,
      },
      {
        name: "Calendar",
        icon: <CalendarDaysIcon className="w-5 h-5" />,
        path: "/apps/calendar",
      },
      {
        name: "Email",
        icon: <EnvelopeIcon className="w-5 h-5" />,
        path: "/apps/email",
      },
    ],
  },
  {
    title: "SETTINGS",
    items: [
      {
        name: "Settings",
        icon: <Cog6ToothIcon className="w-5 h-5" />,
        path: "/settings",
      },
      {
        name: "Log Out",
        icon: <ArrowRightStartOnRectangleIcon className="w-5 h-5" />,
        path: "/logout",
      },
    ],
  },
];
