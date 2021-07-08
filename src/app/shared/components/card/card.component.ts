import { CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map";

import { cardStyles } from "./card.style";

@customElement("x-card")
export default class CardComponent extends LitElement {
  @property({ type: Boolean, reflect: true })
  private hover: boolean;

  @property({ type: Boolean, reflect: true })
  private link: boolean;

  @property({ type: String, reflect: true })
  private to: string;

  constructor() {
    super();
    this.hover = false;
    this.link = false;
    this.to = "";
  }

  static get styles(): CSSResultGroup {
    return cardStyles;
  }

  render(): TemplateResult {
    if (this.link) {
      return html`
        <a
          class=${classMap({ Card: true, "is-hover": this.hover })}
          href=${this.to}
        >
          <div class="Card-media">
            <slot name="media"></slot>
          </div>

          <div class="Card-text">
            <slot name="text"></slot>
          </div>
        </a>
      `;
    }

    return html`
      <div class=${classMap({ Card: true, "is-hover": this.hover })}>
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
