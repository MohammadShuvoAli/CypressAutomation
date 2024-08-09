describe("Assertions", () => {
    it("Implicit Assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php")
        
        // should
        cy.url().should('include', 'orangehrmlive.com')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain', 'orangehrm')

    })
})