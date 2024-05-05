/// <reference types="cypress" />

describe("contact form", () => {
  //NOTE:  ______________________________________________________________________
  beforeEach(() => {
    cy.visit("http://localhost:5173/about");
  });

  it("should submit the form", () => {
    cy.get('[data-cy="contact-input-message"]').type("Hello World!");
    cy.get('[data-cy="contact-input-name"]').type("John Doe");
    cy.get('[data-cy="contact-btn-submit"]').then((el) => {
      expect(el.attr("disabled")).to.be.undefined;
      expect(el.text()).to.eq("Send Message");
    });
    cy.get('[data-cy="contact-input-email"]').type("test@example.com{enter}");
    // cy.get('[data-cy="contact-btn-submit"]')
    //   .contains("Send Message")
    //   .and("not.have.attr", "disabled");
    cy.get('[data-cy="contact-btn-submit"]').as("submitBtn");
    // cy.get("@submitBtn").click();
    cy.get("@submitBtn").contains("Sending...");
    cy.get("@submitBtn").should("have.attr", "disabled");
  });

  it("should validate the form input", () => {
    cy.get('[data-cy="contact-btn-submit"]').click();
    cy.get('[data-cy="contact-btn-submit"]').then((el) => {
      expect(el).to.not.have.attr("disabled");
      expect(el.text()).to.not.eq("Sending...");
    });
    cy.get('[data-cy="contact-btn-submit"]').contains("Send Message");
    // ______________________________________________________________________
    cy.get('[data-cy="contact-input-message"]').focus().blur();
    cy.get('[data-cy="contact-input-message"]')
      .parent()
      .should((el) => {
        expect(el.attr("class")).to.contains("invalid");
      });
    // ______________________________________________________________________
    cy.get('[data-cy="contact-input-name"]').focus().blur();
    cy.get('[data-cy="contact-input-name"]')
      .parent()
      .should((el) => {
        expect(el.attr("class")).to.contains("invalid");
      });
    // ______________________________________________________________________
    cy.get('[data-cy="contact-input-email"]').focus().blur();
    cy.get('[data-cy="contact-input-email"]')
      .parent()
      .should((el) => {
        expect(el.attr("class")).to.contains("invalid");
      });
  });
});
