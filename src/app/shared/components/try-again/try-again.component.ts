import { CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

import { tryAgainStyles } from "./try-again.style";

import { layoutStyles } from "@/app/shared/styles/layout.style";
import { typographyStyles } from "@/app/shared/styles/typography.style";

@customElement("x-try-again")
export default class TryAgainComponent extends LitElement {
  static get styles(): CSSResultGroup {
    return [layoutStyles, typographyStyles, tryAgainStyles];
  }

  private onClick(): void {
    this.dispatchEvent(new CustomEvent("refresh"));
  }

  render(): TemplateResult {
    return html`
      <div class="TextAlign-center">
        <p class="BodyText-1">Something wrong.</p>
        <button class="TryAgain-button" @click=${this.onClick}>Refresh</button>
      </div>
    `;
  }
}
