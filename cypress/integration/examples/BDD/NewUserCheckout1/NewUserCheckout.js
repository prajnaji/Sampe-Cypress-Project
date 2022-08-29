import { Given,when,Then, And} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/pageObjects/HomePage.cy";
import SDDPage from "../../../../support/pageObjects/SDDPage.cy"
import SPPPage from "../../../../support/pageObjects/SPPPage.cy";
 
const hp = new HomePage();
const sddpage= new SDDPage();
const sppPage = new SPPPage();
 


Given ('Launch Home Page',()=>{
    // cy.visit('https://www.igp.com/#');
    // hp.sddCTA().click()  
    // cy.title().should('include','Same Day Delivery')
    //cy.get('div > div > a > img').should('have.attr', 'href').and('include', '/p-nuts-and-dates')
    cy.visit('https://www.igp.com/p-truffle-delight-cake-half-kg--145988');
    sppPage.pingcodeField().type('400072');
    sppPage.selectTodatDateOption().click();
    sppPage.standardDelivery().click();
    sppPage.timePicker().select('13:00 hrs - 17:00 hrs').should('contain.text','13:00 hrs - 17:00 hrs');
    sppPage.addToCartCTA().click()
    console.log("Add To Cart Button clicked")
    cy.get('').click()
    // sppPage.addOns_number0().click() 
    // sppPage.addOns_number0().click()
    // // sppPage.addOns_number1().click() 
    // // sppPage.addOns_singleRose().click() 


    

    


}) 