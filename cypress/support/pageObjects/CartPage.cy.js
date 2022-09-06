class CartPage{
    lineItemProductNames(){
        return cy.get('div.flex-1.d-flex.flex-direction-column > a')
    }
    proceedCheckout(){
        return cy.get('#enabled-button');
 
    }
    shoppingBagTitleCheck(){
        cy.title().should('eq', 'Shopping Cart');
    }

    lineItemPrice(){
        return cy.get('span.inr.number.s-total-val.s-total-val-revamp');
    }
    footerTotalPricetext(){
        return cy.get('div.revamp-cart-footer #cart-total-val');
    }
    footerqty(){
        return cy.get('p.overall-price span');
    }
    qtyoption(){
        return cy.get('span.symbol.inc-quantity');
    }

    //Reusable Method

    /*Cart Value Assertion */
    shoppingBagCartAssertion(){
        let sum=0;
    cy.get('span.inr.number.s-total-val.s-total-val-revamp').each(($ele,index,list)=>{
        
        var indvidualproductPrice=$ele.text().split(" ");
        indvidualproductPrice = indvidualproductPrice[1].trim()
        sum = Number(sum)+Number(indvidualproductPrice)
        

    }).then(function(){console.log(sum)})

   
    cy.get('div.revamp-cart-footer #cart-total-val').then(function(totalpricetext){

        var price=totalpricetext.text().split(" ");
        price= price[1].trim();
        expect(Number(sum)).to.equal(Number(price));
    })
    cy.get('p.overall-price span').should('be.visible');
    cy.get('span.symbol.inc-quantity').should('exist').should('be.visible')
    //cy.get('#cart-item-remove-container-520808').should('be.visible')
    cy.get('#enabled-button').should('be.visible');
}
}

export default CartPage;