import { LitElement, html, TemplateResult, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";
import { RouterLocation } from "@vaadin/router";

import { Menu, Restaurant } from "./restaurant.model";
import { RestaurantService } from "./restaurant.service";
import { restaurantStyles } from "./restaurant.style";

import { router } from "@/app/app.routes";
import "@/app/shared/components/card";
import "@/app/shared/components/favorite-button";
import "@/app/shared/components/loading";
import "@/app/shared/components/review";
import "@/app/shared/components/try-again";
import { API } from "@/app/shared/constants/api.constant";
import { TitleService } from "@/app/shared/services/title";
import { buttonStyles } from "@/app/shared/styles/button.style";
import { layoutStyles } from "@/app/shared/styles/layout.style";
import { typographyStyles } from "@/app/shared/styles/typography.style";

@customElement("restaurant-page")
export default class RestaurantPageComponent extends LitElement {
  @property({ type: Boolean, reflect: true })
  private isError: boolean;

  @property({ type: Boolean, reflect: true })
  private isLoading: boolean;

  @property({ type: Object })
  private location: RouterLocation;

  private restaurant: Restaurant;
  private restaurantService: RestaurantService;
  private titleService: TitleService;

  constructor() {
    super();
    this.isError = false;
    this.isLoading = false;
    this.location = router.location;
    this.restaurant = {} as Restaurant;
    this.restaurantService = new RestaurantService();
    this.titleService = new TitleService();
  }

  static get styles(): CSSResultGroup {
    return [buttonStyles, layoutStyles, typographyStyles, restaurantStyles];
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.fetchRestaurant();
  }

  private async fetchRestaurant(): Promise<void> {
    this.isLoading = true;
    this.isError = false;

    try {
      const { id } = this.location.params;
      const { data: Data } = await this.restaurantService.fetchRestaurant(
        id as string,
      );

      this.titleService.setTitle(`${Data.restaurant.name} - We The Food`);
      this.restaurant = Data.restaurant;
    } catch {
      this.isError = true;
    } finally {
      this.isLoading = false;
    }
  }

  private goToAllReviews(e: KeyboardEvent): void {
    e.preventDefault();

    const element = document.querySelector("restaurant-page");
    const reviewContent = element?.shadowRoot?.querySelector("#ReviewContent");

    reviewContent?.scrollIntoView({
      behavior: "smooth",
    });
  }

  render(): TemplateResult {
    if (this.isLoading) {
      return html`
        <x-loading></x-loading>
      `;
    }

    if (this.isError) {
      return html`
        <x-try-again @refresh=${this.fetchRestaurant}></x-try-again>
      `;
    }

    return html`
      <div id="MainContent" class="Container">
        <div class="Restaurant-image">
          <img
            src="${API.baseUrl}/images/large/${this.restaurant.pictureId}"
            alt=${this.restaurant.name}
            loading="lazy"
            slot="media"
          />
        </div>

        <div class="Box">
          <h1 class="Heading-1">${this.restaurant.name}</h1>
          <p class="BodyText-1">$ • ${this.restaurant.city}</p>
        </div>

        <div class="Box">
          <div class="AlignItems-center Flex JustifyContent-between">
            <p class="BodyText-1">Review</p>
            <a href="#" class="Link" @click=${this.goToAllReviews}>
              See all reviews
            </a>
          </div>

          <div class="Flex JustifyContent-between">
            <div class="Flex">
              <div class="Restaurant-rating">
                <span>${this.restaurant.rating}</span>
              </div>

              <div>
                <p class="BodyText-2 Color-primary">Bagus</p>

                <p class="Caption">
                  dari ${this.restaurant.customerReviews.length} Review
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="Box">
          <h3 class="Headline">Description</h3>
          <p class="BodyText-2">${this.restaurant.description}</p>
        </div>

        <div class="Box">
          <h3 class="Headline">Address</h3>

          <p class="BodyText-2">
            ${this.restaurant.address}, ${this.restaurant.city}
          </p>
        </div>

        <div class="Box">
          <h3 class="Headline">Foods</h3>

          <ul class="BodyText-2">
            ${this.restaurant.menus.foods.map((food: Menu) => {
              return html`
                <li>${food.name}</li>
              `;
            })}
          </ul>
        </div>

        <div class="Box">
          <h3 class="Headline">Drinks</h3>

          <ul class="BodyText-2">
            ${this.restaurant.menus.drinks.map((drink: Menu) => {
              return html`
                <li>${drink.name}</li>
              `;
            })}
          </ul>
        </div>

        <div id="ReviewContent" class="Box">
          <h3 class="Headline">Review</h3>
          <x-review
            restaurantId=${this.location.params.id}
            .reviews=${this.restaurant.customerReviews}
            @update:review=${this.fetchRestaurant}
          ></x-review>
        </div>
      </div>

      <x-favorite-button .restaurant=${this.restaurant}></x-favorite-button>
    `;
  }
}
