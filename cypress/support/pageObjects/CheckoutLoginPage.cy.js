class CheckoutLoginPage{
     registeredUser_Email(){
        return cy.get('#email');
    }
    registeredUser_Password(){
        return cy.get('#passwd')
    }
    registeredUser_SubmitCTA()
    {
        return cy.get('#row-submit > div:nth-child(1) > button')
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
    checkoutLoginPage_checkTitle(){
        cy.title().should('eq','Checkout')
    }

    // Reusable methods for Checkout Signin Page

    /* For Registered User Login */
    returnUserLogin(emailid,pwd){
        cy.get('#email').type(emailid,{force:true});
        cy.get('#passwd').type(pwd,{force:true});
        cy.get('#row-submit > div:nth-child(1) > button').click({force:true});


    }
    /*For International User sign Up */
    internationalUserSignup(fullName,country,mobileNumber,emaiI,password){
        cy.get('#goto-signup').click({force:true})
        cy.get('#cname').type(fullName,{force:true});
        cy.get('#row-country > div >input[placeholder=Country]').type(country,{force:true});
        cy.get('#row-mob > div >div:nth-child(3) > input').type(mobileNumber,{force:true});
        cy.get('#row-email div input').type(emaiI,{force:true});
        cy.get('#row-passwd div input').type(password,{force:true});
        cy.get('#row-submit > div:nth-child(1) > button').click({force:true})
    }

}

export default CheckoutLoginPage;
