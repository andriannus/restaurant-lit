import { API } from "@/app/shared/constants/api.constant";

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js",
);

workbox.core.setCacheNameDetails({ prefix: "wethefood" });

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

workbox.routing.registerNavigationRoute("/index.html");
workbox.routing.registerRoute(
  new RegExp(`${API.baseUrl}/`),
  workbox.strategies.staleWhileRevalidate(),
);
