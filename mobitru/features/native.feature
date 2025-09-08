Feature: qavajs

  @native
  Scenario: qavajs interacts with mobitru native application
    When I click 'Sign In With Correct User'
    And I click 'Product (Galaxy S10) > Add To Cart'
    And I click 'Cart Button'
    And I click 'Cart > Continue To Checkout'
    And I type 'John' to 'Checkout > First Name'
    And I type 'Dou' to 'Checkout > Last Name'
    And I type 'Test 42' to 'Checkout > Address'
    And I hide keyboard
    And I click 'Checkout > Review Order'
    Then I expect text of 'Checkout > Total' to contain '735.00'
    When I click 'Checkout > Place Order'
    Then I expect text of 'Checkout > Order Placement Message' to equal 'Order successfully placed. Please check your email.'

  @native
  Scenario: qavajs interacts with mobitru native application (failed)
    When I click 'Sign In With Correct User'
    And I click 'Product (Galaxy S10) > Add To Cart'
    And I click 'Cart Button'
    And I click 'Cart > Continue To Checkout'
    And I type 'John' to 'Checkout > First Name'
    And I type 'Dou' to 'Checkout > Last Name'
    And I type 'Test 42' to 'Checkout > Address'
    And I hide keyboard
    And I click 'Checkout > Review Order'
    Then I expect text of 'Checkout > Total' to contain '600.00'
    When I click 'Checkout > Place Order'
    Then I expect text of 'Checkout > Order Placement Message' to equal 'Order successfully placed. Please check your email.'