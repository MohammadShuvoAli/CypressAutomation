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

    it("file upload - rename", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        // rename file before uploading
        cy.get("#file-upload").should("be.visible").attachFile({filePath:'test2.pdf', fileName:'TestPDFFileCypress.pdf'})
        // click on upload button
        cy.get("#file-submit").should("be.visible").click()
        // file upload validation
        cy.get('h3').should('be.visible').and('contain', 'File Uploaded!')
        cy.get('#uploaded-files').should("contain","TestPDFFileCypress.pdf")
    })

    it("file upload - drag and drop", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        // upload file using drag and drop
        cy.get("#drag-drop-upload").attachFile("test1.pdf", {subjectType:'drag-n-drop'})
        // validate dropped file
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').should("be.visible").and("contain", "test1.pdf")
    })
})