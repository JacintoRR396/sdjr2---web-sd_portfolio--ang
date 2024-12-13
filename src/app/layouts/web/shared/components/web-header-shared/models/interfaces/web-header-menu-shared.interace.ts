export interface WebHeaderMenu {
  items: WebHeaderMenuItem[];
}

export interface WebHeaderMenuItem {
  id: number;
  isBasePage: boolean;
  icon?: string;
  name: string;
  routerLink: string;
}
