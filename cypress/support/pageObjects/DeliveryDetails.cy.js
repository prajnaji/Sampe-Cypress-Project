class DeliveryDetails{

    /*First & Last Name field */
    nameField(){ 
       
        return cy.get('input[name=fname]');
    };
    /*Pincode Field  */
    pincode(){
        return cy.get('#location-input');
    };
    /*City Field */
    cityField(){
        return cy.get('#new-city');
    };
    /*State Field */
    stateField(){
        return cy.get('#new-state');
    };

    /*Address Line 1*/
    addressLine1(){return cy.get('input[name=saddr]')};

    /*AddressLine 2 */
    addressLine2(){return cy.get('input[name=saddr2]')};
     
    /*mobile number 1 */
    mobileNumber1(){return cy.get('input[name=mob]')};

    /*Address Type Radio Buttons */
    addressTypeRadioBtns(){return cy.get('div.with-otherfield-addr')}

    /*Save & Submit Button */
    submitButton(){return cy.get('button.btn.revamp-c-save-addr-btn');}







    //Reusable methods 
     

    
   
}
export default DeliveryDetails;