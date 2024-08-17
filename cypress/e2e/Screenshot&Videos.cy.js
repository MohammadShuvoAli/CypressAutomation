describe("Capture Screenshot and videos", ()=>{
    it("Capture Screenshot",()=>{
        cy.visit("https://bangladesh.gov.bd/index.php")
        cy.screenshot("Homepage")

        cy.get("div[class='six columns logo']>a>img").screenshot("Logo")
    })
})