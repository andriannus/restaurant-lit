import { Route, Router } from "@vaadin/router";

import homeRoutes from "@/app/home/home.routes";

const routes: Route[] = [...homeRoutes];
const outlet = document.getElementById("Outlet");
const router = new Router(outlet, { baseUrl: "" });

router.setRoutes(routes);
