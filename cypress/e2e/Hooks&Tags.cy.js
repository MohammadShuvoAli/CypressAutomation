/*
Types of Hooks in Cypress
Before: execute before starting all tests
After: execute completing starting all tests
BeforeEach: execute before every test
AfterEach: execute after every test
*/

describe('Cypress Hooks & Tags', () => {

    // Runs once before all tests in the block
    before(() => {
        cy.log('This runs once before all tests');
        // Example: Set up test data or initialize environment
    });

    // Runs once after all tests in the block
    after(() => {
        cy.log('This runs once after all tests');
        // Example: Clean up test data or reset environment
    });

    // Runs before each test in the block
    beforeEach(() => {
        cy.log('This runs before each test');
        // Example: Log in to the application or reset test state
    });

    // Runs after each test in the block
    afterEach(() => {
        cy.log('This runs after each test');
        // Example: Log out of the application or capture logs
    });

    it('Test Case 1', () => {
        cy.log('Executing Test Case 1');
        // Your test code for Test Case 1
    });

    it('Test Case 2', () => {
        cy.log('Executing Test Case 2');
        // Your test code for Test Case 2
    });

});
