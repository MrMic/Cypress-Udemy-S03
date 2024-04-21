/// <reference types="cypress" />

describe("page navigation", () => {
  // ______________________________________________________________________
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should navigate between pages", () => {
    cy.get('[data-cy="header-about-link"]').click();
    cy.location("pathname").should("eq", "/about"); // => About Page
    cy.go("back");
    cy.location("pathname").should("eq", "/"); // => Home Page
    cy.get('[data-cy="header-about-link"]').click();
    cy.get('[data-cy="header-home-link"]').click();
    cy.location("pathname").should("eq", "/"); // => Home Page
  });
});
