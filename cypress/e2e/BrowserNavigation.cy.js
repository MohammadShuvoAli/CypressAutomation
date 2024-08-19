describe("Browser Navigation", () => {
    it("Navigation Test", () => {
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.title().should("eq", "Home Page");

        cy.get("a[id='ui-id-3'] span:nth-child(1)").click()
        cy.get(".base").contains("What's New")

        cy.go("back") // home
        cy.title().should("eq", "Home Page");

        cy.go("forward") // cheat page
        cy.get(".base").contains("What's New")
    })
})