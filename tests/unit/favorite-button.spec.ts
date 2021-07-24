import {
  assert,
  expect,
  fixture,
  fixtureCleanup,
  html,
  waitUntil,
} from "@open-wc/testing";

import { MOCK_RESTAURANT } from "./mocks/restaurant.mock";

import { FavoriteService } from "@/app/favorite/favorite.service";
import { FavoriteButtonComponent } from "@/app/shared/components/favorite-button";

describe("Favorite Button Component", () => {
  let component: FavoriteButtonComponent;
  let favoriteService: FavoriteService;

  beforeEach(async () => {
    favoriteService = new FavoriteService();

    component = await fixture<FavoriteButtonComponent>(
      html`
        <x-favorite-button .restaurant=${MOCK_RESTAURANT}></x-favorite-button>
      `,
    );
    assert.instanceOf(component, FavoriteButtonComponent);
  });

  afterEach(() => {
    fixtureCleanup();
  });

  describe("when favorite a restaurant", () => {
    it("should show the favorite button when the restaurant has not been favorited before", () => {
      const mockSelector = '[aria-label="Favorite this restaurant"]';
      const mockButton = component.shadowRoot!.querySelector(mockSelector)!;

      expect(mockButton).to.be.ok;
    });

    it("should not show the unfavorite button when the restaurant has not been favorited before", async () => {
      const mockSelector = '[aria-label="Unfavorite this restaurant"]';
      const mockButton = component.shadowRoot!.querySelector(mockSelector)!;

      expect(mockButton).to.be.null;
    });

    it("should be able to favorite the restaurant", async () => {
      const button = component.shadowRoot!.querySelector("button")!;
      button.click();

      const restaurant = await favoriteService.get(MOCK_RESTAURANT.id);
      expect(restaurant).to.deep.equal(MOCK_RESTAURANT);
    });

    it("should not add a restaurant again when its already favorited", async () => {
      const button = component.shadowRoot!.querySelector("button")!;
      button.click();

      const restaurants = await favoriteService.getAll();
      expect(restaurants).to.deep.equal([MOCK_RESTAURANT]);
    });
  });

  describe("when unfavorite a restaurant", () => {
    it("should display unfavorite button when the restaurant has been favorited", async () => {
      const button = component.shadowRoot!.querySelector("button")!;
      button.click();

      await waitUntil(() => component["hasFavorited"]);

      const mockSelector = '[aria-label="Unfavorite this restaurant"]';
      const mockButton = component.shadowRoot!.querySelector(mockSelector);
      mockButton?.dispatchEvent(new Event("click"));

      expect(mockButton).to.be.ok;
    });

    it("should not display favorite button when the restaurant has been favorited", async () => {
      const button = component.shadowRoot!.querySelector("button")!;
      button.click();

      await waitUntil(() => component["hasFavorited"]);

      const mockSelector = '[aria-label="Favorite this restaurant"]';
      const mockButton = component.shadowRoot!.querySelector(mockSelector);
      mockButton?.dispatchEvent(new Event("click"));

      expect(mockButton).to.be.null;
    });
  });
});
