describe("Mouse Operations", () => {
    it("Mouse Hover", () => {
        cy.visit("https://magento.softwaretestingboard.com/")
        // drop down menu option should not be visible
        cy.get("a[id='ui-id-9'] span:nth-child(2)").should("not.be.visible")
        // hover over menu
        cy.get("#ui-id-4").trigger("mouseover")
        // option should be present
        cy.get("a[id='ui-id-9'] span:nth-child(2)").should("be.visible")
    })

    it("Mouse Right Click - Method 1", () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get("span[class='context-menu-one btn btn-neutral']").trigger("contextmenu")
        cy.get('.context-menu-icon-edit > span').should("be.visible")
        cy.get(".context-menu-icon-quit").click()
    })

    it("Mouse Right Click - Method 2", () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get("span[class='context-menu-one btn btn-neutral']").rightclick()
        cy.get('.context-menu-icon-edit > span').should("be.visible")
        cy.get(".context-menu-icon-quit").click()
    })

    it("Double Click - Method 1", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        // check heading
        cy.get("div[id='HTML10'] h2[class='title']").should("be.visible").contains("Double Click")
        // check first field value
        cy.get('#field1').should("be.visible").should("have.value", "Hello World!")
        // double click on button
        cy.get("button[ondblclick='myFunction1()']").trigger("dblclick").click()
        // check if values has been copied to field 2
        cy.get('#field2').should("be.visible").should("have.value", "Hello World!")
    })

    it("Double Click - Method 2", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        // check heading
        cy.get("div[id='HTML10'] h2[class='title']").should("be.visible").contains("Double Click")
        // check first field value
        cy.get('#field1').should("be.visible").should("have.value", "Hello World!")
        // double click on button
        cy.get("button[ondblclick='myFunction1()']").dblclick()
        // check if values has been copied to field 2
        cy.get('#field2').should("be.visible").should("have.value", "Hello World!")
    })

    it("Drag and Drop using plugin", () => {
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

        //cy.get("#box5").drag("#box105")

        cy.get("#box5").drag("#box105", {force:true})
    })

    it("Scrolling Page", () => {
        cy.visit("https://en.wikipedia.org/wiki/Bangladesh")

        // scroll down
        cy.get("#Corruption").scrollIntoView({duration:3000}).should("be.visible").contains("Corruption")

        // scroll up 
        cy.get("#War_of_Independence").scrollIntoView({duration:3000}).should("be.visible").contains("War of Independence")
    })
})