import { WebHeaderLinks } from "../interfaces/web-header-links-shared.interace";

export const linksHeader: WebHeaderLinks = {
  items: [
    {
      id: 1,
      icon: "bi bi-person",
      name: "Login",
      urlLink: "auth",
    },
    {
      id: 2,
      icon: "bi bi-graph-up",
      name: "Dashboard",
      urlLink: "dashboard",
    },
    {
      id: 3,
      icon: "bi bi-gear",
      name: "Admin",
      urlLink: "admin",
    }
  ]
};
