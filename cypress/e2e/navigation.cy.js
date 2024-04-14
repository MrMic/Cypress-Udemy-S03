/// <reference types="cypress" />

describe("page navigation", () => {
  // ______________________________________________________________________
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should navigate between pages", () => {
    cy.get('[data-cy="header-about-link"]').click();
  });
});
