class CheckoutLoginPage{
     RU_Email(){
        return cy.get('#email');
    }
    RU_Password(){
        return cy.get('#passwd')
    }
    RU_SubmitCTA()
    {
        return cy.get('#row-submit > div:nth-child(1) > button')
    }

    RULoginForm()
    {
        cy.get('#email').type('cssprajna+098@gmail.com');
        cy.get('#passwd').type('Tester@123');
        cy.get('#row-submit > div:nth-child(1) > button').click();


    }
    
    /* New User - Sign up form Web Elements */
    signupLink(){
        return cy.get('#goto-signup');
    }
    newUser_fullName(){
        return cy.get('#cname');
    }
    newUser_countryField(){
        return cy.get('#row-country > div >input[placeholder=Country]');
    }
    newUser_mobileNumberField(){
        return cy.get('#row-mob > div >div:nth-child(3) > input');
    }
    newUser_emaiIdField(){
       return cy.get('#row-email div input');
    }
    newUser_passwordField(){
        return cy.get('#row-passwd div input');
    }
    newUser_signUp_submitCTA(){
        return cy.get('#row-submit > div:nth-child(1) > button');
    }

}

export default CheckoutLoginPage;
