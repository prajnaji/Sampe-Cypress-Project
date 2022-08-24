class OrderReviewPage{

    orderReviewContinueBtn(){
        return cy.get('tbody tr:nth-child(3) >td:nth-child(5) button') 
    }
    lineItemPriceText(){
        return cy.get('tr td:nth-child(4) strong ')
    }
    TotalPurchaseText(){
        return cy.get('.text-right h3 strong ')
    }
    

}
export default OrderReviewPage;