describe("Alerts", () => {
    // Javascript Alert: It wil have some text and 'OK' button
    it("javascript alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()
        // js alert validation
        cy.on("window:alert",(message) => {
            expect(message).to.contains("I am a JS Alert")
        })

        // alert window automatically closed (Pressing OK) by cypress
        cy.get("#result").should("have.text", "You successfully clicked an alert")
        
    })

    // Javascript Confirm Alert: It will have some text with 'OK' and 'Cancel' buttons
    it("javascript confirm alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        // js alert validation
        cy.on("window:confirm",(message) => {
            expect(message).to.contains("I am a JS Confirm")
        })

        // alert window automatically closed (Pressing Confirm) by cypress
        cy.get("#result").should("have.text", "You clicked: Ok")

    })

    it("javascript confirm alert - Cancel", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        // js alert validation
        cy.on("window:confirm",(message) => {
            expect(message).to.contains("I am a JS Confirm")
        })

        // close alert pressing cancel button
        cy.on("window:confirm", ()=> false)

        // alert window automatically closed (Pressing Confirm) by cypress
        cy.get("#result").should("have.text", "You clicked: Cancel")

    })
})