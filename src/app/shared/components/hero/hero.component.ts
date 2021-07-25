import { CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

import { heroStyles } from "./hero.style";

@customElement("x-hero")
export default class HeroComponent extends LitElement {
  static get styles(): CSSResultGroup {
    return heroStyles;
  }

  render(): TemplateResult {
    return html`
      <picture class="Hero">
        <source
          media="(max-width: 600px)"
          type="image/webp"
          srcset="./images/hero-image-small.webp"
        />

        <source
          media="(max-width: 600px)"
          type="image/jpeg"
          srcset="./images/hero-image-small.jpeg"
        />

        <source
          media="(min-width: 601px)"
          type="image/webp"
          srcset="./images/hero-image-large.webp"
        />

        <img
          src="./images/hero-image-large.jpeg"
          alt="Hero Image"
          loading="lazy"
        />
      </picture>
    `;
  }
}
