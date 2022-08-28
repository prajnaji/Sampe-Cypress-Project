class MyAccountloginPage{

    loginUsing_pwdCTA(){
        return  cy.get('#e-login-btn')
    }
    loginUsing_otpCTA(){
        return cy.get('#otp-login-btn')
    }
    loginUsing_fbCTA(){
        return cy.get('a.btn-social.btn-facebook')
    }
    loginUsing_GoogleCTA(){
        return cy.get(' a.btn-social.btn-google-plus')
    }
    LVE_emailField(){
       return cy.get('#com-e-m-field')
    }
    LVE_passwordField(){
        return cy.get('#passwd')

    }
    LVE_submitCTA(){
        return cy.get('#login-email-form  button[type=submit]')
    }
    LVE_LoginErrorMsg(){
        returncy.get('div.submit_msg.has_error')
    }
    forgetPwdCTA(){
        cy.get('a[data-target=f-pass]')
    }



    
}
export default MyAccountloginPage ;
