import { Before, After } from '@qavajs/cypress-runner-adapter';

Before(function () {
    cy.session(Cypress._.uniqueId(), () => {});
});

After(function () {
    cy.screenshot();
});