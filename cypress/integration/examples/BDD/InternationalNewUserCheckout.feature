Feature: IGP POC Scenario  

 
Scenario: New User Checkout & Signup at checkout 
Given Launch Home Page & navigate to single product page
When Add to Cart
And Continue Checkout from Viewcart page
Then Landed on Checkout Signup Form & click on Signup Link
And Fill the Signup form
| name | county | mob | password |
| TEST DO NOT DELIVER | USA | 443322112233 | Tester@123 |
Then Fill International Adress Details Form & submit
| name1 | pin | city | state | address1 | mobnumber1 |
| International DO NOT DELIVER | 85001 | Phoenix | Arizona | #32 richmond street | 443322112233 |

And Continue Checkout from Order Summery Page
 


 