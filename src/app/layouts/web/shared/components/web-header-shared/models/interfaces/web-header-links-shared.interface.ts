export interface WebHeaderLinks {
  items: WebHeaderLink[];
}

export interface WebHeaderLink {
  id: number;
  icon: string;
  name: string;
  routerLink: string;
}
