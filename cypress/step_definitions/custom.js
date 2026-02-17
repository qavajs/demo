import { Before } from "@qavajs/cypress-runner-adapter";

Before(function () {
    cy.session(Cypress._.uniqueId(), () => {});
});