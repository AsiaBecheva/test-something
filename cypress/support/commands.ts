export {}

Cypress.Commands.add('login', (email, pass) => {
  cy.get('#username').clear().type(email)
  cy.get('#password').clear().type(pass)
  cy.get('#kc-login').click()
})