// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//import cypress from 'cypress'
 
import './commands' 
Cypress.Commands.add('selectProductFromDropdown', (productName) => { 
    cy.get('h4.card-title').each(($ele,index,$list)=>
    {
        //const productName=$ele.text()
        if(productName.includes(productName))
        {
            cy.get('div.card-footer  button').eq(index).click()

        }
   }),

Cypress.Commands.add('getSumOfIndividual_LineItemPrice',(lineItemPrice)=>{
    cy.get('tr td:nth-child(4) strong ').each(($ele,index,list)=>{
        var indvidualproductPrice=$ele.text().split(" ");
        indvidualproductPrice = indvidualproductPrice[1].trim()
        sum = Number(sum)+Number(indvidualproductPrice)
        

    }).then(function(){console.log(sum)})
})

Cypress.Commands.add('CheckTotalPurchase-Eq_Actualprice',(totalPurchasePrice)=>{
    cy.get('.text-right h3 strong ').then(function(totalPrice){
        const text= totalPrice.text();
       var total_price= text.split(" ");
       total_price=total_price[1].trim();
       expect(Number(sum)).to.equal(Number(total_price));
    })

})

Cypress.Commands.add('CheckPageTitle',(expectedPageTitle)=>{
     cy.pageTitle().should('include',expectedPageTitle);
})

Cypress.Commands.add('EnterValidCupponCode',(cupponCode,successMSG)=>{
     
        //cy.get('#coupon-form input').type(cupponCode,{enter});
        cy.get('#coupon-form button[type=submit]').click({force:true});
        cy.get('div.apply-coupan.revamp-apply-coupon.relative div:nth-child(3) > div:nth-child(2) span').should('contain.text',successMSG);
})

})


