describe("File Uploads", () => {
    it("single file upload", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        
        // upload file
        cy.get("#file-upload").should("be.visible").attachFile("test1.pdf")
        // click on upload button
        cy.get("#file-submit").should("be.visible").click()
        // file upload validation
        cy.get('h3').should('be.visible').and('contain', 'File Uploaded!')
    })
})