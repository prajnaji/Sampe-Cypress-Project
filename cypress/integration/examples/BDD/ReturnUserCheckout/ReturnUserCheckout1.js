///<reference types='cypress-file-upload'/>
import 'cypress-file-upload';
import { Given,when,Then, And} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/pageObjects/HomePage.cy";
import SDDPage from "../../../../support/pageObjects/SDDPage.cy"
import SPPPage from "../../../../support/pageObjects/SPPPage.cy";
import 'cypress-iframe';
const hp1 = new HomePage();
const sddpage= new SDDPage();
const sppPage = new SPPPage();
 

/**Placing Order for Return User Checkout  */
Given ('Launch Home Page',()=>{
    
    cy.visit('https://www.igp.com/ ');
    cy.visit('https://www.igp.com/p-you-are-purrfect-pet-personalized-wooden-photo-frame-132130');
    sppPage.pingcodeField().type('400072');
    /*Selecting Date from Calender */
   // cy.get('div.revamp-flagdd.special-case.d-flex #std-datepicker').click();
   // cy.get('tr:nth-child(1) td:nth-child(6)').click()
     
    /*Click On MakeItECtraSpecial Button*/
    sppPage.personalizeNowCTA().click();

    /*Selecting Design */
    cy.get('div.design-container__design-card img').click();

    /*Continue button selection */
    cy.get('a.revamp-btn.personalisation-container__action-button').click();

    /*Upload Imagefile CTA */
    
    //cy.get("").attachFile("Kailash.jpg");
    cy.get('#opener').click();

//    const y= cy.get('iframe[data-test="uw-iframe"]')
//         .its('0.contentDocument.body')
//         .should('be.visible')
//         .then(cy.wrap);
//         y.get('.upload_button_holder').click();
//cloudinary_fileupload  <div class="row no-margin">
//cy.get('input[type=file]').selectFile('file.json')
cy.iframe('iframe[data-test="uw-iframe"]').find('input[type=file]').selectFile('Kailash.jpg');
cy.iframe('iframe[data-test="uw-iframe"]').find('button[data-test=cropBtn]').click();
cy.wait(20000);
cy.get('div[class="col s12 no-padding d-flex"]').click();
cy.get('label[for="Standard_Delivery"]').click();
/*Selecting Date from Calender */
    // cy.get('div.revamp-flagdd.special-case.d-flex #std-datepicker').click();
    // cy.get('tr:nth-child(1) td:nth-child(6)').click()
cy.get('button[title="ADD TO CART"]').click();
}) 