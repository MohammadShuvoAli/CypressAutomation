class Login {

    usernameField = "input[placeholder='Username']"
    passwordField = "input[placeholder='Password']"
    submitButton = "button[type='submit']"
    dashboardBreadcrumb = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"

    setUsername(username) {
        cy.get(this.usernameField).type(username)
    }

    setPassword(password) {
        cy.get(this.passwordField).type(password)
    }

    clickSubmit() {
        cy.get(this.submitButton).click()
    }

    verifyLogin() {
        cy.get(this.dashboardBreadcrumb).contains("Dashboard")
    }
}

export default Login;
