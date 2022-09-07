class HomePage
{
   myaccountIcon(){
      return cy.get('a[title=Account] div.icon-wrapper.top-action-icons.quick-menu')
   }
   viewCartICon(){
      return cy.get('a[title=Cart]')
   }
   shortListIcon(){
      return cy.get('a[title=Shortlist]')
   }
   hamburgerIcon(){
      return cy.get('div.gc-icon-col.gc-icon-closed img[class=img-responsive]')
   }

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
    sddCTA()
    {
      return cy.get('a.tile-8.sdd')
    }
      clickPersonalizedGnavSection(){
      return cy.get('#selection-panel > div > a.tile-8.personalized').click()
    }

    /*Gnavigation 9 Options */
    getGnavoption(){
      return cy.get('div.sel-pnl-re > a > span')
    }

   /*Selcting Country in Home page */
   scroll_And_SelectCountry(counrtyName){
   cy.contains('Send Gifts World Wide').scrollIntoView()
   cy.contains(counrtyName).click()
    }

    /*Selecting Gnav Option */
    selectOptionFromGnav(gnavOption){
      cy.get('div.sel-pnl-re > a > span').each(($ele,index,list)=>{
         if($ele.text()==gnavOption){
            cy.get('div.sel-pnl-re > a > span').eq(index).click();
         }
      })
    }

    

}

export default HomePage;
