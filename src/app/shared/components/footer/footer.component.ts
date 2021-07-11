import { CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

import { footerStyles } from "./footer.style";

@customElement("x-footer")
export default class FooterComponent extends LitElement {
  static get styles(): CSSResultGroup {
    return footerStyles;
  }

  render(): TemplateResult {
    return html`
      <footer class="Footer">
        <span>Copyright &copy; 2021 - We The Food</span>
      </footer>
    `;
  }
}
