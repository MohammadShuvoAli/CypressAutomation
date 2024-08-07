describe('CSSLocator', () =>{
    it('csslocator', () => {
        cy.visit('https://demo.nopcommerce.com/')
        cy.get("#small-searchterms").type("iphone") // id tag is optional
        cy.get("button[type='submit']").click()
        cy.get("div[class='page-title'] h1").contains("Search") // Assertion
    })
})