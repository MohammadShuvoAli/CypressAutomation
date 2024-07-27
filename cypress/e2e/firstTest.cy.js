describe('Test Suite', () => {

  it('Test 1 - Positive', () => {
    cy.visit('https://www.google.com')
    cy.title().should('eq', 'Google')
  })

  it('Test 2 - Negative', function() {
    cy.visit('https://www.google.com')
    cy.title().should('eq', 'Facebook')
  })

})