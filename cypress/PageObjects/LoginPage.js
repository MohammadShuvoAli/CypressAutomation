class Login{
    setUsername(username){
        cy.get("input[placeholder='Username']").type(username)
    }

    setPassword(password){
        cy.get("input[placeholder='Password']").type(password)
    }

    clickSubmit(){
        cy.get("button[type='submit']").click()
    }

    verifyLogin(){
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").contains("Dashboard")
    }
}

export default Login;