// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//import cypress from 'cypress'
 
import './commands';
import 'cypress-iframe';
import CartPage from './pageObjects/cartPage.cy';
import CheckoutLoginPage from './pageObjects/CheckoutLoginPage.cy';
import DeliveryDetails from './pageObjects/DeliveryDetails.cy';
import HomePage from './pageObjects/HomePage.cy';
 
const hp = new HomePage();
const cartPage= new CartPage();
const deliveryDetails = new DeliveryDetails();
const checkoutLoginPage = new CheckoutLoginPage();

 
 
Cypress.Commands.add('selectProductFromDropdown', (productName) => { 
    
    cy.get('h4.card-title').each(($ele,index,$list)=>
    {
    
        //const productName=$ele.text()
        if(productName.includes(productName))
        {
            cy.get('div.card-footer  button').eq(index).click()

        }
   })

Cypress.Commands.add('CheckPageTitle',(expectedPageTitle)=>{
     cy.pageTitle().should('include',expectedPageTitle);
})

Cypress.Commands.add('EnterValidCupponCode',(cupponCode,successMSG)=>{
     
        //cy.get('#coupon-form input').type(cupponCode,{enter});
        cy.get('#coupon-form button[type=submit]').click({force:true});
        cy.get('div.apply-coupan.revamp-apply-coupon.relative div:nth-child(3) > div:nth-child(2) span').should('contain.text',successMSG);
})

});

//Reusable Utils --------------------------------

Cypress.Commands.add('RegisteredUserlogin', (email, pw) => {
    chklogin.registeredUser_Email().type(email);
    chklogin.registeredUser_Password().type(pw);

});
/*Selecting Gnaviagtion option from home page */
Cypress.Commands.add('selectOptionFromGnav',(gnavOption)=>{
   hp.gnavShop_option().each(($ele,index,list)=>{
    if($ele.text()==gnavOption){
        hp.gnavShop_option().eq(index).click();
     }
   })
});
/*Assertion for Shopping Bag Page */
Cypress.Commands.add('shoppingbagcartassertion',()=>
{
    let sum=0;
    cartPage.lineItemPrice().each(($ele,index,list)=>{
        var indvidualproductPrice=$ele.text().split(" ");
        indvidualproductPrice = indvidualproductPrice[1].trim()
        sum = Number(sum)+Number(indvidualproductPrice)
    }).then(function(){console.log(sum)})
     cartPage.footerTotalPricetext().then(function(totalpricetext){
        var price=totalpricetext.text().split(" ");
        price= price[1].trim();
        expect(Number(sum)).to.equal(Number(price));
    })
     cartPage.footerqty().should('be.visible');
     cartPage.qtyoption().should('exist').should('be.visible')
     cartPage.proceedCheckout().should('be.visible');
});
/* Reusable- Signup For International*/
Cypress.Commands.add('internationalUserSignup',(fullName,country,mobileNumber,emaiI,password)=>{
     checkoutLoginPage.signupLink().click({force:true})
     checkoutLoginPage.newUser_fullName().type(fullName,{force:true});
     checkoutLoginPage.newUser_countryField().type(country,{force:true});
     checkoutLoginPage.newUser_mobileNumberField().type(mobileNumber,{force:true});
     checkoutLoginPage.newUser_emaiIdField().type(emaiI,{force:true});
     checkoutLoginPage.newUser_passwordField().type(password,{force:true});
     checkoutLoginPage.newUser_signUp_submitCTA().click({force:true});
    
});


/* Reusable - Filling The form for International User */
Cypress.Commands.add('fillingDeliveryDetails',(name, pincode, city, state, addressLine1,mob)=>{
    deliveryDetails.nameField().type(name,{force:true});
    deliveryDetails.pincode().type(pincode,{force:true});
    deliveryDetails.cityField().type(city,{force:true});
    deliveryDetails.stateField().type(state,{force:true});
    deliveryDetails.addressLine1().type(addressLine1,{force:true});
    deliveryDetails.mobileNumber1().type(mob,{force:true});
    deliveryDetails.submitButton().click({force:true})
    
});

/*Reusable - Filling Form for Current Country */
Cypress.Commands.add('fillingDeliveryDetails1',(name,addressLine1,mob)=>{
    deliveryDetails.nameField().type(name,{force:true});
    deliveryDetails.addressLine1().type(addressLine1,{force:true});
    deliveryDetails.mobileNumber1().type(mob,{force:true});
    deliveryDetails.submitButton().click({force:true})
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    cy.get('div.deliver-here-link a').click({ force: true })
    
});



 
 




