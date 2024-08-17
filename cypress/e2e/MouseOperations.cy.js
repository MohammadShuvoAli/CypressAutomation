describe("Mouse Operations", () => {
    it("Mouse Hover", () => {
        cy.visit("https://demo.opencart.com/")
        cy.get("div#narbar-menu>ul>li:nth-child(3)").trigger("mouseover")
    })
})