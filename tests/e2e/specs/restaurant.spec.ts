describe("Restaurant Page", () => {
  afterEach(() => {
    indexedDB.deleteDatabase("wethefood");
  });

  describe("when desktop view", () => {
    beforeEach(() => {
      cy.viewport("macbook-13");
      cy.visit("/");
      cy.get("home-page").shadow().find("x-card").first().click();
    });

    it("should show the favorite button when the restaurant has not been favorited before", () => {
      cy.get("restaurant-page")
        .find("x-favorite-button")
        .shadow()
        .find('[aria-label="Favorite this restaurant"]')
        .should("exist");
    });

    it("should not show the unfavorite button when the restaurant has not been favorited before", () => {
      cy.get("restaurant-page")
        .find("x-favorite-button")
        .shadow()
        .find('[aria-label="Unfavorite this restaurant"]')
        .should("not.exist");
    });

    it("should be able to favorite the restaurant", () => {
      cy.get("restaurant-page")
        .shadow()
        .find("x-favorite-button")
        .shadow()
        .find("button")
        .click();

      cy.visit("/favorite");
      cy.get("favorite-page").shadow().find("x-card").should("have.length", 1);
    });

    it("should be able to delete favorite the restaurant from the list", () => {
      cy.get("restaurant-page")
        .shadow()
        .find("x-favorite-button")
        .shadow()
        .find("button")
        .click();

      cy.visit("/favorite");
      cy.get("favorite-page").shadow().find("x-card").should("have.length", 1);

      cy.get("favorite-page").shadow().find("x-card").first().click();
      cy.get("restaurant-page")
        .shadow()
        .find("x-favorite-button")
        .shadow()
        .find("button")
        .click();

      cy.visit("/favorite");
      cy.get("favorite-page").shadow().find("x-card").should("not.exist");
    });
  });

  describe("when mobile view", () => {
    beforeEach(() => {
      cy.viewport("iphone-6");
      cy.visit("/");
      cy.get("home-page").shadow().find("x-card").first().click();
    });

    it("should show the favorite button when the restaurant has not been favorited before", () => {
      cy.get("restaurant-page")
        .find("x-favorite-button")
        .shadow()
        .find('[aria-label="Favorite this restaurant"]')
        .should("exist");
    });

    it("should not show the unfavorite button when the restaurant has not been favorited before", () => {
      cy.get("restaurant-page")
        .find("x-favorite-button")
        .shadow()
        .find('[aria-label="Unfavorite this restaurant"]')
        .should("not.exist");
    });

    it("should be able to favorite the restaurant", () => {
      cy.get("restaurant-page")
        .shadow()
        .find("x-favorite-button")
        .shadow()
        .find("button")
        .click();

      cy.get("restaurant-page")
        .find("x-favorite-button")
        .shadow()
        .find("button")
        .should("contain.text", "Favorited");
    });

    it("should be able to favorite the restaurant", () => {
      cy.get("restaurant-page")
        .shadow()
        .find("x-favorite-button")
        .shadow()
        .find("button")
        .click();

      cy.visit("/favorite");
      cy.get("favorite-page").shadow().find("x-card").should("have.length", 1);
    });

    it("should be able to delete favorite the restaurant from the list", () => {
      cy.get("restaurant-page")
        .shadow()
        .find("x-favorite-button")
        .shadow()
        .find("button")
        .click();

      cy.visit("/favorite");
      cy.get("favorite-page").shadow().find("x-card").should("have.length", 1);

      cy.get("favorite-page").shadow().find("x-card").first().click();
      cy.get("restaurant-page")
        .shadow()
        .find("x-favorite-button")
        .shadow()
        .find("button")
        .click();

      cy.visit("/favorite");
      cy.get("favorite-page").shadow().find("x-card").should("not.exist");
    });
  });
});
