import { CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

import { heroStyles } from "./hero.style";

import HeroImage from "@/app/shared/assets/images/hero-image.jpg";

@customElement("x-hero")
export default class HeroComponent extends LitElement {
  static get styles(): CSSResultGroup {
    return heroStyles;
  }

  render(): TemplateResult {
    return html`
      <div class="Hero">
        <img src=${HeroImage} alt="Hero Image" loading="lazy" />
      </div>
    `;
  }
}
