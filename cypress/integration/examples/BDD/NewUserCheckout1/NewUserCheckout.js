import _ from 'lodash'
/// <reference types="cypress-iframe" />
/// <reference types="cypress" />
import { Given, when, Then, And, When } from "cypress-cucumber-preprocessor/steps";
import CartPage from "../../../../support/pageObjects/cartPage.cy";
import CheckoutLoginPage from "../../../../support/pageObjects/CheckoutLoginPage.cy";
import DeliveryDetails from "../../../../support/pageObjects/DeliveryDetails.cy";
import HomePage from "../../../../support/pageObjects/HomePage.cy";
import SDDPage from "../../../../support/pageObjects/SDDPage.cy"
import SPPPage from "../../../../support/pageObjects/SPPPage.cy";
import OrderSummeryPage from '../../../../support/pageObjects/OrderSummeryPage.cy';

const hp = new HomePage();
const sddpage = new SDDPage();
const sppPage = new SPPPage();
const cartPage = new CartPage();
const checkoutLoginPage = new CheckoutLoginPage();
const deliveryDetails = new DeliveryDetails();
const orderSummeryPage = new OrderSummeryPage
var chars = '1234567890';
var string = '';
for (var ii = 0; ii < 4; ii++) {
    string += chars[Math.floor(Math.random() * chars.length)];
}
let randomNewUseremail = "cssprajna+" + string + '@gmail.com';


Given('Launch Home Page', () => {
    cy.visit('https://www.igp.com/#');
})
When('Navigate to Spp Page', function(dataTable){
    Cypress.on('uncaught:exception', (err, runnable) => { return false })
    hp.selectOptionFromGnav(dataTable.rawTable[1][0]);
    sddpage.selectProductbyFiltering(dataTable.rawTable[1][1],dataTable.rawTable[1][2]); 
})
And('EnterPincode , Delivery Option Type and Time', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {return false})
    sppPage.pingcodeField().type('400072');
    sppPage.selectTodatDateOption().click();
    sppPage.standardDelivery().click();
    sppPage.timePicker().select('20:00 hrs - 23:00 hrs').should('contain.text', '20:00 hrs - 23:00 hrs');
})
And('Add to Cart', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {return false })
    sppPage.addToCartCTA().click();
    console.log("Add To Cart Button clicked");

})
And('Click Continue Without Addons', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {return false})
    /*Click on Continue Add WithouAddon */
    sppPage.continueWithOutAddons().should('contain.text', 'CONTINUE WITHOUT ADDONS').click();
})
Then('Continue Checkout from Viewcart page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {return false})
    /*Checkout From View Shopping Bag/cart page */
    cartPage.shoppingBagTitleCheck();
    cy.shoppingbagcartassertion();
    cartPage.proceedCheckout().click();

})
And('Click Checkout Signup Link & Register as a New User', function(dataTable){
    Cypress.on('uncaught:exception', (err, runnable) => {return false })
    checkoutLoginPage.checkoutLoginPage_checkTitle();
    checkoutLoginPage.internationalUserSignup(dataTable.rawTable[1][0], dataTable.rawTable[1][1], dataTable.rawTable[1][2], randomNewUseremail, dataTable.rawTable[1][3]);
     
})
And('Fill Adress Details Form & submit', function(dataTable){
    Cypress.on('uncaught:exception', (err, runnable) => {return false})
    cy.wait(5000);
    cy.fillingDeliveryDetails1(dataTable.rawTable[1][0], dataTable.rawTable[1][1], dataTable.rawTable[1][2], randomNewUseremail, dataTable.rawTable[1][3]);

})
And('Continue Checkout from Order Summery Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {return false})
    //orderSummeryPage.applayCupponCode('igp10');
    orderSummeryPage.click_ProceedTOPayment_CTA();

})

