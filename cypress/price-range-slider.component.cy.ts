import { PriceRangeSliderComponent } from "src/app/ui-components/price-range-slider/price-range-slider.component"

describe('price-range-slider.component.cy.ts', () => {
  it('playground', () => {
    cy.mount(PriceRangeSliderComponent)
  })
  it.only('Testing accessibility in Input type=range component', () => {
    cy.mount(PriceRangeSliderComponent, {
      componentProperties: {
        valueMin: '10',
        valueMax: '200'
      }
    })

    // Use element selectors based on accessibility
    // W3C Basic Checklist: https://www.w3.org/WAI/ARIA/apg/patterns/slider/
    const slider = cy.get('input').should('be.visible');

    slider.should('have.attr', 'role', 'slider');
    slider.should('have.attr', 'aria-valuenow', '160');
    slider.should('have.attr', 'aria-labelledby', 'price-range-label');

  })
})