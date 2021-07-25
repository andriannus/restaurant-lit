import { Route } from "@vaadin/router";

const restaurantRoutes: Route[] = [
  {
    path: "/restaurant/:id",
    component: "restaurant-page",
    action: (): void => {
      import(
        /* webpackChunkName: "restaurant-page" */ "./restaurant.component"
      );
    },
  },
];

export default restaurantRoutes;
