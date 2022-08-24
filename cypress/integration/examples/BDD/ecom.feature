
Feature: End to End Ecommerce Validation

@Regression
Scenario:  Place order scenario
Given Open the Ecomm Page
When Adding Product to Cart
And Validate the total price
Then Select the country submit and verify ThankYou


@Smoke
Scenario: Filling data using Fixture concepts
Given Open the Ecomm Page
And Fill the form Details page 
|name|email|password|
|God|god@gmail.com|godpwd|









