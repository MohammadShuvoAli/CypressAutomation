describe("Alerts", () => {
    // Javascript Alert: It wil have some text and 'OK' button
    it("javascript alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()
        // js alert validation
        cy.on("window:alert",(message) => {
            expect(message).to.contains("I am a JS Alert")
        })

        // alert window automatically closed by cypress
        cy.get("#result").should("have.text", "You successfully clicked an alert")
    })
})