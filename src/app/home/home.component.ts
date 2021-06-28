import { LitElement, html, TemplateResult, CSSResultGroup } from "lit";
import { customElement } from "lit/decorators.js";

import { homeStyles } from "./home.style";

import "@/app/shared/components/card";
import { RESTAURANTS } from "@/app/shared/constants/data.constant";

@customElement("home-page")
export default class HomePageComponent extends LitElement {
  static get styles(): CSSResultGroup {
    return homeStyles;
  }

  render(): TemplateResult {
    return html`
      <div id="MainContent" class="Container">
        <h2 class="Headline-2 TextAlign-center">Explore Restaurant</h2>

        <div class="Grids">
          ${RESTAURANTS.map((restaurant) => {
            return html`
              <div class="Grid">
                <x-card hover link to="/">
                  <img
                    src=${restaurant.pictureId}
                    alt=${restaurant.name}
                    loading="lazy"
                    slot="media"
                  />

                  <div slot="text">
                    <h3 class="Headline-3">${restaurant.name}</h3>
                    <p class="BodyText-2">Rating: ${restaurant.rating}</p>
                    <p class="BodyText-1">$ • ${restaurant.city}</p>
                    <p class="BodyText-2 Truncate">${restaurant.description}</p>
                  </div>
                </x-card>
              </div>
            `;
          })}
        </div>
      </div>
    `;
  }
}
