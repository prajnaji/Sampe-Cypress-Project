import { Given,when,Then, And} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/pageObjects/HomePage.cy";
import SDDPage from "../../../../support/pageObjects/SDDPage.cy"
import SPPPage from "../../../../support/pageObjects/SPPPage.cy";
 
const hp1 = new HomePage();
const sddpage= new SDDPage();
const sppPage = new SPPPage();
 

/**Placing Order for Return User Checkout  */
Given ('Launch Home Page',()=>{
    
    // cy.visit('https://www.igp.com/ ');
    // hp1.clickPersonalizedGnavSection();
    cy.visit('https://www.igp.com/p-truffle-delight-cake-half-kg--145988');
    sppPage.pingcodeField().type('400072');
    sppPage.selectTodatDateOption().click();
    sppPage.standardDelivery().click();
    //cy.get('select').then($time => {$time.val("25")})
    
   // cy.get('select[id=timepicker]').click()
    //cy.get('select[id=timepicker]').select('13:00 hrs - 17:00 hrs').eq(1)
    cy.get('#timepicker').select('13:00 hrs - 17:00 hrs').should('contain.text','13:00 hrs - 17:00 hrs');


}) 