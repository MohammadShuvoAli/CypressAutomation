describe('XPathLocators', () => {
    it('find no of products', () => {
        cy.visit("https://tutorialsninja.com/demo/index.php")
        cy.xpath('//*[@class="product-thumb transition"]').should('have.length', 4)
    })
})
