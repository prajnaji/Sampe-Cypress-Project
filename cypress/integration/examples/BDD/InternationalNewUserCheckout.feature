Feature: IGP POC Scenario (International NewUser Checkout & Signup at checkout)

 
Scenario: New User Checkout & Signup at checkout 
Given Launch Home Page , Select Country & navigate to single product page
When Add to Cart
And Continue Checkout from Viewcart page
Then Select Signup Option or link
And Fill the Signup Form
| name | county | mob | password |
| TEST DO NOT DELIVER | USA | 443322112233 | Tester@123 |
Then Fill International Adress Details Form & submit form
| name1 | pin | city | state | address1 | mobnumber1 |
| International DO NOT DELIVER | 85001 | Phoenix | Arizona | #32 richmond street | 443322112233 |

And Continue Checkout from Order Summery Page
 


 