describe("Capture Screenshot and videos", ()=>{
    it("Capture Screenshot",()=>{
        cy.visit("https://demo.opencart.com/");
        cy.wait(5000);
        cy.screenshot("Homepage");
        cy.get("#logo > a > .img-fluid").screenshot("Logo");
    });

    it("Automatically Capture Screenshot & Video on Test Fail",()=>{
        cy.visit("https://demo.opencart.com/");
        cy.wait(5000);
        
        cy.get(".nav > :nth-child(1) > .dropdown-toggle").trigger("mouseover").click()
        cy.get("#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a").click()
        cy.get("div[id='content'] h2").contains("Software")
    });
});