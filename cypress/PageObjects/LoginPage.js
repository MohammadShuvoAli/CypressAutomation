class Login{
    setUserName(username){
        cy.get("input[placeholder='Username']").type(username)
    }

    setUserName(password){
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