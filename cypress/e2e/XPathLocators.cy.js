require('cypress-xpath');

describe('XPathLocators', () => {
    it('find no of products', () => {
        cy.visit("https://demo.nopcommerce.com")
        cy.xpath("//*[@data-productid]").should('have.length', 4)
    })
})
