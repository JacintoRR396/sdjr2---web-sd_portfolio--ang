import { WebHeaderMenu } from "../interfaces/web-header-menu-shared.interace";
import { NAVIGATION_ROUTES } from "../../../../../../../models/navigation-routes.model";

const navRoutes = NAVIGATION_ROUTES;
export const WEB_MENU_HEADER: WebHeaderMenu = {
  items: [
    {
      id: 1,
      isBasePage: true,
      name: "Home",
      routerLink: navRoutes.web.home
    },
    {
      id: 2,
      isBasePage: true,
      name: "Qualification",
      routerLink: navRoutes.web.qualification
    },
    {
      id: 3,
      isBasePage: true,
      name: "Services",
      routerLink: navRoutes.web.services
    },
    {
      id: 4,
      isBasePage: true,
      name: "Portfolio",
      routerLink: navRoutes.web.portfolio
    },
    {
      id: 5,
      isBasePage: true,
      name: "Testimonials",
      routerLink: navRoutes.web.testimonials
    },
    {
      id: 6,
      isBasePage: true,
      name: "Contact",
      routerLink: navRoutes.web.contact
    }
  ]
};
