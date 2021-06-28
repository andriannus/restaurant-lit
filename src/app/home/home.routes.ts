import { Route } from "@vaadin/router";

import "./home.component";

const homeRoutes: Route[] = [
  {
    path: "/",
    component: "home-page",
  },
];

export default homeRoutes;
