describe("Browser Navigation", () => {
    it("Navigation Test", () => {
        cy.visit("https://demo.opencart.com/")
        cy.wait(5000)
        cy.title().should("eq", "Your Store");

        cy.get(".nav > :nth-child(1) > .dropdown-toggle").trigger("mouseover").click()
        cy.get("#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a").click()
        cy.get("div[id='content'] h2").contains("Desktops")

        cy.go("back") // home
        cy.title().should("eq", "Your Store");

        cy.go("forward") // desktop
        cy.get("div[id='content'] h2").contains("Desktops")
    })
})