describe('Handle Tables', () => {
    it('check number of rows & columns', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        
        // Table rows
        cy.get("table#productTable>tbody>tr").should("have.length", "5");
        // Table columns
        cy.get("table#productTable>thead>tr>th").should("have.length", "4");

    })
})