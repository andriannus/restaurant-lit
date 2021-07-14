import { html, render, TemplateResult } from "lit/html";

import "@/app/shared/components/app-bar";
import "@/app/shared/components/footer";
import "@/app/shared/components/skip-link";
import "@/app/shared/styles/index.style.scss";

const AppComponent: TemplateResult = html`
  <x-skip-link></x-skip-link>
  <x-app-bar></x-app-bar>
  <div id="Outlet" class="App"></div>
  <x-footer></x-footer>
`;

const app = document.getElementById("app") as HTMLElement;
render(AppComponent, app);
