import { WebHeaderLinks } from "../interfaces/web-header-links-shared.interace";
import { NAVIGATION_ROUTES } from "../../../../../../../models/navigation-routes.model";

const navRoutes = NAVIGATION_ROUTES;
export const WEB_LINKS_HEADER: WebHeaderLinks = {
  items: [
    {
      id: 1,
      icon: "bi bi-globe2",
      name: "Web",
      routerLink: "/" + navRoutes.web.self
    },
    {
      id: 2,
      icon: "bi bi-person",
      name: "Login",
      routerLink: "/" + navRoutes.auth.self
    },
    {
      id: 3,
      icon: "bi bi-graph-up",
      name: "Dashboard",
      routerLink: "/" + navRoutes.dashboard.self
    },
    {
      id: 4,
      icon: "bi bi-gear",
      name: "Admin",
      routerLink: "/" + navRoutes.admin.self
    },
    {
      id: 5,
      icon: "bi bi-box-arrow-left",
      name: "Logout",
      routerLink: "/" + navRoutes.auth.self
    }
  ]
};
