export interface MenuItem {
  name: string;
  icon: string;
  path: string;
  subItems?: MenuItem[];
  badge?: number;
}

export interface MenuSectionType {
  title?: string;
  items: MenuItem[];
}
