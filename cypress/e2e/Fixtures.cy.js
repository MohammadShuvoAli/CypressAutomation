describe("Fixtures", () => {
    it("direct access", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture("orangehrm").then((data) => {
            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").contains(data.expected)
        })     
    })

    
})