Feature: IGP POC Scenario  

 
Scenario: New User Checkout & Signup at checkout 
Given Launch Home Page
When Navigate to Spp Page
And  EnterPincode & check Availability
And Enter Delivery Option Type & Time
And Add to Cart
And Click Continue Without Addons
Then Continue Checkout from Viewcart page
And Landed on Checkout Signup Form & click on Signup Link
And Fill the Signup form 
And Fill Adress Details Form & submit
And Apply CupponCode at OrderSummeryPage

 