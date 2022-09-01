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
    enterValidCupponcode(){
        return cy.get('#coupon-form input').type("igp10");
        return cy.get('#coupon-form button').click();
    }

    click_ProceedTOPayment_CTA(){
        return cy.get('div.payment-button-container button.btn-mr.padding-1-0').click();
    }

}
export default OrderSummeryPage;