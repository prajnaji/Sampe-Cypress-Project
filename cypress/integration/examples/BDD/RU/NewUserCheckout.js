import { Given,when,Then, And} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/pageObjects/HomePage.cy";
import SDDPage from "../../../../support/pageObjects/SDDPage.cy"
import SPPPage from "../../../../support/pageObjects/SPPPage.cy";
 
const hp1 = new HomePage();
const sddpage= new SDDPage();
const sppPage = new SPPPage();
 

/**Placing Order for Return User Checkout  */
Given ('Launch Home Page',()=>{
    
    cy.visit('https://www.igp.com/ ');
    hp1.clickPersonalizedGnavSection();



}) 