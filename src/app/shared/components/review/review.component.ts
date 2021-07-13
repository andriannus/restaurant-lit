import { LitElement, html, TemplateResult, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";
import { nothing } from "lit-html";

import { reviewStyles } from "./review.style";

import { CustomerReview } from "@/app/restaurant/restaurant.model";
import { RestaurantService } from "@/app/restaurant/restaurant.service";
import "@/app/shared/components/loading";
import { buttonStyles } from "@/app/shared/styles/button.style";
import { spacingStyles } from "@/app/shared/styles/spacing.style";
import { typographyStyles } from "@/app/shared/styles/typography.style";
import { ReviewData } from "./review.model";

@customElement("x-review")
export default class ReviewComponent extends LitElement {
  @property({ type: Boolean, reflect: true })
  private isLoading: boolean;

  @property({ type: String })
  private name: string;

  @property({ type: String })
  private restaurantId: string;

  @property({ type: String })
  private review: string;

  @property({ type: Array })
  private reviews: CustomerReview[];

  private restaurantService: RestaurantService;

  constructor() {
    super();
    this.isLoading = false;
    this.name = "";
    this.restaurantService = new RestaurantService();
    this.restaurantId = "";
    this.review = "";
    this.reviews = [];
  }

  static get styles(): CSSResultGroup {
    return [buttonStyles, spacingStyles, typographyStyles, reviewStyles];
  }

  private onInputName(e: KeyboardEvent): void {
    this.name = (e.target as HTMLInputElement).value;
  }

  private onInputReview(e: KeyboardEvent): void {
    this.review = (e.target as HTMLInputElement).value;
  }

  private async submitReview(e: KeyboardEvent): Promise<void> {
    e.preventDefault();
    this.isLoading = true;

    try {
      const data: ReviewData = {
        id: this.restaurantId,
        name: this.name,
        review: this.review,
      };

      await this.restaurantService.submitReview(data);
      this.dispatchEvent(new CustomEvent("update:review"));
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

  private ReviewForm(): TemplateResult {
    return html`
      <form @submit=${this.submitReview}>
        <p class="BodyText-1 MarginBottom-xs">Rate this restaurant</p>

        <div class="MarginBottom-xs">
          <input
            class="TextField"
            placeholder="Your name"
            value=${this.review}
            @input=${this.onInputName}
          />
        </div>

        <div class="MarginBottom-xs">
          <textarea
            class="Textarea"
            placeholder="Your review"
            value=${this.review}
            @input=${this.onInputReview}
          ></textarea>
        </div>

        <div class="TextAlign-right">
          ${this.isLoading
            ? html`
                <x-loading></x-loading>
              `
            : html`
                <button class="Button" type="submit">Submit</button>
              `}
        </div>
      </form>
    `;
  }

  render(): typeof nothing | TemplateResult {
    if (!Array.isArray(this.reviews) || this.reviews.length < 0) return nothing;

    return html`
      ${this.reviews.map<TemplateResult>((review: CustomerReview) => {
        return html`
          <div class="Review">
            <p class="BodyText-2">${review.name}</p>
            <span class="Caption">${review.date}</span>
            <p class="BodyText-2 Color-black">${review.review}</p>
          </div>
        `;
      })}
      ${this.ReviewForm()}
    `;
  }
}
