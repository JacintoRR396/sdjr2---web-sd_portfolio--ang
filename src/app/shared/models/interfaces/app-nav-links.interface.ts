export interface NavLinks {
  items: NavLinkItem[];
}

export interface NavLinkItem {
  id: number;
  isBasePage?: boolean;
  icon?: string;
  name: string;
  href: string;
}
