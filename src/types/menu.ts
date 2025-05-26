import React from "react";

export interface MenuItem {
  name: string;
  icon: React.ReactNode;
  path: string;
  subItems?: MenuItem[];
  badge?: number;
}

export interface MenuSectionType {
  title?: string;
  items: MenuItem[];
}
