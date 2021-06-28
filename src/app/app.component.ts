import { html, render, TemplateResult } from "lit-html";

import "@/app/shared/components/app-bar";
import "@/app/shared/components/footer";

function goToMainContent(e: Event): void {
  e.preventDefault();
  const element = document.querySelector("home-page");
  const mainContent = element?.shadowRoot?.querySelector("#MainContent");

  mainContent?.scrollIntoView({
    behavior: "smooth",
  });
}

const AppComponent: TemplateResult = html`
  <a href="#" class="SkipLink" @click=${goToMainContent}>Menuju ke konten</a>

  <x-app-bar></x-app-bar>

  <div id="Outlet" class="App"></div>

  <x-footer></x-footer>
`;

const app = document.getElementById("app") as HTMLElement;
render(AppComponent, app);
