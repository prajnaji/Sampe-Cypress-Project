beforeEach(function(){
    let fixturedata; 
        cy.log("Loading the fixure file")
        cy.fixture('example.json').then(function(data){
    
            fixturedata = data
        })
    })