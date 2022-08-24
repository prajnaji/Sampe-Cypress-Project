class AddAddressPage {

    getFillAddress()
    {
        return cy.get('input.validate.filter-input.form-control');
    }
    getselectCheckbox()
    {
        return cy.get('label[for=checkbox2]');
    }
    getContinueCheckout()
    {
         return cy.get('form input[type=submit]')
    }
}

export default AddAddressPage;