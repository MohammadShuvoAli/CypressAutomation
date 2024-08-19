describe("Capture Screenshot and videos", ()=>{
    it("Capture Screenshot",()=>{
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.wait(5000);
        cy.screenshot("Homepage");
        cy.get("body > div.page-wrapper > header > div.header.content > a > img").screenshot("Logo");
    });

    it("Automatically Capture Screenshot & Video on Test Fail",()=>{
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.wait(5000);
        
        cy.get("a[id='ui-id-5'] span:nth-child(1)").trigger("mouseover").click()
        cy.get(".base").contains("Software")
    });
});