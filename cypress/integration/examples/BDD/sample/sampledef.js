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
import GiftToUSA from '../../../../support/pageObjects/giftToUSA.cy';

const hp = new HomePage();
const sddpage = new SDDPage();
const sppPage = new SPPPage();
const cartPage = new CartPage();
const checkoutLoginPage = new CheckoutLoginPage();
const deliveryDetails = new DeliveryDetails();
const orderSummeryPage = new OrderSummeryPage;
const giftousa = new GiftToUSA();
var chars = '1234567890';
var string = '';
for (var ii = 0; ii < 4; ii++) {
  string += chars[Math.floor(Math.random() * chars.length)];
}
let randomNewUseremail = "cssprajna+" + string + '@gmail.com';

Given('Launch Home Page',()=>{

    cy.visit('https://www.igp.com/#');
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    hp.scroll_And_SelectCountry(); 
    giftousa.slectProduct(); 
    sppPage.assertSelectedCountry(); 
    sppPage.selectDateFromCalender();


    Cypress.on('uncaught:exception', (err, runnable) => { return false })
    sppPage.addToCartCTA().click();
    console.log("Add To Cart Button clicked");


    Cypress.on('uncaught:exception', (err, runnable) => { return false })
    cartPage.shoppingBagTitleCheck();
    //cartPage.shoppingBagCartAssertion();
    cy.shoppingbagcartassertion();

    })
 


