describe("Handle Dropdown", () => {
    it("dropdown with select", () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get("#zcf_address_country")
        .select("Uganda")
        .should("have.value", "Uganda")
    })
})