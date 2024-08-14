describe("Handle New Tabs", () => {
    it("new tab handle - method 1", () => {
        cy.visit("https://the-internet.herokuapp.com/windows")
        // removing target attribute before clicking
        cy.get("a[href='/windows/new']").invoke("removeAttr", "target").click()

        cy.url().should("include", "https://the-internet.herokuapp.com/windows/new")

        // going back to previous page
        cy.go("back")
    })
})