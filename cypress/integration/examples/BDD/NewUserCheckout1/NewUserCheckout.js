/// <reference types="cypress-iframe" />
/// <reference types="cypress" />
import { Given,when,Then, And} from "cypress-cucumber-preprocessor/steps";
import CartPage from "../../../../support/pageObjects/cartPage.cy";
import CheckoutLoginPage from "../../../../support/pageObjects/CheckoutLoginPage.cy";
import HomePage from "../../../../support/pageObjects/HomePage.cy";
import SDDPage from "../../../../support/pageObjects/SDDPage.cy"
import SPPPage from "../../../../support/pageObjects/SPPPage.cy";
 
const hp = new HomePage();
const sddpage= new SDDPage();
const sppPage = new SPPPage();
const cartPage = new CartPage();
const checkoutLoginPage = new CheckoutLoginPage();
var chars = '1234567890';
var string = '';
for(var ii=0; ii<4; ii++){
    string += chars[Math.floor(Math.random() * chars.length)];
}
let randomNewUseremail="cssprajna+" + string + '@gmail.com';


Given ('Launch Home Page',()=>{
    //cy.visit('https://www.igp.com/#');
    //hp.sddCTA().click()  
    cy.visit('https://www.igp.com/p-truffle-delight-cake-half-kg--145988');
    /* Input For PinCode Field */
    sppPage.pingcodeField().type('400072');
    /*Selecting Delevery Option as Same Day Delivery  */
    sppPage.selectTodatDateOption().click();
    /*Selecting Standard Delivery */
    sppPage.standardDelivery().click();
    /*Selecting Time From Dropdown */
    sppPage.timePicker().select('20:00 hrs - 23:00 hrs').should('contain.text','20:00 hrs - 23:00 hrs');
    /*Click On ADD To Cart Button*/
    sppPage.addToCartCTA().click();
    console.log("Add To Cart Button clicked");
    /*Click on Continue Add WithouAddon */
    sppPage.continueWithOutAddons().should('contain.text','CONTINUE WITHOUT ADDONS').click();
    /*Checkout From View Shopping Bag/cart page */
    cartPage.proceedCheckout().click();

    /*cCheckout Login Page Signup CTA Click */
    checkoutLoginPage.signupLink().click({force:true});
    //checkoutLoginPage.signupLink().click();
    //cy.frameLoaded('#ce_proto_iframe');   


}) 