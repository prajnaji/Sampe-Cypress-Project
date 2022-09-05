///<reference types='cypress-file-upload'/>
import 'cypress-file-upload';
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
    cy.visit('https://www.igp.com/p-forever-love-personalized-wooden-jigsaw-heart-puzzle-149085');
    sppPage.pingcodeField().type('400072');
    /*Selecting Date from Calender */
    cy.get('div.revamp-flagdd.special-case.d-flex #std-datepicker').click();
    cy.get('tr:nth-child(1) td:nth-child(6)').click()
     
    /*Click On MakeItECtraSpecial Button*/
    sppPage.personalizeNowCTA().click();

    /*Selecting Design */
    cy.get('div.design-container__design-card img').click();

    /*Continue button selection */
    cy.get('a.revamp-btn.personalisation-container__action-button').click();

    /*Upload Imagefile CTA */
    
    //cy.get("").attachFile("Kailash.jpg");
    cy.get('#opener').click();

    cy.fixture('image/Kailash.jpg').as('logo')
    cy.get('input[type=file]').then(function ($input) {
  // convert the logo base64 string to a blob
  const blob = Cypress.Blob.base64StringToBlob(this.logo, 'image/png')

  // pass the blob to the fileupload jQuery plugin
  // https://github.com/blueimp/jQuery-File-Upload
  // used in your application's code
  // which initiates a programmatic upload
  $input.fileupload('add', { files: blob })
})


}) 