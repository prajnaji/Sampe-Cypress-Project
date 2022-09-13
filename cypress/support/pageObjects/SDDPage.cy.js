class SDDPage{
    
    truffelCake(){
        return cy.get('')
    }

    /*Selecting Quick Filters present in Same Day Delivery Page  */

    quickFilters(quickfilterType,Productname){
        cy.get('ul.cat-f-list >li').each(($ele,index,list)=>{
            if($ele.text()==quickfilterType){
                cy.get('ul.cat-f-list >li').eq(index).click();
                cy.wait(7000);
                var product=cy.get('div.image-holder > a > div >div>div>p')
                product.contains(Productname).click();
            }
             
            })    
    };
    /*Selecting the Required product by giving input through feature file  */
    selectProductbyFiltering(filterType , productName){   
    cy.get('li.cat-f-list-item.z-depth-1 > span:nth-child(2)').each(($ele,index,list)=>{
        if($ele.text()==filterType){
            cy.wait(7000);
            cy.get('ul.cat-f-list >li').eq(index+1).click({force:true});
            
            cy.contains(productName).click({force:true});
        }
    })
    };

 

}
export  default SDDPage;