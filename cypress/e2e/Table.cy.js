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

    it('read all rows & columns data in the first page', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        // reading all cell data
        cy.get("table#productTable>tbody>tr")
        .each(($row, index, $rows) => {
            cy.wrap($row).within(() => {
                cy.get("td").each(($column, index, $columns) => {
                    cy.log($column.text())
                })
            })
        })
    })

    it.only('read all rows & columns data in the first page', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        
        let totalPages = 4;

        for(let p=1; p<=totalPages; p++){
            if(totalPages > 1){
                cy.log("Active page is " + p)
                cy.get("ul#pagination>li:nth-child("+ p +")").click()

                // reading all cell data
                cy.get("table#productTable>tbody>tr")
                .each(($row, index, $rows) => {
                    cy.wrap($row).within(() => {
                        cy.get("td").each(($column, index, $columns) => {
                            cy.log($column.text())
                        })
                    })
                })
            }
        }
    })
})