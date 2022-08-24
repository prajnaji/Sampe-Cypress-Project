class HomePage
{

    editNameField()
    {
       return cy.get('form > div:nth-child(1) > input')
    }
    editEmailField()
    {
      return cy.get('form > div:nth-child(2) > input')
    }
    editPasswordField()
    {
        return cy.get('form > div:nth-child(3) > input')
    }

    gettwoWayDataBinding()
    {

    }

    selctDropdown()
    {
       return cy.get("select")
    }

    gnavShop_option()
    {
       return cy.get('ul.navbar-nav  li:nth-child(2)')
    }
    

}

export default HomePage;
