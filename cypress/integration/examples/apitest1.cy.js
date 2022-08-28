describe('API calling Te3st Scripts ', () => {
    //let result= any;
    it('Modifying the response of the Api', () => {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty') ;

     
        cy.get(' button.btn.btn-primary').click();
        cy.wait('@result').its('response.statusCode').should('eq', 200)
      
    })
})


