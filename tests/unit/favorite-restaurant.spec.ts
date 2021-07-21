import {
  assert,
  expect,
  fixture,
  fixtureCleanup,
  html,
} from "@open-wc/testing";

import { MOCK_RESTAURANT } from "./mocks/restaurant.mock";

import { FavoriteService } from "@/app/favorite/favorite.service";
import { FavoriteButtonComponent } from "@/app/shared/components/favorite-button";

describe("Favorite a restaurant", () => {
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

  it("should show the favorite button when the movie has not been favorited before", () => {
    const expectedResult = "Favorite";
    const button = component.shadowRoot!.querySelector("button")!;

    expect(button.textContent).to.contain(expectedResult);
  });

  it("should not show the unfavorite button when the movie has not been favorited before", async () => {
    const button = component.shadowRoot!.querySelector("button.is-active")!;
    expect(button).to.be.null;
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
