describe("Browser Navigation", () => {
    it("Navigation Test", () => {
        cy.visit("https://www.globalsqa.com/demo-site/")
        cy.wait(5000)
        cy.title().should("eq", "Testing Demo Site | Practice Website For Automation - Global SQA");

        cy.get("li[id='menu-item-6898'] a").click()
        cy.get("div[class='page_heading'] h1").contains("List Of CheatSheets")

        cy.go("back") // home
        cy.title().should("eq", "Testing Demo Site | Practice Website For Automation - Global SQA");

        cy.go("forward") // cheat page
        cy.get("div[class='page_heading'] h1").contains("List Of CheatSheets")
    })
})