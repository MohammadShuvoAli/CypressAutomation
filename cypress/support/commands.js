// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="Cypress"/> // for cypress
/// <reference types="cypress-xpath"/> // for xpath

Cypress.Commands.add('getIframe', (iframe) => {
    // Get the iframe and access its body
    return cy.get(iframe).its("0.contentDocument.body").should("be.visible")
        .then((body) => {
            // Change the contenteditable attribute to true
            cy.wrap(body).invoke('attr', 'contenteditable', 'true');
            return cy.wrap(body); // Return the wrapped body to continue chaining
        });
});

// custom commad for linktext like selenium
Cypress.Commands.add('linkText', (label) => {
    cy.get('a').contains(label);
})