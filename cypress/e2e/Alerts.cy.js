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

    // Javascript Prompt Alert: It will have a textbox for user input with 'OK' button 
    it("javascript prompt alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        cy.window().then((win) => {
            cy.stub(win, "prompt").returns("Hi! I am Shuvo")
        })

        // alert window automatically closed (Pressing Confirm) by cypress
        cy.get("button[onclick='jsPrompt()']").click()

        cy.get("#result").should("have.text", "You entered: Hi! I am Shuvo")
    })

    it("javascript prompt alert - cancel", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    
        // Handle the prompt and simulate pressing "Cancel"
        cy.window().then((win) => {
            cy.stub(win, "prompt").returns(null); // Simulate clicking "Cancel"
        });
    
        // Trigger the prompt
        cy.get("button[onclick='jsPrompt()']").click();
    
        // Verify the result
        cy.get("#result").should("have.text", "You entered: null")
    })

    it("authenticated alert - method 1", () => {
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth: {username: "admin", password:"admin"}})

        cy.get("div[class='example'] p").should("have.contain", "Congratulations!")
    })

    it("authenticated alert - method 2", () => {
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")

        cy.get("div[class='example'] p").should("have.contain", "Congratulations!")
    })
})