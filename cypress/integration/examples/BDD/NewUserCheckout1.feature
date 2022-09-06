Feature: IGP POC Scenario (New User ) 

 
Scenario: New User Checkout & Signup at checkout 
Given Launch Home Page
When Navigate to Spp Page
| GNAVOption | quickfilter | productName |
| Same Day Delivery | Cakes | Black Forest Cake (Half Kg) |
And EnterPincode , Delivery Option Type and Time
And Add to Cart
And Click Continue Without Addons
Then Continue Checkout from Viewcart page
And Click Checkout Signup Link & Register as a New User
| name | county | mob | password |
| TEST DO NOT DELIVER | USA | 443322112233 | Tester@123 |
And Fill Adress Details Form & submit
| name | AddressLine1 | mobilenumber |
| TEST DO NOT DELIVER |Gulab Estate, T2 Airport Road, Near Sakinka Telephone Exchange |9776186769|
And Continue Checkout from Order Summery Page

 