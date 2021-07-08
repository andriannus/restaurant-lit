import { LitElement, html, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("favorite-page")
export default class FavoritePageComponent extends LitElement {
  render(): TemplateResult {
    return html`
      <h1>Favorite</h1>
    `;
  }
}
