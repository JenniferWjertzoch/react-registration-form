/// <reference types="cypress" />

describe('Registration Form', () => {
  it('submits the form successfully', () => {
    cy.visit('http://localhost:3000');

    cy.get('#email')
      .type('test@example.com')

    cy.get('#password')
      .type('TestPassword1$')

      cy.get('input[name="email"]').type('invalid-email').blur();

  });

  it('displays an error message when the email is invalid', () => {
    cy.visit('http://localhost:3000');

    cy.get('#email').type('invalid-email');

    cy.get('input[name="email"]').type('invalid-email').blur();

  });

  it('displays an error message when the password is too short', () => {
    cy.visit('http://localhost:3000');

    cy.get('#password').type('short');

    cy.get('input[name="password"]').type('invalid-password').blur();

  });
});
