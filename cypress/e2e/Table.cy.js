describe('Handle Tables', () => {
    it('check number of rows & columns', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        
        // Table rows
        cy.get("table#productTable>tbody>tr").should("have.length", "5");
        // Table columns
        cy.get("table#productTable>thead>tr>th").should("have.length", "4");
    })

    it('check cell data from specific row & column', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        // specific cell data
        cy.get("table#productTable>tbody>tr:nth-child(4)>td:nth-child(1)").contains("4")
        cy.get("table#productTable>tbody>tr:nth-child(4)>td:nth-child(2)").contains("Product 4")
        cy.get("table#productTable>tbody>tr:nth-child(4)>td:nth-child(3)").contains("$7.99")
    })
})