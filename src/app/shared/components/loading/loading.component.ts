import { CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

import { loadingStyles } from "./loading.style";

@customElement("x-loading")
export default class LoadingComponent extends LitElement {
  static get styles(): CSSResultGroup {
    return loadingStyles;
  }

  render(): TemplateResult {
    return html`
      <div class="Loading">
        <div class="LoadingSpinner">
          ${Array.from({ length: 6 }).map(() => {
            return html`
              <div class="LoadingSpinner-dot"></div>
            `;
          })}
        </div>
      </div>
    `;
  }
}
