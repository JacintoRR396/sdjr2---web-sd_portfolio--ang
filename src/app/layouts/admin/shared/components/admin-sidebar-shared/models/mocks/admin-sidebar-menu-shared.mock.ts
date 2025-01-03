import { NavLinks } from "../../../../../../../shared/models/interfaces/app-nav-links.interface";
import { NAVIGATION_ROUTES } from "../../../../../../../models/navigation-routes.model";

const navRoutes = NAVIGATION_ROUTES;
export const ADMIN_SIDEBAR_MENU: NavLinks = {
  items: [
    {
      id: 1,
      isBasePage: true,
      icon: 'bi-people',
      name: "Users",
      href: navRoutes.admin.users
    },
    {
      id: 2,
      isBasePage: true,
      icon: 'bi-book',
      name: "Qualification",
      href: navRoutes.admin.qualification
    },
    {
      id: 3,
      isBasePage: true,
      icon: 'bi-list-task',
      name: "Services",
      href: navRoutes.admin.services
    },
    {
      id: 4,
      isBasePage: true,
      icon: 'bi-window-stack',
      name: "Portfolio",
      href: navRoutes.admin.portfolio
    },
    {
      id: 5,
      isBasePage: true,
      icon: 'bi-chat-dots',
      name: "Testimonials",
      href: navRoutes.admin.testimonials
    },
  ]
};
