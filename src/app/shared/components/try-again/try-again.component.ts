import { CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

import { buttonStyles } from "@/app/shared/styles/button.style";
import { layoutStyles } from "@/app/shared/styles/layout.style";
import { spacingStyles } from "@/app/shared/styles/spacing.style";
import { typographyStyles } from "@/app/shared/styles/typography.style";

@customElement("x-try-again")
export default class TryAgainComponent extends LitElement {
  static get styles(): CSSResultGroup {
    return [buttonStyles, layoutStyles, spacingStyles, typographyStyles];
  }

  private onClick(): void {
    this.dispatchEvent(new CustomEvent("refresh"));
  }

  render(): TemplateResult {
    return html`
      <div class="Padding TextAlign-center">
        <p class="BodyText-1 MarginBottom">Something wrong.</p>
        <button class="Button" @click=${this.onClick}>Refresh</button>
      </div>
    `;
  }
}
