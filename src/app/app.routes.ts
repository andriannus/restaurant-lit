import { Route, Router } from "@vaadin/router";

import homeRoutes from "@/app/home/home.routes";
import favoriteRoutes from "@/app/favorite/favorite.routes";
import restaurantRoutes from "@/app/restaurant/restaurant.routes";

const routes: Route[] = [...homeRoutes, ...favoriteRoutes, ...restaurantRoutes];
const outlet = document.getElementById("Outlet");
const router = new Router(outlet, { baseUrl: "" });

router.setRoutes(routes);
