describe("Mouse Operations", () => {
    it("Mouse Hover", () => {
        cy.visit("https://demo.opencart.com/")
        // drop down menu option should not be visible
        cy.get("#narbar-menu > ul > li:nth-child(3) > div > div > ul > li:nth-child(2) > a").should("not.be.visible")
        // hover over menu
        cy.get("div#narbar-menu>ul>li:nth-child(3)").trigger("mouseover").click()
        // option should be present
        cy.get("#narbar-menu > ul > li:nth-child(3) > div > div > ul > li:nth-child(2) > a").should("be.visible")
    })

    it("Mouse Right Click - Method 1", () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get("span[class='context-menu-one btn btn-neutral']").trigger("contextmenu")
        cy.get('.context-menu-icon-edit > span').should("be.visible")
        cy.get(".context-menu-icon-quit").click()
    })
})