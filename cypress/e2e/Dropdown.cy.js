describe("Handle Dropdown", () => {
    it.skip("dropdown with select", () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get("#zcf_address_country")
        .select("Uganda")
        .should("have.value", "Uganda")
    })

    it.skip("dropdown without select", () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get("#select2-billing_country-container").click()
        cy.get("input[role='combobox']").type("Uganda").type("{enter}")
        cy.get("#select2-billing_country-container").should("have.text", "Uganda")
    })

    it("auto suggest dropdown", () => {
        cy.visit("https://www.wikipedia.org")

        cy.get("#searchInput").type("Dhaka")
        cy.get(".suggestion-title").contains("Dhaka Metro Rail").click()

        cy.get('.mw-page-title-main').should("have.text", "Dhaka Metro Rail")
    })
})