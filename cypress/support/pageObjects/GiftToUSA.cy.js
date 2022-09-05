class GiftToUSA {

    slectProduct(){
    cy.get('[class="slick-active"]').eq('2').click()
    cy.contains('Bunch of 12 Roses with Godiva Chocolates & Teddy Bear').click()
    }

}
export default GiftToUSA;