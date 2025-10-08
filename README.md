# Cypress Automation Framework

![Cypress](https://img.shields.io/badge/Cypress-13.13.1-green.svg)
![Mocha](https://img.shields.io/badge/Mocha-10.6.0-brown.svg)
![Node](https://img.shields.io/badge/Node.js-Required-brightgreen.svg)
![License](https://img.shields.io/badge/License-ISC-blue.svg)

A comprehensive end-to-end test automation framework built with Cypress for testing web applications. This framework demonstrates various Cypress features, best practices, and real-world testing scenarios with detailed HTML reporting capabilities.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Test Suites Overview](#test-suites-overview)
- [Custom Commands](#custom-commands)
- [Page Object Model](#page-object-model)
- [Fixtures & Test Data](#fixtures--test-data)
- [Reporting](#reporting)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

---

## 🎯 Overview

This Cypress automation framework is designed as a comprehensive testing solution that covers various aspects of web automation testing. It includes examples of:

- Different types of locators (CSS, XPath)
- Element interactions (clicks, typing, selecting)
- Assertions (implicit and explicit)
- Data-driven testing
- Page Object Model (POM) implementation
- Custom commands
- File uploads and downloads
- iFrame handling
- Alert and popup handling
- Screenshot and video recording
- HTML report generation

## ✨ Features

### Core Capabilities

- **Multiple Locator Strategies**: CSS Selectors and XPath support
- **Comprehensive Element Interactions**: 
  - Text input and validation
  - Checkbox and radio button handling
  - Dropdown selections
  - Mouse operations (hover, click, drag & drop)
  - Double click and right-click operations
- **Advanced Testing Features**:
  - Data-driven testing with JSON fixtures
  - Page Object Model implementation
  - Custom command creation
  - Test hooks (before, after, beforeEach, afterEach)
  - Browser navigation testing
- **File Operations**:
  - File upload functionality
  - File download verification
- **Special Element Handling**:
  - iFrame interactions
  - Alert/popup handling
  - Table data extraction and validation
  - New tab/window handling
- **Reporting & Debugging**:
  - Automatic screenshot capture on failure
  - Video recording of test execution
  - Beautiful HTML reports with Mochawesome
  - Visual debugging capabilities

### Installed Plugins & Libraries

- **cypress** (v13.13.1) - Modern end-to-end testing framework
- **mocha** (v10.6.0) - Test framework
- **cypress-xpath** (v2.0.1) - XPath selector support
- **cypress-iframe** (v1.0.1) - iFrame handling utilities
- **cypress-file-upload** (v5.0.8) - File upload testing
- **@4tw/cypress-drag-drop** (v2.2.5) - Drag and drop functionality
- **cypress-mochawesome-reporter** (v3.8.2) - HTML report generation

---

## 📦 Prerequisites

Before setting up this project, ensure you have the following installed:

- **Node.js** (v14 or higher recommended)
- **npm** (v6 or higher) or **yarn**
- **Git** (for cloning the repository)
- A modern web browser (Chrome, Firefox, Edge, or Electron)

### System Requirements

- **Operating System**: Windows, macOS, or Linux
- **RAM**: Minimum 4GB (8GB recommended)
- **Disk Space**: At least 500MB free space for dependencies

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/MohammadShuvoAli/CypressAutomation.git
cd CypressAutomation
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

This will install all required dependencies including:
- Cypress framework
- All plugins and utilities
- Mocha test runner
- Reporter dependencies

### 3. Verify Installation

```bash
npx cypress verify
```

This command verifies that Cypress is properly installed and can run on your system.

---

## 📁 Project Structure

```
CypressAutomation/
│
├── cypress/
│   ├── downloads/                    # Downloaded files during test execution
│   │   └── downloads.htm
│   │
│   ├── e2e/                          # End-to-end test files
│   │   ├── Alerts.cy.js              # Alert handling tests
│   │   ├── Assertions.cy.js          # Assertion examples (implicit & explicit)
│   │   ├── BrowserNavigation.cy.js   # Browser navigation tests
│   │   ├── Checkbox.cy.js            # Checkbox interaction tests
│   │   ├── CSSLocators.cy.js         # CSS locator strategies
│   │   ├── CustomCommands.cy.js      # Custom command usage examples
│   │   ├── DataDrivenTest.cy.js      # Data-driven testing with fixtures
│   │   ├── Dropdown.cy.js            # Dropdown selection tests
│   │   ├── FileUpload.cy.js          # File upload functionality tests
│   │   ├── firstTest.cy.js           # Basic test examples
│   │   ├── Fixtures.cy.js            # Fixture data usage
│   │   ├── Hooks&Tags.cy.js          # Mocha hooks implementation
│   │   ├── iFrames.cy.js             # iFrame handling tests
│   │   ├── LoginWithPOM.cy.js        # Page Object Model login tests
│   │   ├── MouseOperations.cy.js     # Mouse operation tests
│   │   ├── NewTabs.cy.js             # New tab/window handling
│   │   ├── RadioButton.cy.js         # Radio button tests
│   │   ├── ScreenshotAndVideos.cy.js # Screenshot & video capture
│   │   ├── Table.cy.js               # Table data handling
│   │   └── XPathLocators.cy.js       # XPath locator strategies
│   │
│   ├── fixtures/                     # Test data files
│   │   ├── example.json              # Example fixture data
│   │   ├── orangehrm.json            # OrangeHRM login credentials
│   │   ├── orangehrmLogin.json       # Multiple user login data
│   │   ├── test1.pdf                 # Sample PDF for upload tests
│   │   └── test2.pdf                 # Sample PDF for upload tests
│   │
│   ├── PageObjects/                  # Page Object Model classes
│   │   └── LoginPage.js              # Login page object
│   │
│   ├── reports/                      # Generated HTML reports
│   │   └── html/
│   │       ├── index.html            # Main report file
│   │       ├── assets/               # Report styling and scripts
│   │       ├── screenshots/          # Test failure screenshots
│   │       └── videos/               # Test execution videos
│   │
│   ├── screenshots/                  # Auto-captured screenshots
│   │
│   ├── support/                      # Support files and configurations
│   │   ├── commands.js               # Custom command definitions
│   │   └── e2e.js                    # Global configuration & imports
│   │
│   └── videos/                       # Auto-recorded test videos
│
├── node_modules/                     # Project dependencies
│
├── cypress.config.js                 # Cypress configuration file
├── package.json                      # Project metadata and dependencies
├── package-lock.json                 # Locked dependency versions
└── README.md                         # Project documentation (this file)
```

### Directory Descriptions

#### `/cypress/e2e/`
Contains all end-to-end test specifications. Each file focuses on specific testing scenarios or features.

#### `/cypress/fixtures/`
Stores test data in JSON format for data-driven testing. Fixtures help separate test data from test logic.

#### `/cypress/PageObjects/`
Contains Page Object Model classes that encapsulate page-specific elements and actions for better maintainability.

#### `/cypress/support/`
- **commands.js**: Custom Cypress commands for reusable test actions
- **e2e.js**: Global configuration, plugin imports, and setup code

#### `/cypress/screenshots/` & `/cypress/videos/`
Automatically generated folders for storing test execution artifacts (screenshots on failure, videos of all tests).

#### `/cypress/reports/`
Contains generated HTML reports with detailed test execution results, including screenshots and videos.

---

## ⚙️ Configuration

### Cypress Configuration (`cypress.config.js`)

```javascript
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',  // HTML report generation
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    video: true,                             // Enable video recording
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    screenshotOnRunFailure: true,            // Auto-capture on failure
    videoCompression: 0,                     // No compression for clarity
  },
});
```

### Key Configuration Options

| Option | Value | Description |
|--------|-------|-------------|
| `reporter` | cypress-mochawesome-reporter | Generates beautiful HTML reports |
| `video` | true | Records video of test execution |
| `screenshotOnRunFailure` | true | Captures screenshot when test fails |
| `videoCompression` | 0 | No compression (higher quality) |
| `screenshotsFolder` | cypress/screenshots | Screenshot storage location |
| `videosFolder` | cypress/videos | Video storage location |

### Customizing Configuration

You can modify `cypress.config.js` to add:
- Base URL for your application
- Viewport dimensions
- Timeout values
- Environment variables
- Browser-specific settings

Example:
```javascript
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://your-app.com',
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 10000,
    env: {
      username: 'testuser',
      password: 'testpass'
    }
  }
});
```

---

## 🏃 Running Tests

### Interactive Mode (Cypress Test Runner)

Open Cypress Test Runner with a graphical interface:

```bash
npx cypress open
```

This launches the Cypress UI where you can:
- Select specific test files to run
- Watch tests execute in real-time
- Debug tests with time-travel
- See command logs and network requests
- Switch between browsers

### Headless Mode (Command Line)

Run all tests in headless mode:

```bash
npx cypress run
```

### Run Specific Test File

```bash
npx cypress run --spec "cypress/e2e/Assertions.cy.js"
```

### Run Tests in Specific Browser

```bash
npx cypress run --browser chrome
npx cypress run --browser firefox
npx cypress run --browser edge
```

### Run Tests with Tags

Run specific test suites using grep patterns (requires cypress-grep plugin):

```bash
npx cypress run --env grep="smoke"
```

### Additional Run Options

```bash
# Run in headed mode
npx cypress run --headed

# Run without video recording
npx cypress run --config video=false

# Run with custom viewport
npx cypress run --config viewportWidth=1920,viewportHeight=1080

# Run in parallel (requires Cypress Dashboard)
npx cypress run --parallel --record --key=your_key
```

### NPM Scripts

You can add custom scripts to `package.json` for easier execution:

```json
{
  "scripts": {
    "cy:open": "cypress open",
    "cy:run": "cypress run",
    "cy:chrome": "cypress run --browser chrome",
    "cy:firefox": "cypress run --browser firefox",
    "test": "cypress run --spec 'cypress/e2e/**/*.cy.js'"
  }
}
```

Then run:
```bash
npm run cy:open
npm run cy:run
npm run cy:chrome
```

---

## 📝 Test Suites Overview

### 1. **firstTest.cy.js**
**Purpose**: Basic Cypress test structure demonstration

**Features**:
- Simple positive and negative test cases
- Page visit and title assertion
- Introduction to Cypress syntax

**Example**:
```javascript
it('Test 1 - Positive', () => {
  cy.visit('https://www.google.com')
  cy.title().should('eq', 'Google')
})
```

---

### 2. **Assertions.cy.js**
**Purpose**: Comprehensive assertion examples

**Features**:
- **Implicit Assertions**: Using `should()` and `and()`
  - URL assertions (include, eq, contain)
  - Title assertions
  - Element visibility and existence
  - Link count validation
- **Explicit Assertions**: Using `expect()` and `assert()`
  - BDD style assertions
  - TDD style assertions
  - Custom validation logic

**Key Concepts**:
- Chaining assertions
- Should vs. Expect
- Element state validation

---

### 3. **CSSLocators.cy.js** & **XPathLocators.cy.js**
**Purpose**: Demonstrate different locator strategies

**CSS Locator Types**:
- ID selector: `#elementId`
- Class selector: `.className`
- Attribute selector: `[name='username']`
- Pseudo-selectors: `:nth-child()`, `:first`, `:last`
- Descendant selectors: `div > input`

**XPath Locator Types**:
- Absolute XPath: `/html/body/div/input`
- Relative XPath: `//input[@id='username']`
- Contains: `//button[contains(text(),'Login')]`
- Axes: `//div/following-sibling::input`

---

### 4. **Checkbox.cy.js** & **RadioButton.cy.js**
**Purpose**: Handle checkbox and radio button selections

**Features**:
- Check/uncheck individual checkboxes
- Select multiple checkboxes
- Verify checkbox state
- Select radio buttons
- Validate selection state

**Common Commands**:
```javascript
cy.get('#checkbox').check()
cy.get('#checkbox').uncheck()
cy.get('input[type="radio"]').check()
cy.get('#checkbox').should('be.checked')
```

---

### 5. **Dropdown.cy.js**
**Purpose**: Test dropdown selection functionality

**Features**:
- Select by value
- Select by visible text
- Select by index
- Multi-select dropdowns
- Verify selected options

**Example**:
```javascript
cy.get('select').select('Option 1')           // By text
cy.get('select').select('value1')             // By value
cy.get('select').select(2)                    // By index
```

---

### 6. **Alerts.cy.js**
**Purpose**: Handle JavaScript alerts, confirms, and prompts

**Features**:
- Simple alert handling
- Confirm dialog (OK/Cancel)
- Prompt dialog with input
- Alert text validation

**Key Commands**:
```javascript
cy.on('window:alert', (text) => {
  expect(text).to.contains('Alert message')
})

cy.on('window:confirm', () => true)  // Click OK
cy.on('window:confirm', () => false) // Click Cancel
```

---

### 7. **iFrames.cy.js**
**Purpose**: Work with embedded iFrames

**Features**:
- Access iFrame content
- Interact with elements inside iFrames
- Custom iframe command usage

**Custom Command**:
```javascript
Cypress.Commands.add('getIframe', (iframe) => {
  return cy.get(iframe)
    .its("0.contentDocument.body")
    .should("be.visible")
    .then(cy.wrap)
})
```

---

### 8. **Table.cy.js**
**Purpose**: Extract and validate table data

**Features**:
- Read table headers
- Extract specific cell data
- Iterate through rows
- Search and validate table content
- Count rows and columns

---

### 9. **MouseOperations.cy.js**
**Purpose**: Test mouse interactions

**Features**:
- Click events
- Double click
- Right-click (context menu)
- Hover operations
- Drag and drop

**Example Commands**:
```javascript
cy.get('#element').click()
cy.get('#element').dblclick()
cy.get('#element').rightclick()
cy.get('#element').trigger('mouseover')
cy.get('#draggable').drag('#droppable')
```

---

### 10. **FileUpload.cy.js**
**Purpose**: Test file upload functionality

**Features**:
- Single file upload
- Multiple file upload
- File type validation
- Upload verification

**Usage**:
```javascript
cy.get('input[type="file"]')
  .attachFile('test1.pdf')
```

---

### 11. **NewTabs.cy.js**
**Purpose**: Handle new tabs and windows

**Features**:
- Remove target attribute to open in same tab
- Navigate to new URLs
- Handle links that open new windows

---

### 12. **BrowserNavigation.cy.js**
**Purpose**: Test browser navigation commands

**Features**:
- Forward navigation: `cy.go('forward')`
- Backward navigation: `cy.go('back')`
- Reload page: `cy.reload()`
- Visit specific URL: `cy.visit(url)`

---

### 13. **ScreenshotAndVideos.cy.js**
**Purpose**: Demonstrate screenshot and video capture

**Features**:
- Full page screenshots
- Element-specific screenshots
- Automatic failure screenshots
- Video recording configuration

**Commands**:
```javascript
cy.screenshot()                        // Full page
cy.screenshot('custom-name')
cy.get('.logo').screenshot()           // Element only
```

---

### 14. **DataDrivenTest.cy.js**
**Purpose**: Implement data-driven testing with fixtures

**Features**:
- Load test data from JSON files
- Iterate through multiple data sets
- Parameterized test execution
- Conditional assertions based on data

**Implementation**:
```javascript
cy.fixture("orangehrmLogin").then((data) => {
  data.forEach((userdata) => {
    // Test logic using userdata
  })
})
```

---

### 15. **Fixtures.cy.js**
**Purpose**: Demonstrate fixture usage patterns

**Features**:
- Load external JSON data
- Access fixture data in tests
- Reusable test data management

---

### 16. **LoginWithPOM.cy.js**
**Purpose**: Implement Page Object Model pattern

**Features**:
- Traditional login test
- Login with POM
- Data-driven login with POM
- Clean and maintainable code structure

**Page Object Example**:
```javascript
const ln = new Login()
ln.setUsername("Admin")
ln.setPassword("admin123")
ln.clickSubmit()
ln.verifyLogin()
```

---

### 17. **CustomCommands.cy.js**
**Purpose**: Use custom Cypress commands

**Features**:
- Reusable command implementation
- Simplified test syntax
- Custom linkText command (Selenium-like)

---

### 18. **Hooks&Tags.cy.js**
**Purpose**: Demonstrate Mocha hooks

**Hook Types**:
- `before()` - Runs once before all tests
- `after()` - Runs once after all tests
- `beforeEach()` - Runs before each test
- `afterEach()` - Runs after each test

**Use Cases**:
- Setup and teardown
- Login/logout operations
- Data initialization
- Test environment preparation

---

## 🔧 Custom Commands

Custom commands are defined in `cypress/support/commands.js` to create reusable functionality.

### Available Custom Commands

#### 1. **getIframe**
Access and interact with iframe elements easily.

```javascript
Cypress.Commands.add('getIframe', (iframe) => {
  return cy.get(iframe)
    .its("0.contentDocument.body")
    .should("be.visible")
    .then((body) => {
      cy.wrap(body).invoke('attr', 'contenteditable', 'true');
      return cy.wrap(body);
    });
});
```

**Usage**:
```javascript
cy.getIframe('#iframe-id').find('input').type('text')
```

#### 2. **linkText**
Selenium-like command to click links by text.

```javascript
Cypress.Commands.add('linkText', (label) => {
  cy.get('a').contains(label);
})
```

**Usage**:
```javascript
cy.linkText("OrangeHRM, Inc").click()
```

### Creating Custom Commands

To add your own custom commands:

1. Open `cypress/support/commands.js`
2. Add your command using `Cypress.Commands.add()`
3. The command will be available globally in all tests

**Example**:
```javascript
Cypress.Commands.add('login', (username, password) => {
  cy.get('#username').type(username)
  cy.get('#password').type(password)
  cy.get('#loginBtn').click()
})
```

**Usage**:
```javascript
cy.login('admin', 'admin123')
```

---

## 📄 Page Object Model

The Page Object Model (POM) is a design pattern that creates an object repository for web UI elements, making tests more maintainable and reducing code duplication.

### Structure

Page Objects are stored in `cypress/PageObjects/` directory.

### Example: LoginPage.js

```javascript
class Login {
    // Locators
    usernameField = "input[placeholder='Username']"
    passwordField = "input[placeholder='Password']"
    submitButton = "button[type='submit']"
    dashboardBreadcrumb = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"

    // Actions
    setUsername(username) {
        cy.get(this.usernameField).type(username)
    }

    setPassword(password) {
        cy.get(this.passwordField).type(password)
    }

    clickSubmit() {
        cy.get(this.submitButton).click()
    }

    // Assertions
    verifyLogin() {
        cy.get(this.dashboardBreadcrumb).contains("Dashboard")
    }
}

export default Login;
```

### Using Page Objects

```javascript
import Login from "../PageObjects/LoginPage"

describe("POM", () => {
    it("login test with POM", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        
        const ln = new Login()
        ln.setUsername("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit()
        ln.verifyLogin()
    })
})
```

### Benefits of POM

1. **Maintainability**: Changes to UI require updates in one place only
2. **Reusability**: Page objects can be used across multiple tests
3. **Readability**: Tests are more readable and express intent clearly
4. **Reduced Code Duplication**: Common actions are centralized
5. **Easier Refactoring**: Isolates test logic from page structure

---

## 📊 Fixtures & Test Data

Fixtures provide a way to load external data files for testing. They are stored in `cypress/fixtures/` directory.

### Available Fixtures

#### 1. **orangehrm.json**
Single user credentials for OrangeHRM demo site.

```json
{
    "username": "Admin",
    "password": "admin123",
    "expected": "Dashboard"
}
```

#### 2. **orangehrmLogin.json**
Multiple user credentials for data-driven testing.

```json
[
    {
        "username": "Admin",
        "password": "admin123",
        "expected": "Dashboard"
    },
    {
        "username": "Invalid",
        "password": "wrong",
        "expected": "Invalid credentials"
    }
]
```

### Using Fixtures

#### Method 1: Using cy.fixture()

```javascript
cy.fixture("orangehrm").then((data) => {
    cy.get('#username').type(data.username)
    cy.get('#password').type(data.password)
})
```

#### Method 2: Loading in beforeEach

```javascript
beforeEach(() => {
    cy.fixture("orangehrm").as('loginData')
})

it('test', function() {
    cy.get('#username').type(this.loginData.username)
})
```

#### Method 3: Direct Import

```javascript
import data from '../fixtures/orangehrm.json'

it('test', () => {
    cy.get('#username').type(data.username)
})
```

### File Fixtures

The framework also includes PDF files for upload testing:
- `test1.pdf`
- `test2.pdf`

These are used in file upload tests with the `cypress-file-upload` plugin.

---

## 📈 Reporting

This framework uses **Mochawesome** for generating beautiful, detailed HTML reports.

### Report Configuration

Reports are configured in `cypress.config.js`:

```javascript
reporter: 'cypress-mochawesome-reporter'
```

And imported in `cypress/support/e2e.js`:

```javascript
require('cypress-mochawesome-reporter/register')
```

### Generated Reports

After running tests, reports are generated in:
```
cypress/reports/html/index.html
```

### Report Features

- ✅ **Test Results Summary**: Pass/fail statistics
- 📸 **Screenshots**: Embedded failure screenshots
- 🎥 **Videos**: Linked test execution videos
- ⏱️ **Execution Time**: Duration for each test
- 📊 **Charts & Graphs**: Visual representation of results
- 🔍 **Detailed Logs**: Command execution details
- 🎨 **Modern UI**: Clean and professional appearance

### Opening Reports

After test execution:

```bash
# Windows
start cypress/reports/html/index.html

# macOS
open cypress/reports/html/index.html

# Linux
xdg-open cypress/reports/html/index.html
```

### Customizing Reports

You can customize report options in `cypress.config.js`:

```javascript
reporter: 'cypress-mochawesome-reporter',
reporterOptions: {
  reportDir: 'cypress/reports',
  charts: true,
  reportPageTitle: 'Cypress Test Report',
  embeddedScreenshots: true,
  inlineAssets: true,
  videoOnFailOnly: false
}
```

---

## 🎯 Best Practices

### 1. **Test Organization**
- One test suite per file
- Group related tests using `describe()` blocks
- Use clear and descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)

### 2. **Selectors**
- Prefer `data-*` attributes for test selectors
- Avoid brittle selectors tied to styling
- Use `data-cy`, `data-test`, or `data-testid` attributes
- Create constants for frequently used selectors

### 3. **Assertions**
- Add meaningful assertions
- Verify not just success but also expected state
- Use explicit waits when needed
- Assert intermediate steps, not just final result

### 4. **Data Management**
- Use fixtures for test data
- Separate test data from test logic
- Use environment variables for sensitive data
- Clean up test data after execution

### 5. **Test Independence**
- Each test should be independent
- Don't rely on test execution order
- Reset state in `beforeEach()` hooks
- Avoid test interdependencies

### 6. **Custom Commands**
- Create custom commands for repeated actions
- Keep commands focused and single-purpose
- Document custom command usage
- Add type definitions for better IDE support

### 7. **Page Objects**
- Use POM for complex applications
- Keep page objects simple and focused
- Don't add test assertions in page objects
- Return page objects for method chaining

### 8. **Waiting & Timing**
- Let Cypress handle waits automatically
- Avoid using `cy.wait(milliseconds)` when possible
- Use `cy.wait('@alias')` for network requests
- Set appropriate timeout values

### 9. **Error Handling**
- Add descriptive error messages
- Use `.should()` for auto-retry assertions
- Capture screenshots on failure
- Log meaningful debug information

### 10. **Performance**
- Minimize `cy.wait()` usage
- Use `cy.intercept()` to stub network calls
- Run tests in parallel when possible
- Keep test execution time reasonable

---

## 🐛 Troubleshooting

### Common Issues and Solutions

#### 1. **Cypress Not Opening**
```bash
# Clear Cypress cache
npx cypress cache clear
npx cypress install
```

#### 2. **Module Not Found Errors**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

#### 3. **Element Not Found**
- Verify selector is correct
- Add explicit wait: `cy.get(selector, { timeout: 10000 })`
- Check if element is in iframe
- Ensure page has loaded completely

#### 4. **Timeout Errors**
- Increase timeout in config:
```javascript
defaultCommandTimeout: 10000
```
- Use `cy.wait()` for specific delays
- Check network requests aren't blocked

#### 5. **Video Recording Issues**
- Ensure video folder exists
- Check disk space
- Disable video if not needed:
```javascript
video: false
```

#### 6. **XPath Not Working**
- Verify `cypress-xpath` is installed
- Ensure it's imported in `e2e.js`:
```javascript
require('cypress-xpath')
```

#### 7. **iFrame Issues**
- Use custom `getIframe()` command
- Ensure iframe is loaded before accessing
- Check iframe permissions

#### 8. **File Upload Failures**
- Verify file path is correct
- Ensure `cypress-file-upload` plugin is installed
- Check file exists in fixtures folder

### Debug Mode

Run tests in debug mode for detailed logs:

```bash
DEBUG=cypress:* npx cypress run
```

### Getting Help

- **Cypress Documentation**: https://docs.cypress.io
- **GitHub Issues**: https://github.com/cypress-io/cypress/issues
- **Cypress Discord**: https://discord.com/invite/cypress
- **Stack Overflow**: Tag your question with `cypress`


## 📚 Additional Resources

### Cypress Learning Resources
- [Official Cypress Documentation](https://docs.cypress.io)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Cypress Examples](https://example.cypress.io)
- [Cypress Real World App](https://github.com/cypress-io/cypress-realworld-app)

### Testing Resources
- [JavaScript Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)
- [Test Automation Patterns](https://testautomationpatterns.org)

---

## 📄 License

This project is licensed under the **ISC License**.
