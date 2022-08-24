class OrderReviewPage{

    getContinueCheckout(){
        return cy.get('td > button.btn.btn-success');
    }
    lineItemPriceText(){
        return cy.get('tr td:nth-child(4) strong ')
    }
    TotalPurchaseText(){
        return cy.get('.text-right h3 strong ')
    }

}
export default OrderReviewPage;