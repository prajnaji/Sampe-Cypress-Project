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
    //cy.get('select').then($time => {$time.val("25")})
    
   // cy.get('select[id=timepicker]').click()
    //cy.get('select[id=timepicker]').select('13:00 hrs - 17:00 hrs').eq(1)
    cy.get('select[id=timepicker]').select('13:00 hrs - 17:00 hrs').should('have.text', ' - 17:00 hrs')
    


}) 