import { ItemCardComponent } from "src/app/ui-components/item-card/item-card.component"
describe('item-card.component.cy.ts', () => {
  it('playground', () => {
    cy.mount(ItemCardComponent, {
      componentProperties: {
        name: 'Item 1',
        link: 'link/to/item1',
        image: './assets/images/ukulele.jpg',
        description: 'short desc for Item 1',
        price: 130
      }
    })
  })

  it.only('Image should have alt text', () => {
    const description = 'Short desc for Item 1 ';
    const price = 130
    const articleLabel = 'Short desc for Item 1  Product price is €130'

    cy.mount(ItemCardComponent, {
      componentProperties: {
        name: 'Item 1',
        link: 'link/to/item1',
        image: './assets/images/ukulele.jpg',
        description,
        price
      }
    })
    
    // Use element selectors based on accessibility
    const item = cy.get('a');

    item.should('have.attr', 'aria-label', articleLabel);
    item.contains('article', description).should('be.visible');

    // Once clicking on an article is implemented:
    // Something like this...
    // item.should('have.attr', 'aria-label', articleLabel).click();
  })
})