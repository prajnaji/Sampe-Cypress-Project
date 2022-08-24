class AddAddressPage {

    getFillAddress()
    {
        return cy.get('input.validate.filter-input.form-control');
    }
    getselectCheckbox()
    {
        return cy.get('div input[type=checkbox]');
    }
    getContinueCheckout()
    {
        cy.get('input.btn.btn-success.btn-lg');
    }
}

export default AddAddressPage;