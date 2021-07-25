import { Route } from "@vaadin/router";

const homeRoutes: Route[] = [
  {
    path: "/",
    component: "home-page",
    action: (): void => {
      import(/* webpackChunkName: "home-page" */ "./home.component");
    },
  },
];

export default homeRoutes;
