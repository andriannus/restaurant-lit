import { LitElement, html, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("restaurant-page")
export default class RestaurantPageComponent extends LitElement {
  render(): TemplateResult {
    return html`
      <h1>Restaurant</h1>
    `;
  }
}
