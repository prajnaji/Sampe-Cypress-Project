//const { result } = require("cypress/types/lodash");

describe('API calling Te3st Scripts ', () => {
    //let result= any;
    it('Modifying the response of the Api', () => {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
        cy.request('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty').as('result');
        //cy.get(result);
        console.log('@result');
        cy.wait('@result').should('have.a.property','result.status',200);
       
    })
})


