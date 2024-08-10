describe("Radio Button", ()=> {
    it("Handle Radio Button", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")

        // Visibility of Radio Button
        cy.get("label[for='gender']").should("be.visible")
        cy.get("input#male").should("be.visible")
        cy.get("input#female").should("be.visible")

        // Selecting Radio Button
        cy.get("input#male").check().should("be.checked")
        cy.get("input#female").should("not.be.checked")

        cy.wait(1000) // wait for 1 sec

        cy.get("input#female").check().should("be.checked")
        cy.get("input#male").should("not.be.checked")

    })

})