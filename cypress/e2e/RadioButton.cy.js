describe("Radio Button", ()=> {
    it("Handle Radio Button", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get("label[for='gender']").should("be.visible")
        cy.get("label[for='male']").should("be.visible")
        cy.get("label[for='female']").should("be.visible")

    })

})