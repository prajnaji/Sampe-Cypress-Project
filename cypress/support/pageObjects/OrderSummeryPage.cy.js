class OrderSummeryPage{

    /*Applay CupponCode link*/
    applay_cupponcodelink(){return cy.get('span.coupon-form-focus');}
    /*Enter Cuppon Code Field */
    cupponCodeInputField(){return cy.get('#coupon-form input');}
    /*Cuppon Code submit button */
    submit_cupponCodeBtn(){return cy.get('#coupon-form button');}

    click_ApplyCupponCodeLink(){
        return cy.get('span.coupon-form-focus').click();
    }
     

    click_ProceedTOPayment_CTA(){
        return cy.get('div.payment-button-container button.btn-mr.padding-1-0').click({force:true});
    }


    /*Fill Address Details Form */
    applayCupponCode(ccode){
        cy.get('span.coupon-form-focus').click({force:true})
        cy.get('#coupon').type(ccode,{force:true}).type('{enter}')
        cy.get('span.Montbold-font.number.bold.totalAmtPay').should('be.visible')
    }
    

}
export default OrderSummeryPage;