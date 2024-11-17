import { WebHeaderMenu } from "../interfaces/web-header-menu-shared.interace";

export const menuHeader: WebHeaderMenu = {
  items: [
    {
      id: 1,
      isBasePage: true,
      name: "Home",
      routerLink: "home",
    },
    {
      id: 2,
      isBasePage: true,
      name: "Qualification",
      routerLink: "qualification",
    },
    {
      id: 3,
      isBasePage: true,
      name: "Services",
      routerLink: "services",
    },
    {
      id: 4,
      isBasePage: true,
      name: "Portfolio",
      routerLink: "portfolio",
    },
    {
      id: 5,
      isBasePage: true,
      name: "Testimonials",
      routerLink: "testimonials",
    },
    {
      id: 6,
      isBasePage: true,
      name: "Contact",
      routerLink: "contact",
    }
  ]
};
