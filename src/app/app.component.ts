import { html, render, TemplateResult } from "lit-html";

import "@/app/shared/components/app-bar";
import "@/app/shared/components/footer";

const AppComponent: TemplateResult = html`
  <a href="#MainContent" class="SkipLink">Menuju ke konten</a>

  <x-app-bar></x-app-bar>

  <div id="Outlet" class="App"></div>

  <x-footer></x-footer>
`;

const app = document.getElementById("app") as HTMLElement;
render(AppComponent, app);
