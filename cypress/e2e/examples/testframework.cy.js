///<reference types ="cypress"/>
import HomePage from '../../support/pageObjects/HomePage.cy'
import MppPage from '../../support/pageObjects/MppPage.cy'
//import OrderReviewPage from '../../support/pageObjects/OrderReviewPage.cy'
//import AddAddressPage from '../../support/pageObjects/AddAddressPage.cy'
// initial commit for head
describe("Testframwork",()=>
{
    let data1;
    before(function()
    {

    cy.log("Loading the fixure file")
    cy.fixture('example.json').then(function(data)
    {

        data1 = data
    })
    })
    it("Checkout scenario",()=>
    {
        const homePage=new HomePage()
        const mp =new MppPage()
        //const AddAddressPage= new AddAddressPage()
        //const OrderReviewPage = new OrderReviewPage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homePage.editNameField().type(data1.name)
        homePage.editEmailField().type(data1.email)
        homePage.editPasswordField().type(data1.password)
        homePage.selctDropdown().select(data1.gender)
        homePage.gnavShop_option().click()
        
        cy.get('.card-body h4').each(($el,index,list)=>{
            if($el.text().includes('Blackberry')){
                cy.get('div.card-footer  button').eq(index).click()
            }
    
        }) 
        
        mp.getContinueCheckout().click()
        //OrderReviewPage.getContinueCheckout().click()
        //AddAddressPage.getFillAddress().type(data1.address)
       //cy.get('#checkbox2').check().should('be.checked')
       
       //AddAddressPage.getselectCheckbox().check().should('be.checked')
       //AddAddressPage.getContinueCheckout().click()
       




    })
})





