describe("Assertions", () => {
    it("Implicit Assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php")
        
        // should assertions
        // cy.url().should('include', 'orangehrmlive.com')
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain', 'orangehrm')

        /*cy.url().should('include', 'orangehrmlive.com')
        .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain', 'orangehrm')*/

        // and assertions
        cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrm')
        .and('not.contain', 'redhrm')

        cy.title().should('include', 'Orange')
        .and('eq', 'OrangeHRM')
        .and('contain', 'hrm')

    })
})