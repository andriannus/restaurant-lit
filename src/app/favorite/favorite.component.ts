import { LitElement, html, TemplateResult, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";

import { FavoriteService } from "@/app/favorite/favorite.service";
import { Restaurant } from "@/app/restaurant/restaurant.model";
import { API } from "@/app/shared/constants/api.constant";
import { TitleService } from "@/app/shared/services/title";
import { layoutStyles } from "@/app/shared/styles/layout.style";
import { typographyStyles } from "@/app/shared/styles/typography.style";

@customElement("favorite-page")
export default class FavoritePageComponent extends LitElement {
  @property({ type: Boolean, reflect: true })
  private isError: boolean;

  @property({ type: Boolean, reflect: true })
  private isLoading: boolean;

  private favoriteService: FavoriteService;
  private restaurants: Restaurant[];
  private titleService: TitleService;

  constructor() {
    super();
    this.favoriteService = new FavoriteService();
    this.isError = false;
    this.isLoading = false;
    this.restaurants = [];
    this.titleService = new TitleService();
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.titleService.setTitle("Favorite - We The Food");
    this.fetchFavoritedRestaurants();
  }

  static get styles(): CSSResultGroup {
    return [layoutStyles, typographyStyles];
  }

  private async loadCardComponent(): Promise<void> {
    await import(
      /* webpackChunkName: "card-component" */ "@/app/shared/components/card"
    );
  }

  private async loadLoadingComponent(): Promise<void> {
    await import(
      /* webpackChunkName: "landing-component" */ "@/app/shared/components/loading"
    );
  }

  private async loadTryAgainComponent(): Promise<void> {
    await import(
      /* webpackChunkName: "try-again-component" */ "@/app/shared/components/try-again"
    );
  }

  private async fetchFavoritedRestaurants(): Promise<void> {
    this.isLoading = true;
    this.isError = false;

    try {
      const restaurants = (await this.favoriteService.getAll()) as Restaurant[];
      this.restaurants = restaurants;
    } catch {
      this.isError = true;
    } finally {
      this.isLoading = false;
    }
  }

  private Restaurants(): TemplateResult {
    if (this.isLoading) {
      this.loadLoadingComponent();

      return html`
        <x-loading></x-loading>
      `;
    }

    if (this.isError) {
      this.loadTryAgainComponent();

      return html`
        <x-try-again @refresh=${this.fetchFavoritedRestaurants}></x-try-again>
      `;
    }

    if (this.restaurants.length < 1) {
      return html`
        <p class="BodyText-1 TextAlign-center">
          You don't have a favorite restaurant yet.
        </p>
      `;
    }

    this.loadCardComponent();

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
      <div id="MainContent" class="Container">
        <h2 class="Heading-2 TextAlign-center">Favorited Restaurant</h2>
        ${this.Restaurants()}
      </div>
    `;
  }
}
