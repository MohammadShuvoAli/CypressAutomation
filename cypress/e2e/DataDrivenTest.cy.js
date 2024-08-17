describe("Data Driven Test", () => {
    it("data driven test", () => {
        cy.fixture("orangehrmLogin").then((data) => {
            data.foreach((userdata) => {
                cy.get("input[placeholder='Username']").type(userdata.username)
                cy.get("input[placeholder='Password']").type(userdata.password)
                cy.get("button[type='submit']").click()
            })
        })
    })
})