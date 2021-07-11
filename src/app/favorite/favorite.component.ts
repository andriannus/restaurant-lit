import { LitElement, html, TemplateResult, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";

import { FavoriteService } from "@/app/favorite/favorite.service";
import { Restaurant } from "@/app/restaurant/restaurant.model";
import "@/app/shared/components/loading";
import { API } from "@/app/shared/constants/api.constant";
import { layoutStyles } from "@/app/shared/styles/layout.style";
import { typographyStyles } from "@/app/shared/styles/typography.style";

@customElement("favorite-page")
export default class FavoritePageComponent extends LitElement {
  @property({ type: Boolean, reflect: true })
  private isLoading: boolean;

  private favoriteService: FavoriteService;
  private restaurants: Restaurant[];

  constructor() {
    super();

    this.favoriteService = new FavoriteService();
    this.isLoading = false;
    this.restaurants = [];
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.fetchFavoritedRestaurants();
  }

  static get styles(): CSSResultGroup {
    return [layoutStyles, typographyStyles];
  }

  private async fetchFavoritedRestaurants(): Promise<void> {
    this.isLoading = true;

    try {
      const restaurants = (await this.favoriteService.getAll()) as Restaurant[];
      this.restaurants = restaurants;
    } catch (error) {
      console.error(error);
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
        ${this.restaurants.map((restaurant) => {
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
      <div id="MainContent" class="Container">
        <h2 class="Heading-2 TextAlign-center">Favorited Restaurant</h2>
        ${this.Restaurants()}
      </div>
    `;
  }
}
