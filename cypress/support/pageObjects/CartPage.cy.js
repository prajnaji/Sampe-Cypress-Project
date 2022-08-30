class CartPage{
    lineItemProductNames(){
        return cy.get('div.flex-1.d-flex.flex-direction-column > a')
    }
    proceedCheckout(){
        return cy.get('#enabled-button')
 
    }
    shoppingBagTitleCheck(){
        cy.title().should('eq', 'Shopping Cart')
    }

}

export default CartPage;