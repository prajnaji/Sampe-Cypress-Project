import _ from 'lodash'
/// <reference types="cypress-iframe" />
/// <reference types="cypress" />
import { Given,when,Then, And, When} from "cypress-cucumber-preprocessor/steps";
import CartPage from "../../../../support/pageObjects/cartPage.cy";
import CheckoutLoginPage from "../../../../support/pageObjects/CheckoutLoginPage.cy";
import DeliveryDetails from "../../../../support/pageObjects/DeliveryDetails.cy";
import HomePage from "../../../../support/pageObjects/HomePage.cy";
import SDDPage from "../../../../support/pageObjects/SDDPage.cy"
import SPPPage from "../../../../support/pageObjects/SPPPage.cy";
 
const hp = new HomePage();
const sddpage= new SDDPage();
const sppPage = new SPPPage();
const cartPage = new CartPage();
const checkoutLoginPage = new CheckoutLoginPage();
const deliveryDetails = new DeliveryDetails();
var chars = '1234567890';
var string = '';
for(var ii=0; ii<4; ii++){
    string += chars[Math.floor(Math.random() * chars.length)];
}
let randomNewUseremail="cssprajna+" + string + '@gmail.com';


Given ('Launch Home Page',()=>{
    cy.visit('https://www.igp.com/#');})
When('Navigate to Spp Page',()=>{
   
    //hp.sddCTA().click()  
    cy.visit('https://www.igp.com/p-truffle-delight-cake-half-kg--145988'); 
})
And('EnterPincode & check Availability',()=>{
 
    /* Input For PinCode Field */
    sppPage.pingcodeField().type('400072');
})
And('Enter Delivery Option Type & Time',()=>{
  
  /*Selecting Delevery Option as Same Day Delivery  */
  sppPage.selectTodatDateOption().click();
  /*Selecting Standard Delivery */
  sppPage.standardDelivery().click();
  /*Selecting Time From Dropdown */
  sppPage.timePicker().select('20:00 hrs - 23:00 hrs').should('contain.text','20:00 hrs - 23:00 hrs');
  /*Click On ADD To Cart Button*/  
})
And('Add to Cart',()=>{
    sppPage.addToCartCTA().click();
    
    console.log("Add To Cart Button clicked");

    })
And ('Click Continue Without Addons',()=>{

    /*Click on Continue Add WithouAddon */
    sppPage.continueWithOutAddons().should('contain.text','CONTINUE WITHOUT ADDONS').click();
})
Then('Continue Checkout from Viewcart page',()=>{
 
    /*Checkout From View Shopping Bag/cart page */
    cartPage.shoppingBagTitleCheck();
    cartPage.proceedCheckout().click();

})
And('Landed on Checkout Signup Form & click on Signup Link',()=>{
    checkoutLoginPage.checkoutLoginPage_checkTitle();
    checkoutLoginPage.signupLink().click({force:true})
})

And('Fill the Signup form',()=>{
     
    checkoutLoginPage.newUser_fullName().type('DO ', { force:true });
    checkoutLoginPage.newUser_countryField().type('India', { force:true });
    checkoutLoginPage.newUser_mobileNumberField().type('98776186518', { force:true })
    checkoutLoginPage.newUser_emaiIdField().type(randomNewUseremail, { force:true })
    checkoutLoginPage.newUser_passwordField().type("Tester@123",{force:true})
    checkoutLoginPage.newUser_signUp_submitCTA().click({force:true})

})
And('Fill Adress Details Form & submit',()=>{
    deliveryDetails.nameField().type('Prajna')
    deliveryDetails.addressLine1().type('Gulab Estate, T2 Airport Road, Near Sakinka Telephone Exchange');
    deliveryDetails.mobileNumber1().type('9776186519')
    deliveryDetails.submitButton().click();

})

