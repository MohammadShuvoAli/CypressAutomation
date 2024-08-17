describe("Custom Commands", () => {
    it("linktext custom command", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.wait(5000)
        cy.linkText("OrangeHRM, Inc").click()
    })
})