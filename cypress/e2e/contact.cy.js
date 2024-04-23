/// <reference types="cypress" />

describe("contact form", () => {
  // ______________________________________________________________________
  beforeEach(() => {
    cy.visit("http://localhost:5173/about");
  });

  it("should submit the form", () => {
    cy.get('[data-cy="contact-input-message"]').type("Hello World!");
    cy.get('[data-cy="contact-input-name"]').type("John Doe");
    cy.get('[data-cy="contact-input-email"]').type("test@example.com");
    cy.get('[data-cy="contact-btn-submit"]')
      .contains("Send Message")
      .and("not.have.attr", "disabled");
    cy.get('[data-cy="contact-btn-submit"]').click();
    cy.get('[data-cy="contact-btn-submit"]').contains("Sending...");
    cy.get('[data-cy="contact-btn-submit"]').should("have.attr", "disabled");
  });
});
