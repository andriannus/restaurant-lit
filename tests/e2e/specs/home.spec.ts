describe("Home Page", () => {
  describe("when desktop view", () => {
    beforeEach(() => {
      cy.viewport("macbook-13");
    });

    it("should show `Explore Restaurant - We The Food` as title", () => {
      cy.visit("/");
      cy.title().should("eq", "Explore Restaurant - We The Food");
    });

    it("should show `Explore Restaurant` heading inside `home-page` element", () => {
      cy.visit("/");
      cy.get("home-page")
        .shadow()
        .find("h2")
        .should("contain.text", "Explore Restaurant");
    });
  });

  describe("when mobile view", () => {
    beforeEach(() => {
      cy.viewport("iphone-6");
    });

    it("should show `Explore Restaurant - We The Food` as title", () => {
      cy.visit("/");
      cy.title().should("eq", "Explore Restaurant - We The Food");
    });

    it("should show `Explore Restaurant` heading inside `home-page` element", () => {
      cy.visit("/");
      cy.get("home-page")
        .shadow()
        .find("h2")
        .should("contain.text", "Explore Restaurant");
    });
  });
});
