describe("Checkbox", ()=> {
    it("Handle Checkbox", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")

        // checking visibility of label
        cy.get("label[for='days']").should("be.visible")
        
        // select single checkbox
        cy.get("input#friday").check().should("be.checked")

        // unselect checkbox
        //cy.wait(1000) // wait for 1 sec
        cy.get("input#friday").uncheck().should("not.be.checked")

        // selecting all checkbox
        cy.get("input.form-check-input[type=checkbox]").check().should("be.checked")

        // unselect all checkbox
        cy.get("input.form-check-input[type=checkbox]").uncheck().should("not.be.checked")

        // select first checkbox
        cy.get("input.form-check-input[type=checkbox]").first().check().should("be.checked")

        // select last checkbox
        cy.get("input.form-check-input[type=checkbox]").last().check().should("be.checked")

    })
})