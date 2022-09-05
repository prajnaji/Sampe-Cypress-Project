Feature: Sample TC Running  

 
Scenario: Return User Login Scenario 
Given Launch Home Page
When Navigate to Spp Page
And  EnterPincode & check Availability
And Enter Delivery Option Type & Time
And Add to Cart
And Click Continue Without Addons
Then Continue Checkout from Viewcart page
 