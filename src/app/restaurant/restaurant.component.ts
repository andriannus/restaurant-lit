import { LitElement, html, TemplateResult, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";
import { RouterLocation } from "@vaadin/router";

import { Menu, Restaurant } from "./restaurant.model";
import { RestaurantService } from "./restaurant.service";
import { restaurantStyles } from "./restaurant.style";

import { router } from "@/app/app.routes";
import "@/app/shared/components/loading";
import { API } from "@/app/shared/constants/api.constant";

@customElement("restaurant-page")
export default class RestaurantPageComponent extends LitElement {
  @property({ type: Boolean, reflect: true })
  private isLoading: boolean;

  @property({ type: Object })
  private location: RouterLocation;

  private restaurant: Restaurant;
  private restaurantService: RestaurantService;

  constructor() {
    super();

    this.isLoading = false;
    this.location = router.location;
    this.restaurant = {} as Restaurant;
    this.restaurantService = new RestaurantService();
  }

  static get styles(): CSSResultGroup {
    return restaurantStyles;
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.fetchRestaurant();
  }

  private async fetchRestaurant(): Promise<void> {
    this.isLoading = true;

    try {
      const { id } = this.location.params;
      const { data: Data } = await this.restaurantService.fetchRestaurant(
        id as string,
      );

      this.restaurant = Data.restaurant;
      console.log(Data.restaurant);
    } catch {
      //
    } finally {
      this.isLoading = false;
    }
  }

  private Restaurant(): TemplateResult {
    if (this.isLoading) {
      return html`
        <x-loading></x-loading>
      `;
    }

    return html`
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
        <p class="BodyText-1">Review</p>

        <div>
          <div class="Flex">
            <div class="Restaurant-rating">
              <span>${this.restaurant.rating}</span>
            </div>

            <div>
              <p class="BodyText-2 is-active">Bagus</p>

              <p class="Caption">
                dari ${this.restaurant.customerReviews.length} Review
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="Box">
        <h3 class="Headline">Deskripsi</h3>
        <p class="BodyText-2">${this.restaurant.description}</p>
      </div>

      <div class="Box">
        <h3 class="Headline">Alamat</h3>

        <p class="BodyText-2">
          ${this.restaurant.address}, ${this.restaurant.city}
        </p>
      </div>

      <div class="Box">
        <h3 class="Headline">Menu Makanan</h3>

        <ul class="BodyText-2">
          ${this.restaurant.menus.foods.map((food: Menu) => {
            return html`
              <li>${food.name}</li>
            `;
          })}
        </ul>
      </div>

      <div class="Box">
        <h3 class="Headline">Menu Minuman</h3>

        <ul class="BodyText-2">
          ${this.restaurant.menus.drinks.map((drink: Menu) => {
            return html`
              <li>${drink.name}</li>
            `;
          })}
        </ul>
      </div>
    `;
  }

  render(): TemplateResult {
    return html`
      <div id="MainContent" class="Container">${this.Restaurant()}</div>
    `;
  }
}
