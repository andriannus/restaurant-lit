import { Route } from "@vaadin/router";

const favoriteRoutes: Route[] = [
  {
    path: "/favorite",
    component: "favorite-page",
    action: (): void => {
      import(/* webpackChunkName: "favorite-page" */ "./favorite.component");
    },
  },
];

export default favoriteRoutes;
