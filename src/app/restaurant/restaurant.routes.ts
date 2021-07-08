import { Route } from "@vaadin/router";

import "./restaurant.component";

const restaurantRoutes: Route[] = [
  {
    path: "/restaurant/:id",
    component: "restaurant-page",
  },
];

export default restaurantRoutes;
