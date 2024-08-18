import Login from "../PageObjects/LoginPage"

describe("POM", ()=>{
    it("login test without POM", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php")

        // fill form
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        // login
        cy.get("button[type='submit']").click()
        //verify login
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").contains("Dashboard")
    })

    it("login test with POM", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php")

        const ln = new Login()
        ln.setUsername("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit()
        ln.verifyLogin()
    })

    it("data driven login test with POM", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php")

        cy.fixture("orangehrm").then((data) => {
            const ln = new Login()
            ln.setUsername(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ln.verifyLogin()
        })
    })
})