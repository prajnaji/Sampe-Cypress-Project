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


Given('Launch Home Page & navigate to single product page', () => {
  cy.visit('https://www.igp.com/#');
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  hp.scroll_And_SelectCountry(); giftousa.slectProduct(); sppPage.assertSelectedCountry(); sppPage.selectDateFromCalender();

  When('Add to Cart', () => {
    Cypress.on('uncaught:exception', (err, runnable) => { return false })
    sppPage.addToCartCTA().click();
    console.log("Add To Cart Button clicked");
  })

  And('Continue Checkout from Viewcart page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => { return false })

    cartPage.shoppingBagTitleCheck();
    cartPage.proceedCheckout().click();

  })
  Then('Landed on Checkout Signup Form & click on Signup Link', () => {
    Cypress.on('uncaught:exception', (err, runnable) => { return false })
    checkoutLoginPage.checkoutLoginPage_checkTitle();
    checkoutLoginPage.signupLink().click({ force: true })
  })
  And('Fill the Signup form', function (dataTable) {
    Cypress.on('uncaught:exception', (err, runnable) => { return false })
    checkoutLoginPage.internationalUserSignup(dataTable.rawTable[1][0], dataTable.rawTable[1][1], dataTable.rawTable[1][2], randomNewUseremail, dataTable.rawTable[1][3]);

  })
  Then('Fill International Adress Details Form & submit', function (dataTable) {
    Cypress.on('uncaught:exception', (err, runnable) => { return false })
    cy.wait(5000);
    deliveryDetails.fillingDeliveryDetails(dataTable.rawTable[1][0], dataTable.rawTable[1][1], dataTable.rawTable[1][2], dataTable.rawTable[1][3], dataTable.rawTable[1][4], "443322112233", { force: true });
    cy.get('div.deliver-here-link').click({ force: true })
  })
  And('Continue Checkout from Order Summery Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => { return false })
    orderSummeryPage.applayCupponCode();
    orderSummeryPage.click_ProceedTOPayment_CTA();
  })






})



