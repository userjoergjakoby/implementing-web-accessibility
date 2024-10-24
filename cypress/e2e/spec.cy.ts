import {injectAxe} from "cypress-axe";
import {Result} from "axe-core";

function terminalLog(violations: Result[]) {
 // cy.task('log', 'Violations:');
  console.log(violations);
}

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4201');
    injectAxe();

  })

  it('Let user know how many available items are', () => {
    // cy.get('input').should('have.attr', 'role', 'slider').should('be.visible');

      const slider = cy.get('input[type=range]');
      // There are 4 items available

      slider
        .should('have.attr', 'aria-valuenow', 150)
        .trigger('focus')
        //.invoke('val', 140)
        //.trigger('change')
        .type('{leftArrow}');
      cy.wait(2000);

      cy.get('[aria-live="polite"]').should('have.attr', 'aria-label', 'There are 4 items available')
      // .should('have.attr', 'aria-valuenow', 140)


    cy.checkA11y(undefined, undefined, terminalLog);

  });
})
