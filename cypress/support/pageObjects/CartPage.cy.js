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

    //Reusable Method
    /* */
    get_IndividualLineItem_Price(){
        let sum=0;
        cy.get('p.c-item-d-type.d-flex.justify-content-flex-end > span:nth-child(1)').each(($ele,index,list)=>{
            var indvidualproductPrice=$ele.text().split(" ");
            indvidualproductPrice = indvidualproductPrice[1].trim()
            sum = Number(sum)+Number(indvidualproductPrice)
        })
    }

    assert_SumOFLineItemPrice_EQ_TotalPrice(){
        cy.get('p.overall-price > span[id=cart-total-val]').then(function(totalPrice){
            const text= totalPrice.text();
           var total_price= text.split(" ");
           total_price=total_price[1].trim();
           expect(Number(sum)).to.equal(Number(total_price));
        })
    }


    
    
     
     

}

export default CartPage;