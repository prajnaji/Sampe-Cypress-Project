class SPPPage{
    pingcodeField(){
       return cy.get('div > div.col.s5.no-padding.pincode-field-container > div')
    }
    selectTodatDateOption(){
        return cy.get(' div.row.no-margin.delivery-types-dates.d-flex button:nth-child(1)')
    }
    selectTomorrowOption(){
        return cy.get('div.row.no-margin.delivery-types-dates.d-flex button:nth-child(2)')
    }
    selectFromCalender(){
        return cy.get(' div.row.no-margin.delivery-types-dates.d-flex button:nth-child(3)')
    }
    standardDelivery(){
       return cy.get('label[for=Standard]');
    }
    timePicker(){
        return cy.get('#timepicker'); 
    }
    addToCartCTA()
    {
        return cy.get('#add-cart');
    }
    /**Candel AddOns */
    addOns_number0()
    {
        return cy.get('#ao-p-card-565537 > div > div.product-info-revamp.relative > div')
    }
    addOns_number1(){
        return cy.get('#ao-p-card-565537 > div > div.product-info-revamp.relative > div')
    }
    addOns_singleRose(){
        return cy.get('#ao-p-card-579649 > div > div.product-info-revamp.relative > div')
    }
    continueWithOutAddons(){
        return cy.get('div.primary-cta-wrapper.active.add-ons-button > button:nth-child(3)')
    }

    personalizeNowCTA(){
        return cy.get('#personalize-revamp');
    }

    makeItExtraSpecialCTA(){
        return cy.get('#add-ons-btn');
    }


}

export default SPPPage ;
