class GiftToUSA {

    slectProduct(skuname){
    cy.get('[class="slick-active"]').eq('2').click()
    cy.contains(skuname).click()
    }

}
export default GiftToUSA;