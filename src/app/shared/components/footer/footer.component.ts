import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("x-footer")
export default class FooterComponent extends LitElement {
  static get styles(): CSSResultGroup {
    return css`
      .Footer {
        background: #f8f8f9;
        padding: 24px 0;
        text-align: center;
      }

      .Footer > * {
        font-size: 14px;
        letter-spacing: 1px;
      }
    `;
  }

  render(): TemplateResult {
    return html`
      <footer class="Footer">
        <span>Copyright &copy; 2021 - We The Food</span>
      </footer>
    `;
  }
}
