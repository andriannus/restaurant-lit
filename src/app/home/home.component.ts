import { LitElement, html, TemplateResult, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Restaurant } from "./home.model";
import { HomeService } from "./home.service";

import { API } from "@/app/shared/constants/api.constant";
import { TitleService } from "@/app/shared/services/title";
import { layoutStyles } from "@/app/shared/styles/layout.style";
import { typographyStyles } from "@/app/shared/styles/typography.style";

@customElement("home-page")
export default class HomePageComponent extends LitElement {
  @property({ type: Boolean, reflect: true })
  private isError: boolean;

  @property({ type: Boolean, reflect: true })
  private isLoading: boolean;

  private homeService: HomeService;
  private restaurants: Restaurant[];
  private titleService: TitleService;

  constructor() {
    super();
    this.homeService = new HomeService();
    this.isError = false;
    this.isLoading = false;
    this.restaurants = [];
    this.titleService = new TitleService();
  }

  static get styles(): CSSResultGroup {
    return [layoutStyles, typographyStyles];
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.titleService.setTitle("Explore Restaurant - We The Food");
    this.fetchRestaurants();
  }

  private async loadCardComponent(): Promise<void> {
    await import(
      /* webpackChunkName: "card-component" */ "@/app/shared/components/card"
    );
  }

  private async loadHeroComponent(): Promise<void> {
    await import(
      /* webpackChunkName: "hero-component" */ "@/app/shared/components/hero"
    );
  }

  private async loadLoadingComponent(): Promise<void> {
    await import(
      /* webpackChunkName: "loading-component" */ "@/app/shared/components/loading"
    );
  }

  private async loadTryAgainComponent(): Promise<void> {
    await import(
      /* webpackChunkName: "try-again-component" */ "@/app/shared/components/try-again"
    );
  }

  private async fetchRestaurants(): Promise<void> {
    this.isLoading = true;
    this.isError = false;

    try {
      const { data: Data } = await this.homeService.fetchRestaurants();
      this.restaurants = Data.restaurants;
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
        <x-try-again @refresh=${this.fetchRestaurants}></x-try-again>
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
                  src="${API.baseUrl}/images/small/${restaurant.pictureId}"
                  alt=${restaurant.name}
                  height="auto"
                  loading="lazy"
                  slot="media"
                  width="100%"
                />

                <div slot="text">
                  <h3 class="Heading-3">${restaurant.name}</h3>
                  <p class="BodyText-2">Rating: ${restaurant.rating}</p>
                  <p class="BodyText-1">$ ??? ${restaurant.city}</p>
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
    this.loadHeroComponent();

    return html`
      <x-hero></x-hero>

      <div id="MainContent" class="Container">
        <h2 class="Heading-2 TextAlign-center">Explore Restaurant</h2>
        ${this.Restaurants()}
      </div>
    `;
  }
}
