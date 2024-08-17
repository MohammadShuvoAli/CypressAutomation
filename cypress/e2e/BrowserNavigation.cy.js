describe("Browser Navigation", () => {
    it("Navigation Test", () => {
        cy.visit("https://demo.opencart.com/")
        cy.title().should("eq", "Your Store");

        cy.get(".nav-link.dropdown-toggle.show").trigger("mouseover").click()
        cy.get("#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a").click()
        cy.get("div[id='content'] h2").contains("Desktops")

        cy.go("back") //
        cy.title().should("eq", "Your Store");

        cy.go("forward") // desktop
        cy.get("div[id='content'] h2").contains("Desktops")
    })
})