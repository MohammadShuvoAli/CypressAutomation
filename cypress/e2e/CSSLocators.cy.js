describe('CSSLocator', () =>{
    it('csslocator', () => {
        cy.visit('https://tutorialsninja.com/demo/index.php')
        cy.get("input[placeholder='Search']").type("iphone") // id tag is optional
        cy.get("button[class='btn btn-default btn-lg']").click()
        cy.get("div[id='content'] h1").contains("Search - iphone") // Assertion
    })
})