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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import "cypress-file-upload"

Cypress.Commands.add('compute', () => {
    let start = new Date().getTime();
    cy.get("#ReportStatus", { timeout: 4000 }).should($el => {
      let now = new Date().getTime();
      if (now - start < 1000) {
        expect($el).to.be.visible
      } else {
        expect($el).to.not.be.visible
      }
    })
  
    cy.get("#ReportStatus", { timeout: 120000 }).should("not.be.visible")
  })
  
  Cypress.Commands.add('start', () => {
    cy.visit("http://localhost:8501/");
    cy.compute()
    cy.get(".decoration").invoke("css", "display", "none");
  })