import { Given,Then, When, And } from "cypress-cucumber-preprocessor/steps";
//import { functionsIn } from "cypress/types/lodash";

 import HomePage from "../../../../support/pageObjects/HomePage.cy";
 import MppPage from "../../../../support/pageObjects/MppPage.cy";
 import OrderReviewPage from  "../../../../support/pageObjects/OrderReviewPage.cy";
 import AddAddressPage from "../../../../support/pageObjects/AddAddressPage.cy";

 const homePage=new HomePage()
 const mppPage = new MppPage()
 const orderReviewPage = new OrderReviewPage()
 const addAddressPage = new AddAddressPage()
 
 Given ('Open the Ecomm Page',()=>{
     cy.visit('https://rahulshettyacademy.com/angularpractice/')
 })
 
 When('Adding Product to Cart',()=>{
     homePage.gnavShop_option().click()
 
     //Adding Product to the Cart
     cy.get('.card-body h4').each(($el,index,list)=>{
         if($el.text().includes('Blackberry')){
             cy.get('div.card-footer  button').eq(index).click()
         }
 
     }) 
     //Navigating to Order review page
     mppPage.getContinueCheckout().click()
 
 })
 
 /* Compare Total Purchase Price with Actual Price */
 And('Validate the total price',()=>{
     //Validating the total product price of the products 
     var sum =0
      orderReviewPage.lineItemPriceText().each(($ele,index,list)=>{
         var indvidualproductPrice=$ele.text().split(" ");
         indvidualproductPrice = indvidualproductPrice[1].trim()
         sum = Number(sum)+Number(indvidualproductPrice)
         
 
     }).then(function(){console.log(sum)})
 
   orderReviewPage.TotalPurchaseText().then(function(totalPrice){
         const text= totalPrice.text()
        var total_price= text.split(" ")
        total_price=total_price[1].trim()
        expect(Number(sum)).to.equal(Number(total_price))
     })
     cy.get('tbody tr:nth-child(3) >td:nth-child(5) button').click()
      
 
     Then('Select the country submit and verify ThankYou',function(){
         addAddressPage.getFillAddress().type("72, HSR Sector 5")
          addAddressPage.getselectCheckbox().click()
          addAddressPage.getContinueCheckout().click()
              
     })

     Given('Fill the form Details page',function(dataTable){
        homePage.editNameField().type(dataTable.rawTable[1][0])
        homePage.editEmailField().type(dataTable.rawTable[1][1])
        homePage.editPasswordField().type(dataTable.rawTable[1][2])

     })
 
 
 
 })
 
  