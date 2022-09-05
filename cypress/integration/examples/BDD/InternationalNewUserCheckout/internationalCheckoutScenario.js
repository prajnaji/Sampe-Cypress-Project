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
const orderSummeryPage = new OrderSummeryPage;
var chars = '1234567890';
var string = '';
for(var ii=0; ii<4; ii++){
    string += chars[Math.floor(Math.random() * chars.length)];
}
let randomNewUseremail="cssprajna+" + string + '@gmail.com';


Given('Launch Home Page & navigate to single product page', () => {

    cy.visit('https://www.igp.com/#');
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    cy.contains('Send Gifts World Wide').scrollIntoView()
    cy.contains('USA').click()
    cy.get('[class="slick-active"]').eq('2').click()
    cy.contains('Bunch of 12 Roses with Godiva Chocolates & Teddy Bear').click()
    cy.get('[class="non-active-btn calender-row col s12 active-btn"]').click()
    cy.get('[id="std-datepicker"]').click()
    cy.get('[class="ui-datepicker-calendar"]').contains('15').click()

    When('Add to Cart', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        sppPage.addToCartCTA().click();

        console.log("Add To Cart Button clicked");

    })
    And('Continue Checkout from Viewcart page',()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        /*Checkout From View Shopping Bag/cart page */
        cartPage.shoppingBagTitleCheck();
        cartPage.proceedCheckout().click();
    
    })
    Then('Landed on Checkout Signup Form & click on Signup Link',()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        checkoutLoginPage.checkoutLoginPage_checkTitle();
        checkoutLoginPage.signupLink().click({force:true})
    })
    And('Fill the Signup form',function(dataTable){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        
        
        checkoutLoginPage.internationalUserSignup(dataTable.rawTable[1][0],dataTable.rawTable[1][1],dataTable.rawTable[1][2],randomNewUseremail,dataTable.rawTable[1][3]);
        // checkoutLoginPage.newUser_fullName().type(dataTable.rawTable[1][0],{force:true});
        // checkoutLoginPage.newUser_countryField().type(dataTable.rawTable[1][1],{force:true});
        // checkoutLoginPage.newUser_mobileNumberField().type(dataTable.rawTable[1][2],{force:true});
        // checkoutLoginPage.newUser_emaiIdField().type(randomNewUseremail,{force:true});
        // checkoutLoginPage.newUser_passwordField().type(dataTable.rawTable[1][3],{force:true});
        // checkoutLoginPage.newUser_signUp_submitCTA().click({force:true});
    })
    Then ('Fill International Adress Details Form & submit',function(dataTable){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
          cy.wait(5000);
        deliveryDetails.nameField().type(dataTable.rawTable[1][0],{force:true});
        deliveryDetails.pincode().type(dataTable.rawTable[1][1],{force:true});
        deliveryDetails.cityField().type(dataTable.rawTable[1][2],{force:true});
        deliveryDetails.stateField().type(dataTable.rawTable[1][3],{force:true});
        deliveryDetails.addressLine1().type(dataTable.rawTable[1][4],{force:true});
        deliveryDetails.mobileNumber1().type(dataTable.rawTable[1][5],{force:true});
        deliveryDetails.submitButton().click({force:true});
    
    })
    And('Continue Checkout from Order Summery Page',()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          }) 
        orderSummeryPage.click_ProceedTOPayment_CTA();
    })
    
 




})



