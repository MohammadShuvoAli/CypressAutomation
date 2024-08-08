describe('CSSLocator', () =>{
    it('csslocator', () => {
        cy.visit('https://tutorialsninja.com/demo/index.php')
        cy.get("input[placeholder='Search']").type("iphone") // id tag is optional
        cy.get(".fa.fa-search']").click()
        cy.get("div[id='content'] h1").contains("Search - iphone") // Assertion
    })
})