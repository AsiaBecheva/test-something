// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

export {}

import './commands'

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Gets a dom element by data-testid attribute
       * @param value attribute value
       */
      getByTestId(value: string): Chainable<JQuery<HTMLElement>>
    }
  }
}
