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
        .and('contain', 'HRM') // contain case sensitive

        cy.get('.orangehrm-login-branding > img').should('be.visible') // logo visible
        .and('exist') // logo exist

        cy.xpath("//a").should('have.length', '5') // no of links

        // fill form
        cy.get("input[placeholder='username']").type("Admin")
        cy.get("input[placeholder='password']").type("admin123")
        // login
        cy.get("button[type='submit']").click()

        // logout
        cy.get('.oxd-userdropdown-tab').click()
        cy.wait(1000); // Waits for 1 seconds
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    })

    it("Explicit Assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php")

        // fill form
        cy.get("input[placeholder='username']").type("Admin")
        cy.get("input[placeholder='password']").type("admin123")
        // login
        cy.get("button[type='submit']").click()

        let expectedText = "Dashboard"

        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").then((x) => {
            let actualText = x.text()

            // BDD Style
            expect(actualText).to.equal(expectedText)
            expect(actualText).to.not.equal("Portal")

            // TDD Style
            assert.equal(expectedText, actualText)
            assert.notEqual(expectedText, "Portal")
        })
    })
})