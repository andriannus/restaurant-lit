import { CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map";
import { nothing } from "lit/html";

import { favoriteButtonStyles } from "./favorite-button.style";

import { FavoriteService } from "@/app/favorite/favorite.service";
import { Restaurant } from "@/app/restaurant/restaurant.model";
import { isEmpty } from "@/app/shared/utils/operation";

@customElement("x-favorite-button")
export class FavoriteButtonComponent extends LitElement {
  @property({ type: Boolean, reflect: true })
  private hasFavorited: boolean;

  @property({ type: Object, reflect: true })
  private restaurant: Restaurant;

  private favoriteService: FavoriteService;

  constructor() {
    super();
    this.favoriteService = new FavoriteService();
    this.hasFavorited = false;
    this.restaurant = {} as Restaurant;
  }

  updated(): void {
    !isEmpty(this.restaurant) && this.handleFavoriteStatus();
  }

  static get styles(): CSSResultGroup {
    return favoriteButtonStyles;
  }

  private get ariaLabel(): string {
    return this.hasFavorited
      ? "Unfavorite this restaurant"
      : "Favorite this restaurant";
  }

  private async handleFavoriteStatus(): Promise<void> {
    try {
      const restaurant = await this.favoriteService.get(this.restaurant.id);
      this.hasFavorited = !!restaurant;
    } catch (error) {
      console.error(error);
    }
  }

  private async addToFavorite(): Promise<void> {
    try {
      await this.favoriteService.add(this.restaurant);
      await this.handleFavoriteStatus();
    } catch (error) {
      console.error(error);
    }
  }

  private async deleteFromFavorite(): Promise<void> {
    try {
      await this.favoriteService.delete(this.restaurant.id);
      await this.handleFavoriteStatus();
    } catch (error) {
      console.error(error);
    }
  }

  render(): typeof nothing | TemplateResult {
    if (isEmpty(this.restaurant)) return nothing;

    return html`
      <button
        aria-label=${this.ariaLabel}
        class=${classMap({
          FavoriteButton: true,
          "is-active": this.hasFavorited,
        })}
        @click=${this.hasFavorited
          ? this.deleteFromFavorite
          : this.addToFavorite}
      >
        ${this.hasFavorited ? "Favorited" : "Favorite"}
      </button>
    `;
  }
}
