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

    it.skip("auto suggest dropdown", () => {
        cy.visit("https://www.wikipedia.org")

        cy.get("#searchInput").type("Dhaka")
        cy.get(".suggestion-title").contains("Dhaka Metro Rail").click()

        cy.get('.mw-page-title-main').should("have.text", "Dhaka Metro Rail")
    })

    it("dynamic dropdown", () => {
        cy.visit("https://www.google.com")

        cy.get("input[name='q']").type("cypress automation")
        cy.get("div.wM6W7d").each(($el, index, $list) => {
            if($el.text()=="cypress automation tool"){
                cy.wrap($el).click()
            }
        })
        
    })
})