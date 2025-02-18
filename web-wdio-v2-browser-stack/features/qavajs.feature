Feature: Sauce Demo

  Background: 
    Given I open '$bstackDemoUrl' url

  Scenario: add product to cart
    And I click 'Product (iPhone 12 Pro Max) > Add To Cart'
    And I expect text of 'Cart > Subtotal' to contain '1099.00'