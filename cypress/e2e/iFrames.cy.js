describe("Handling iFrame", () => {
    it("handling iframe with code", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");

        // Access the iframe's body
        cy.get("#mce_0_ifr").its("0.contentDocument.body").should("not.be.empty")
            .then(cy.wrap)
            .then((body) => {
                // Change the contenteditable attribute to true
                cy.wrap(body).invoke('attr', 'contenteditable', 'true');
                
                // Clear and type into the now editable body
                cy.wrap(body).clear().type("Hi! I am Shuvo. {ctrl+a}");
            });
    });

    it("handling iframe - custom command", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");

        cy.getIframe("#mce_0_ifr").clear().type("Hi! I am Shuvo.");
    });

    it("handling iframe - cypress-iframe plugin", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");

        cy.frameLoaded("#mce_0_ifr"); // load the frame
        cy.iframe("#mce_0_ifr").clear().type("Hi! I am Shuvo.")

    });
});
