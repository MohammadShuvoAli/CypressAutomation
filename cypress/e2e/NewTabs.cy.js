describe("Handle New Tabs", () => {
    it("new tab handle - method 1", () => {
        cy.visit("https://the-internet.herokuapp.com/windows")
        // removing target attribute before clicking
        cy.get("a[href='/windows/new']").invoke("removeAttr", "target").click()

        cy.url().should("include", "https://the-internet.herokuapp.com/windows/new")

        // going back to previous page
        cy.go("back")
    })

    it("new tab handle - method 2", () => {
        // for this parent and child window both needs to same website/domain
        cy.visit("https://the-internet.herokuapp.com/windows")
        
        cy.get("a[href='/windows/new']").then((element) => {
            let url = element.prop("href")
            cy.visit(url)
        })

        cy.url().should("include", "https://the-internet.herokuapp.com/windows/new")

        cy.wait(5000)

        // going back to previous page
        cy.go("back")
    })
})