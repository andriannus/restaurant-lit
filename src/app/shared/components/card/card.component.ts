import { CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

import { cardStyles } from "./card.style";

@customElement("x-card")
export default class CardComponent extends LitElement {
  static get styles(): CSSResultGroup {
    return cardStyles;
  }

  render(): TemplateResult {
    return html`
      <div class="Card">
        <div class="Card-media">
          <slot name="media"></slot>
        </div>

        <div class="Card-text">
          <slot name="text"></slot>
        </div>
      </div>
    `;
  }
}
