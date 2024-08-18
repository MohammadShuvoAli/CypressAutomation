describe("POM", ()=>{
    it("login test with POM", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php")

        // fill form
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        // login
        cy.get("button[type='submit']").click()
    })
})