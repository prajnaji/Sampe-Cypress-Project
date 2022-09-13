class DeliveryDetails {

    /*First & Last Name field */
    nameField() {

        return cy.get('input[name=fname]');
    };
    /*Pincode Field  */
    pincode() {
        return cy.get('#location-input');
    };
    /*City Field */
    cityField() {
        return cy.get('#new-city');
    };
    /*State Field */
    stateField() {
        return cy.get('#new-state');
    };

    /*Address Line 1*/
    addressLine1() { return cy.get('input[name=saddr]') };

    /*AddressLine 2 */
    addressLine2() { return cy.get('input[name=saddr2]') };

    /*mobile number 1 */
    mobileNumber1() { return cy.get('input[name=mob]') };

    /*Address Type Radio Buttons */
    addressTypeRadioBtns() { return cy.get('div.with-otherfield-addr') }

    /*Save & Submit Button */
    submitButton() { return cy.get('button.btn.revamp-c-save-addr-btn'); }
 
    /* Filling The form for International User */
    fillingDeliveryDetails(name, pincode, city, state, addressLine1,mob) {
        cy.get('input[name=fname]').type(name, { force: true });
        cy.get('#location-input').type(pincode, { force: true });
        cy.get('#new-city').type(city, { force: true });
        cy.get('#new-state').type(state, { force: true });
        cy.get('input[name=saddr]').type(addressLine1, { force: true });
        cy.get('input[name=mob]').type(mob, { force: true });
        cy.get('button.btn.revamp-c-save-addr-btn').click({ force: true })
    }

    /* Filling Form for Country User */
    fillingDeliveryDetails1(name, addressLine1,mobilenumber){
        cy.get('input[name=fname]').type(name,{force:true});
        cy.get('input[name=saddr]').type(addressLine1, { force: true });
        cy.get('input[name=mob]').type(mobilenumber, { force: true });
        cy.get('button.btn.revamp-c-save-addr-btn').click({force:true});
        cy.wait(9000)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('div.deliver-here-link a').click({ force: true })
    }

     
}
export default DeliveryDetails;