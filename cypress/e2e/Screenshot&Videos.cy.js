describe("Capture Screenshot and videos", ()=>{
    it.skip("Capture Screenshot",()=>{
        cy.visit("https://demo.opencart.com/");
        cy.wait(5000);
        cy.screenshot("Homepage");
        cy.get("#logo > a > .img-fluid").screenshot("Logo");
    });
});