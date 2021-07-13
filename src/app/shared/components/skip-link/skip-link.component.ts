import { CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import { Router } from "@vaadin/router";

import { skipLinkStyles } from "./skip-link.style";

import { typographyStyles } from "@/app/shared/styles/typography.style";

@customElement("x-skip-link")
export default class SkipLinkComponent extends LitElement {
  static get styles(): CSSResultGroup {
    return [typographyStyles, skipLinkStyles];
  }

  private goToMainContent(e: Event): void {
    e.preventDefault();
    (e.currentTarget as HTMLElement).blur();

    if (!this.isHomePage()) {
      Router.go("/");
      return;
    }

    const element = document.querySelector("home-page");
    const mainContent = element?.shadowRoot?.querySelector("#MainContent");

    mainContent?.scrollIntoView({
      behavior: "smooth",
    });
  }

  private isHomePage(): boolean {
    const { pathname } = window.location;
    const tempArr = pathname.split("");

    return tempArr.length === 1;
  }

  render(): TemplateResult {
    return html`
      <a href="#" class="SkipLink" @click=${this.goToMainContent}>
        Menuju ke konten
      </a>
    `;
  }
}
