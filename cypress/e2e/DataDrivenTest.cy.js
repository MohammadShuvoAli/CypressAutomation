describe("Data Driven Test", () => {
    it("data driven test", () => {
        cy.fixture("orangehrmLogin").then((data) => {

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            data.forEach((userdata) => {
                cy.get("input[placeholder='Username']").type(userdata.username)
                cy.get("input[placeholder='Password']").type(userdata.password)
                cy.get("button[type='submit']").click()

                if(userdata.username == "Admin" && userdata.password == "admin123"){
                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").contains(userdata.expected) 
                    cy.get('.oxd-userdropdown-tab').click()
                    cy.wait(1000); // Waits for 1 seconds
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                }
                else{
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").contains(userdata.expected)
                }
                
            })
        })
    })
})