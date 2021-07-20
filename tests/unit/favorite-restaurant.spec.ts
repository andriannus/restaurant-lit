import { assert, expect, fixture, html } from "@open-wc/testing";

import { MOCK_RESTAURANT } from "./mocks/restaurant.mock";

import { FavoriteButtonComponent } from "@/app/shared/components/favorite-button";

describe("Favorite a restaurant", () => {
  let component: FavoriteButtonComponent;

  beforeEach(async () => {
    component = await fixture<FavoriteButtonComponent>(
      html`
        <x-favorite-button .restaurant=${MOCK_RESTAURANT}></x-favorite-button>
      `,
    );
  });

  afterEach(() => {
    component.remove();
  });

  it("should defined", () => {
    assert.instanceOf(component, FavoriteButtonComponent);
  });

  it("should render the button", () => {
    const button = component.shadowRoot!.querySelector("button")!;
    expect(button).to.exist;
  });

  it("should render the button with 'Favorite' as a name", () => {
    const expectedResult = "Favorite";
    const button = component.shadowRoot!.querySelector("button")!;

    expect(button.textContent).to.contain(expectedResult);
  });
});
