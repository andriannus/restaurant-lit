import { LitElement, html, TemplateResult, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Restaurant } from "./home.model";
import { HomeService } from "./home.service";

import "@/app/shared/components/card";
import "@/app/shared/components/hero";
import "@/app/shared/components/loading";
import { API } from "@/app/shared/constants/api.constant";
import { layoutStyles } from "@/app/shared/styles/layout.style";
import { typographyStyles } from "@/app/shared/styles/typography.style";

@customElement("home-page")
export default class HomePageComponent extends LitElement {
  @property({ type: Boolean, reflect: true })
  private isLoading: boolean;

  private homeService: HomeService;
  private restaurants: Restaurant[];

  constructor() {
    super();
    this.homeService = new HomeService();
    this.isLoading = false;
    this.restaurants = [];
  }

  static get styles(): CSSResultGroup {
    return [layoutStyles, typographyStyles];
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.fetchRestaurants();
  }

  private async fetchRestaurants(): Promise<void> {
    this.isLoading = true;

    try {
      const { data: Data } = await this.homeService.fetchRestaurants();
      this.restaurants = Data.restaurants;
    } catch {
      //
    } finally {
      this.isLoading = false;
    }
  }

  private Restaurants(): TemplateResult {
    if (this.isLoading) {
      return html`
        <x-loading></x-loading>
      `;
    }

    return html`
      <div class="Grids">
        ${this.restaurants.map<TemplateResult>((restaurant: Restaurant) => {
          return html`
            <div class="Grid">
              <x-card hover link to="/restaurant/${restaurant.id}">
                <img
                  src="${API.baseUrl}/images/large/${restaurant.pictureId}"
                  alt=${restaurant.name}
                  height="auto"
                  loading="lazy"
                  slot="media"
                  width="100%"
                />

                <div slot="text">
                  <h3 class="Heading-3">${restaurant.name}</h3>
                  <p class="BodyText-2">Rating: ${restaurant.rating}</p>
                  <p class="BodyText-1">$ • ${restaurant.city}</p>
                  <p class="BodyText-2 Truncate">${restaurant.description}</p>
                </div>
              </x-card>
            </div>
          `;
        })}
      </div>
    `;
  }

  render(): TemplateResult {
    return html`
      <x-hero></x-hero>

      <div id="MainContent" class="Container">
        <h2 class="Heading-2 TextAlign-center">Explore Restaurant</h2>
        ${this.Restaurants()}
      </div>
    `;
  }
}
