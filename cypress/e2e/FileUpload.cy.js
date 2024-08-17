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

    it("multiple file uploads", () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        // upload multiple files at once
        cy.get("#filesToUpload").attachFile(["test1.pdf", "test2.pdf"])
        cy.get("#main > div > p:nth-child(6) > strong").should("be.visible").and("contain", "Files You Selected:")
        // verifying file names
        cy.get("ul#fileList>li:nth-child(1)").contains("test1.pdf")
        cy.get("ul#fileList>li:nth-child(2)").contains("test2.pdf")
    })

    it("file upload - shadow dom", () => {
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")

        cy.get(".smart-browse-input", {includeShadowDom:true}).attachFile("test1.pdf")
        cy.get(".smart-item-name", {includeShadowDom:true}).contains("test1.pdf")
    })
})